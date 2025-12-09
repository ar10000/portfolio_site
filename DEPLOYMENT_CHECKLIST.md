# Deployment & Security Checklist

## 🔗 Personal Links - UPDATED ✅

All personal links have been updated:
- ✅ Calendly: `https://calendly.com/andrewryan763/30min`
- ✅ LinkedIn: `https://www.linkedin.com/in/lets-move-forward/`
- ✅ Email: `andrewryan763@gmail.com`
- ✅ GitHub: `https://github.com/ar10000`
- ✅ Twitter: `@AndrewR53368303` (https://twitter.com/AndrewR53368303)

## 📋 Pre-Deployment Checklist

### Content
- [x] All personal links updated
- [x] All project GitHub links updated to `https://github.com/ar10000`
- [x] Creative Garden project page data added
- [x] AutoLeadCloser project data updated with latest information
- [ ] Add actual project images (Creative Garden, AutoLeadCloser)
- [ ] Create OG image (1200x630px) for social sharing
- [ ] Add favicon and apple-touch-icon
- [ ] Update project demo URLs (if available - currently placeholders)

### Forms & Integrations
- [x] Contact form connected to API route
- [x] Newsletter signup connected to API route
- [x] Calendly embed added to contact page
- [ ] Configure email service (Resend/SendGrid/nodemailer)
- [ ] Test contact form submission
- [ ] Test newsletter signup

### SEO & Metadata
- [x] Meta tags configured
- [x] Open Graph tags added
- [x] Twitter Card tags added
- [x] Sitemap.xml generated
- [x] Robots.txt configured
- [ ] Add Google Search Console verification
- [ ] Add actual OG image

### Testing
- [x] All navigation links work
- [x] Responsive design verified
- [x] Animations smooth
- [ ] Test contact form end-to-end
- [ ] Test newsletter signup
- [ ] Test Voice AI chatbot
- [ ] Test Calendly embed
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Mobile device testing

## 🚀 Deployment Steps (Vercel)

### 1. Prepare Repository
```bash
# Ensure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy"

### 3. Configure Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables, add:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional
OPENAI_API_KEY=sk-...  # If using OpenAI for Voice AI
ANTHROPIC_API_KEY=sk-ant-...  # If using Claude for Voice AI
EMAIL_USER=andrewryan763@gmail.com  # For nodemailer
EMAIL_PASSWORD=your-app-password  # Gmail app password
# OR
RESEND_API_KEY=re_...  # For Resend email service
ADMIN_PASSWORD=your-secure-password  # Password for /admin/checklist page
```

### 4. Custom Domain (Optional)
1. In Vercel Dashboard → Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

### 5. Post-Deployment Verification
- [ ] Visit production URL
- [ ] Test all pages load correctly
- [ ] Test contact form
- [ ] Test newsletter signup
- [ ] Verify Calendly embed works
- [ ] Check sitemap.xml is accessible
- [ ] Verify robots.txt
- [ ] Test Voice AI chatbot
- [ ] Check mobile responsiveness

## 🔒 Security Enhancements

### Recommended Security Measures

#### 1. Rate Limiting
Add rate limiting to API routes to prevent abuse:

```typescript
// Example: app/api/contact/route.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"),
});

export async function POST(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);
  
  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }
  // ... rest of handler
}
```

#### 2. Input Sanitization
Sanitize all user inputs:

```typescript
import DOMPurify from "isomorphic-dompurify";

const sanitizedMessage = DOMPurify.sanitize(message);
```

#### 3. CSRF Protection
Next.js has built-in CSRF protection, but ensure:
- All forms use POST requests
- API routes validate request origin
- Use SameSite cookies

#### 4. Security Headers
Add to `next.config.mjs`:

```javascript
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on"
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload"
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block"
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin"
  },
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://assets.calendly.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.openai.com https://api.anthropic.com https://calendly.com;"
  }
];

export default {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};
```

#### 5. reCAPTCHA (Optional)
Add to contact form to prevent spam:

```typescript
// Install: npm install react-google-recaptcha
import ReCAPTCHA from "react-google-recaptcha";

// In form component
const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

// Verify on server
const recaptchaResponse = await fetch(
  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaValue}`,
  { method: "POST" }
);
```

#### 6. Error Monitoring
Set up error tracking:

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

## 📊 Analytics Setup

### Google Analytics 4
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create account (free)
3. Get Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. Already configured in `app/layout.tsx` ✅

### Vercel Analytics
- Automatically available on Vercel
- No setup needed
- View in Vercel Dashboard → Analytics

## 📧 Email Service Setup

### Option 1: Nodemailer (Simple)
```bash
npm install nodemailer
```

Update `app/api/contact/route.ts`:
```typescript
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // App password, not regular password
  },
});

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: `New Contact: ${name}`,
  html: `...`,
});
```

**Gmail App Password Setup:**
1. Enable 2FA on Gmail
2. Go to Google Account → Security → App Passwords
3. Generate app password
4. Use that as `EMAIL_PASSWORD`

### Option 2: Resend (Recommended)
```bash
npm install resend
```

1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_...
   ```

Update `app/api/contact/route.ts`:
```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Portfolio <onboarding@resend.dev>",
  to: ["andrewryan763@gmail.com"],
  subject: `New Contact: ${name}`,
  html: `...`,
});
```

## 🎯 Final Steps Before Launch

1. **Test Everything**
   - [ ] All links work
   - [ ] Forms submit successfully
   - [ ] Calendly embed loads
   - [ ] Voice AI chatbot works
   - [ ] Mobile responsive
   - [ ] No console errors

2. **Content Review**
   - [ ] All text is accurate
   - [ ] Project descriptions are correct
   - [ ] Pricing is accurate
   - [ ] Contact information is correct

3. **Performance**
   - [ ] Run Lighthouse audit (aim for 90+)
   - [ ] Optimize images
   - [ ] Check bundle size

4. **SEO**
   - [ ] Submit sitemap to Google Search Console
   - [ ] Verify meta tags
   - [ ] Test Open Graph previews

5. **Security**
   - [ ] Review security headers
   - [ ] Test rate limiting
   - [ ] Verify environment variables are secure

## 🚨 Post-Launch Monitoring

- Monitor Vercel logs for errors
- Check Google Analytics for traffic
- Review contact form submissions
- Monitor API usage
- Check email deliverability

---

## 📊 Current Status Summary

### ✅ Completed
- All personal links (Calendly, LinkedIn, Email, GitHub, Twitter) updated across all pages
- All project GitHub links updated to `https://github.com/ar10000`
- Contact form API route configured
- Newsletter signup API route configured
- Calendly embed added to contact page
- SEO metadata (meta tags, Open Graph, Twitter Cards)
- Sitemap and robots.txt generated
- Navigation and responsive design verified
- Voice AI chatbot with error handling implemented

### ⚠️ Needs Attention
- Project demo URLs for AutoLeadCloser are null (private/internal use - this is correct)
- Some project demo URLs may be placeholders (verify if needed)
- Email service not yet configured (Resend/SendGrid/nodemailer)
- OG image needs to be created (1200x630px)
- Favicon and apple-touch-icon need to be added
- End-to-end testing of forms and integrations

### 🚀 Ready For
- Deployment to Vercel (after adding Creative Garden project data)
- Email service configuration (choose Resend, SendGrid, or nodemailer)
- Google Analytics setup (optional)
- Security headers implementation (optional but recommended)

**Status:** ✅ Personalization complete | ⚠️ Minor content gaps | 🚀 Ready for deployment prep

