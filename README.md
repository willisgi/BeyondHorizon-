# BeyondHorizon - AI Consultancy Website

A modern, sleek AI consultancy website built with Next.js 16, React 19, and Tailwind CSS.

## Features

- ✨ Modern dark theme with glowing accent lines
- 📧 Fully functional contact form with email integration
- 🎯 Service detail pages with comprehensive information
- 📱 Fully responsive design
- 🚀 Production-ready with security headers and rate limiting
- ⚡ Built with Next.js 16 and Turbopack

## Prerequisites

- Node.js 18+ or pnpm 8+
- A Resend account for email functionality (optional for development)

## Installation

1. **Clone or extract the project**
   \`\`\`bash
   cd beyond-horizon
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`
   
   Then edit `.env.local` and add your Resend API key and contact email:
   \`\`\`
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=your_verified_email@example.com
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   pnpm dev
   # or
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
beyond-horizon/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.tsx          # Contact form API endpoint
│   ├── services/
│   │   └── [slug]/
│   │       └── page.tsx           # Service detail pages
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles
├── components/
│   ├── ui/                        # shadcn/ui components
│   ├── header.tsx                 # Navigation header
│   ├── hero.tsx                   # Hero section
│   ├── services.tsx               # Services grid
│   ├── contact.tsx                # Contact form
│   └── footer.tsx                 # Footer
├── lib/
│   ├── security.ts                # Security utilities
│   └── utils.ts                   # Utility functions
├── middleware.ts                  # Next.js middleware
├── next.config.mjs                # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies
\`\`\`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Email Configuration

The contact form uses Resend for email delivery. To enable email sending:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to `.env.local` as `RESEND_API_KEY`
4. Verify your email address in Resend
5. Add the verified email to `.env.local` as `CONTACT_EMAIL`

**Note**: In testing mode, Resend only sends to verified email addresses. To send to any email, verify a domain in your Resend account.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in the Vercel dashboard
5. Deploy!

### Deploy to Other Platforms

This is a standard Next.js 16 application and can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku
- etc.

## Troubleshooting

### "Module not found" errors
- Run `pnpm install` to ensure all dependencies are installed
- Clear `.next` folder: `rm -rf .next`
- Restart the dev server

### Email not sending
- Check that `RESEND_API_KEY` is set in `.env.local`
- Verify the email address is verified in Resend dashboard
- Check browser console for error messages

### Port 3000 already in use
\`\`\`bash
pnpm dev -- -p 3001
\`\`\`

## Development Tips

- Use `pnpm dev` for hot-reload development
- Check `app/api/contact/route.tsx` for form submission logic
- Modify `components/hero.tsx` for hero section content
- Update `components/services.tsx` to add/remove services
- Edit `app/globals.css` for theme colors and styling

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
