import { headers } from "next/headers"

// Simple in-memory rate limiter (for development)
// In production, use Redis or a proper rate limiting service
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function getClientIp(): string {
  const headersList = headers()
  return headersList.get("x-forwarded-for")?.split(",")[0].trim() || headersList.get("x-real-ip") || "unknown"
}

export function checkRateLimit(identifier: string, limit = 5, windowMs = 3600000): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count < limit) {
    record.count++
    return true
  }

  return false
}

export function securityHeaders() {
  return {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  }
}

export function logAuditEvent(event: string, details: Record<string, unknown>): void {
  // In production, send to a logging service
  console.log(`[AUDIT] ${event}:`, details)
}
