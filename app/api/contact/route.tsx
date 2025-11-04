import { type NextRequest, NextResponse } from "next/server"

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 }) // 1-hour window
    return true
  }

  if (limit.count >= 5) {
    return false // Max 5 requests per hour
  }

  limit.count++
  return true
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown"

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 },
      )
    }

    // ✅ FIXED: safely parse JSON
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { message: "Invalid or missing JSON body." },
        { status: 400 },
      )
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { message: "Invalid request body." },
        { status: 400 },
      )
    }

    const { name, email, company, industry, challenge, budget, timeline, message } = body

    if (!name || !email || !company) {
      return NextResponse.json(
        { message: "Missing required fields: name, email, and company are required." },
        { status: 400 },
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ message: "Invalid email format." }, { status: 400 })
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { message: "Message must be at least 10 characters long." },
        { status: 400 },
      )
    }

    const contactData = {
      name,
      email,
      company,
      industry,
      challenge,
      budget,
      timeline,
      message,
      submittedAt: new Date().toISOString(),
      ip: ip === "unknown" ? "N/A" : ip,
    }

    console.log("Contact form submission received:", contactData)

    try {
      if (process.env.RESEND_API_KEY) {
        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY)

        const fromEmail = "onboarding@resend.dev"
        const toEmail = "wilsonmbachi6@gmail.com"

        await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          replyTo: email,
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Industry:</strong> ${industry || "Not specified"}</p>
            <p><strong>Challenge:</strong> ${challenge || "Not specified"}</p>
            <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
            <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          `,
        })

        console.log("Email sent successfully to", toEmail)
      } else {
        console.log("Resend API key not configured. Email not sent. Data logged instead.")
      }
    } catch (emailError) {
      console.error("Error sending email:", emailError)
      // Allow success even if email fails
    }

    return NextResponse.json(
      { message: "Thank you for your submission. We'll be in touch soon!" },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { message: "An error occurred. Please try again later." },
      { status: 500 },
    )
  }
}
