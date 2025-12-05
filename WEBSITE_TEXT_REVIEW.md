# Website Text Content - Expert Review Document

This document contains all user-facing text from the website, organized by page and section. Use this for expert review and refinement.

**Last Updated:** Current as of latest website rewrite with calm, technical, minimal tone. Updated with new pricing structure (Free Fit Check, Starter Build, Hourly Development, Complete System). Project detail pages standardized to consistent structure (Hero Summary, Role & Duration, Client Problem, Solution Overview, Key Features, Tech Stack with Architecture, Technical Implementation section for all projects, Expected Impact section for AutoLeadCloser, Lessons Learned, CTA). Engineering Notes section removed. Tech Stack consolidated into horizontal cards with architecture descriptions. All projects now use standardized "Technical Implementation" section. AutoLeadCloser includes "Expected Impact (Modeled Benchmarks)" with 5 metric cards. All project descriptions updated to honest, accurate representations without inflated metrics.

---

## Navigation

**Menu Items:**
- Home
- Projects
- Pricing
- Contact

**CTA Button:** "Contact" (styled as primary gradient button)

**Logo:** "Andrew Ryan"

---

## Home Page

### Hero Section

**Title:**
Andrew Ryan

**Subtitle:**
Freelance AI Developer

**Value Proposition:**
I build revenue-generating AI tools and automations for your business — fast.

**Stats Badges:**
- Production-Ready Systems
- 1–2 Week Turnaround

**How I Work:**
I work with fast, iterative prototypes. I own complete systems. I communicate clearly and keep architecture simple.

### How I Work Section

**Section Title:**
How I Work

**Target Audience Micro-copy:**
Practical automation for startups and small businesses.

**Three Cards (3-column grid on desktop, 1-column on mobile):**

1. **Fast, iterative prototypes**
   - Icon: Zap
   - Description: I build working systems quickly, iterate based on feedback, and ship improvements continuously.

2. **Complete system ownership**
   - Icon: Code2
   - Description: I own the entire stack—front-end, backend, AI logic, integrations, and infrastructure.

3. **Technical focus areas**
   - Icon: Workflow
   - Description: AI agents and automation. Full-stack development. API integrations and workflow orchestration.

**Note:** No CTAs or metrics in this section. Just these three cards.

### Recent Work Section

**Section Title:**
Recent Work

**Projects:**
- AutoLeadCloser - AI email qualification system
- Creative Garden - Flutter productivity app
- FlowCircle - Clarity app for neurodivergent creatives
- Portfolio platform - Next.js + AI

**Note:** All project cards are clickable and link to their respective detail pages.

### Call to Action Section

**Title:**
Let's work together

**Buttons:**
- "View Projects" → /projects
- "See Pricing" → /pricing

---

## Projects Page

### Header

**Title:**
Projects

**Subtitle:**
Technical work and system architecture.

### Project Cards

Each project card displays:
- Large preview image/screenshot (300px+ height)
- Badge indicating status (Prototype, In Development, Production, Live)
- Project title (larger and bolder)
- Description (honest, accurate summary)
- Technology tags (pill-shaped, visually secondary)
- "View Project" button with gradient styling

**Project Cards:**

**AutoLeadCloser:**
- Title: AutoLeadCloser
- Description: AI email qualification system. Processes inbound leads, extracts qualification criteria, and routes to calendar booking. Production-ready prototype.
- Status badge: "Prototype"

**FlowCircle:**
- Title: FlowCircle
- Description: Minimalist project management app for individual creatives. Built with Next.js 14 and Supabase. Early build focusing on foundations.
- Status badge: "In Development"

**Creative Garden:**
- Title: Creative Garden
- Description: Flutter app for tracking creative projects through lifecycle stages. Momentum scoring with offline support.
- Status badge: "Production"

**Portfolio Website:**
- Title: Portfolio Website
- Description: Next.js 14 portfolio with AI chatbot, GitHub sync, and automated content management. Working example of technical capabilities.
- Status badge: "Live"

---

## Project Detail Pages

All project detail pages follow a consistent structure:

### Structure (Applied to All Projects)

1. **Hero Summary** (2-3 lines)
2. **Role & Duration** (bullets)
3. **Client Problem** (3-4 bullets)
4. **Solution Overview** (short paragraph)
5. **Key Features** (4-6 bullets with icons)
6. **Tech Stack** (horizontal cards grouped by category: Frontend, Backend, AI/ML, Infrastructure)
   - Each card shows: Category icon, Category name, Tech names as badges, Architecture description for that category
7. **Technical Implementation** (standardized section for all projects - 6 bullets describing technical implementation details)
8. **Expected Impact (Modeled Benchmarks)** (AutoLeadCloser only - 5 metric cards with modeled estimates)
8. **Screenshots** (placeholder: "[Insert screenshots here]")
9. **Lessons Learned** (short paragraph)
10. **Call-to-Action** ("Want a system like this? Book a 10-minute Fit Call.")

**Note:** Engineering Notes section has been removed. Tech Stack and Architecture have been consolidated into a single "Tech Stack" section with horizontal cards that combine tech names and architecture descriptions. All projects now use the standardized "Technical Implementation" section (6 bullets) for consistency. AutoLeadCloser includes an additional "Expected Impact (Modeled Benchmarks)" section with 5 metric cards showing modeled estimates.

---

### Creative Garden Project Page

**Hero Summary:**
Flutter app for managing creative projects through lifecycle stages. Uses Supabase triggers for momentum scoring. Production-ready with offline caching and GDPR export.

**Role & Duration:**
- Role: Full-stack AI Builder
- Timeline: 8 weeks
- Tools: Flutter, Supabase, Dart, PostgreSQL

**Client Problem:**
- Creative individuals struggle to maintain momentum across multiple projects
- Hard to track which projects are active vs. stalled without clear structure
- No good system for understanding project health based on activity patterns
- Existing tools either too complex (project management) or too simple (to-do lists)

**Solution Overview:**
The app manages creative projects through defined lifecycle stages: Seed (idea), Growing (in progress), Alive (active), Compost (archived). Momentum scoring calculates project health based on check-in frequency and energy levels. Users can reflect on progress, view analytics, and track projects offline. Built with Flutter for cross-platform support and Supabase for data storage.

**Key Features:**
- Project lifecycle management (Seed → Growing → Alive → Compost): Projects move through defined stages from idea to completion
- Momentum scoring via Supabase database triggers: Calculates project health from check-in frequency and energy levels
- Check-ins with energy level tracking: Users log progress with energy levels to track project momentum
- Analytics dashboard showing project health over time: Visual insights into project activity and momentum trends
- Offline functionality with local caching: Full app functionality available without internet connection
- GDPR-compliant data export: Users can export all their data in JSON format
- Cross-platform (iOS, Android) with single codebase: Flutter enables deployment to both platforms from one codebase

**Tech Stack:**
- **Frontend:** Flutter cross-platform application with Provider state management
  - Technologies: Flutter
- **Backend / DB:** Supabase PostgreSQL with database triggers for momentum scoring
  - Technologies: Supabase
- **Caching:** Local storage layer for offline functionality
  - Technologies: Flutter
- **Infrastructure:** Single Dart codebase deployed to iOS and Android
  - Technologies: Flutter

**Technical Implementation:**
- Supabase triggers calculate momentum scores automatically when check-ins are logged
- Local caching layer enables full offline functionality
- Flutter state management using Provider pattern
- PostgreSQL database with optimized queries for analytics
- GDPR export functionality generates JSON of all user data
- Cross-platform deployment from single Dart codebase

**Screenshots:**
[Insert screenshots here]

**Lessons Learned:**
Creative Garden demonstrates that database triggers can handle complex scoring logic efficiently. The project proves that offline-first mobile apps require careful state management and local caching strategies. Building for cross-platform deployment from day one allows reaching both iOS and Android users without maintaining separate codebases. The architecture prioritizes user data ownership with GDPR-compliant export functionality.

**Call-to-Action:**
Want a system like this? Book a 10-minute Fit Call.

---

### FlowCircle Project Page

**Hero Summary:**
Minimalist project management app built with Next.js 14 and Supabase. Features authentication, profile management, and reflection engine structure. Early build focusing on core foundations.

**Role & Duration:**
- Role: Full-stack AI Builder
- Timeline: 4 weeks
- Tools: Next.js 14, TypeScript, Supabase, PostgreSQL

**Client Problem:**
- Individual creatives need simple project tracking without cognitive overload
- Existing tools are too complex with features most solo creators don't need
- No good options for minimal, distraction-free project management
- Need for clean data architecture that can scale to team features later

**Solution Overview:**
The app provides minimal project management focused on clarity and simplicity. Users can create projects, track progress, and reflect on work without unnecessary features. Built with Supabase for authentication and data storage. Architecture designed with future team features in mind, but currently focused on individual creators.

**Key Features:**
- User authentication via Supabase: Secure authentication system using Supabase Auth
- Project creation and management: Simple interface for creating and tracking projects
- Reflection engine data structure: Database schema designed for reflection and progress tracking
- Clean, accessible UI with minimal cognitive load: Minimalist design focused on clarity and simplicity
- Database schema designed for future multi-user expansion: Architecture allows scaling to team features later
- Next.js App Router for routing and data fetching: Modern routing with optimized performance patterns

**Tech Stack:**
- **Frontend:** Next.js 14 App Router with TypeScript and Tailwind CSS
  - Technologies: Next.js 14, TypeScript, Tailwind CSS
- **Backend / DB:** Supabase PostgreSQL for authentication and data storage
  - Technologies: Supabase
- **Styling:** Tailwind CSS with shadcn/ui components for consistent design
  - Technologies: Tailwind CSS, shadcn/ui
- **Infrastructure:** Clean architecture pattern designed for future team features
  - Technologies: Next.js 14

**Technical Implementation:**
- Authentication system using Supabase Auth
- PostgreSQL database with optimized queries
- Next.js 14 App Router for routing and data fetching
- Tailwind CSS + shadcn/ui for consistent design
- TypeScript for type safety
- Clean architecture pattern allowing future team features

**Screenshots:**
[Insert screenshots here]

**Lessons Learned:**
FlowCircle demonstrates the importance of starting with solid technical foundations. The project focuses on clean data architecture and simple user experience before adding complexity. Building for individual users first allows testing core concepts before scaling to team features. The architecture proves that starting simple doesn't mean building poorly—proper database design and authentication setup allow future expansion.

**Call-to-Action:**
Want a system like this? Book a 10-minute Fit Call.

---

### AutoLeadCloser Project Page

**Hero Summary:**
AI email qualification system that processes inbound leads automatically. Extracts qualification criteria from natural language and routes qualified leads to calendar booking. Production-ready prototype being tested.

**Role & Duration:**
- Role: Full-stack AI Builder
- Timeline: 6 weeks
- Tools: Python, Supabase, Claude AI, Gmail API

**Client Problem:**
- Service businesses receive leads via email but lack automated response systems
- Manual qualification requires reading emails, assessing fit, and deciding next steps
- Inconsistent response times and qualification criteria impact conversion
- After-hours leads wait until business opens for response

**Solution Overview:**
The system processes inbound lead emails automatically. It extracts qualification criteria—budget, timeline, decision authority—from natural language using AI. The system maintains full conversation context across email threads, allowing it to ask follow-up questions and provide relevant information. When a lead meets qualification criteria, the system automatically books a meeting. The system processes leads automatically, handling them regardless of business hours.

**Key Features:**
- Automated Email Responses: System processes leads and generates responses automatically
- Qualification Criteria Extraction: AI extracts budget, timeline, decision authority, and project scope from email content
- Conversation Context Preservation: Full email thread history maintained for context-aware responses
- Automatic Meeting Booking: Qualified leads are automatically routed to calendar booking
- Automated Lead Processing: Handles leads automatically outside business hours
- Multi-tenant Data Isolation: Each client's lead data and conversations are isolated

**Tech Stack:**
- **Backend:** Python webhook handlers processing incoming emails
  - Technologies: Python
- **AI/ML:** Claude AI for natural language understanding and response generation
  - Technologies: Claude AI
- **Infrastructure:** Supabase PostgreSQL storing conversation history, lead data, and qualification signals. Gmail API for authenticated email sending from client domain. Webhook-triggered processing pipeline with retry logic.
  - Technologies: Supabase, Gmail API

**Technical Implementation:**
- Webhook handlers process incoming lead emails automatically
- Claude AI extracts budget, timeline, and decision authority from email content
- Full email thread history maintained for context-aware responses
- Qualified leads routed to calendar booking automatically
- Error handling and retry mechanisms ensure reliability
- Gmail API used for authenticated email sending from client domain

**Expected Impact (Modeled Benchmarks):**

*Note: These are modeled estimates based on industry-standard performance ranges for AI-driven qualification systems. Not client results.*

1. **99% Faster Response Time**
   - Automated qualification reduces response time from ~24h to under 2 minutes.

2. **3–5× Conversion Lift**
   - Instant AI follow-ups eliminate SDR delays and increase conversions.

3. **70–85% Lower CPL**
   - Automation reduces reliance on manual SDR teams and drives down CPL.

4. **40–60% Shorter Cycles**
   - Automated sequences, scoring, and routing accelerate qualification cycles.

5. **80–90% Less Manual Work**
   - Automated intake, Q&A, follow-ups, and booking eliminate manual tasks.

**Screenshots:**
[Insert screenshots here]

**Lessons Learned:**
AutoLeadCloser demonstrates that AI can handle qualification workflows when given clear criteria and conversation context. The system proves that webhook-based email processing can respond faster than manual processes while maintaining consistency. The architecture prioritizes reliability through error handling and retry mechanisms, ensuring no leads are lost due to system failures.

**Call-to-Action:**
Want a system like this? Book a 10-minute Fit Call.

---

### Portfolio Website Project Page

**Hero Summary:**
Portfolio website that demonstrates technical capabilities through its own implementation. Serves as both a showcase and working example of Next.js 14, AI integration, and automated content management.

**Role & Duration:**
- Role: Full-stack AI Builder
- Timeline: 4 weeks
- Tools: Next.js 14, TypeScript, Tailwind CSS, Claude AI, GitHub API, Vercel

**Client Problem:**
- Traditional portfolios are static and don't demonstrate automation capabilities
- No way to showcase AI integration skills and modern web architecture
- Static sites fail to showcase the full range of technical skills including API development
- Need for dynamic content management without direct code changes

**Solution Overview:**
The portfolio functions as a working demonstration of technical capabilities. Visitors can interact with an AI chatbot that answers questions about services and projects. Project information syncs automatically from GitHub repositories, keeping the portfolio current without manual updates. Content management happens through an admin interface, allowing updates without code changes. The portfolio itself proves the technical skills it describes.

**Key Features:**
- AI Visitor Assistant: Chatbot answers questions about services, projects, and capabilities using Claude AI
- GitHub Repository Sync: Projects automatically sync from GitHub repositories, keeping portfolio current
- README Content Extraction: Project descriptions extracted from repository README files
- Admin Content Management: Dashboard interface for updating content without code changes
- Responsive Design: Optimized layouts for desktop, tablet, and mobile devices
- Performance Optimization: Image optimization, code splitting, and caching for optimized load times

**Tech Stack:**
- **Frontend:** Next.js 14 App Router with TypeScript and Tailwind CSS
  - Technologies: Next.js 14, TypeScript, Tailwind CSS
- **Backend:** Serverless API routes for backend logic and data processing
  - Technologies: Next.js 14
- **AI/ML:** Claude AI API for chatbot functionality and content processing
  - Technologies: Claude AI
- **Infrastructure:** GitHub API integration for repository data synchronization. Vercel serverless deployment with GitHub Actions CI/CD.
  - Technologies: GitHub API, Vercel

**Technical Implementation:**
- GitHub API integration syncs project data automatically from repositories
- AI chatbot built with Claude AI API for visitor interaction and questions
- Serverless API routes handle backend logic and data processing
- Next.js App Router provides optimized routing and data fetching
- Vercel deployment with GitHub Actions for automated CI/CD
- Content management through admin interface without code changes

**Screenshots:**
[Insert screenshots here]

**Lessons Learned:**
Building this portfolio reinforced the importance of demonstrating capabilities through the product itself. I learned that a portfolio should be more than a showcase—it should be a working example of your skills. The integration of AI, automation, and modern web technologies in the portfolio itself proves technical proficiency better than any description could. Performance optimization and SEO were critical for ensuring the portfolio reaches its intended audience effectively.

**Call-to-Action:**
Want a system like this? Book a 10-minute Fit Call.

---

## Services Page

### Header

**Title:**
Services

**Subtitle:**
Three ways to work together.

**Target Audience Micro-copy:**
Practical AI and automation for startups and small businesses.

### Service 1: Starter Build

**Price:** €1,200 (fixed)

**Description:**
Fixed-scope automation or AI tool delivered in 1–2 weeks.

**Deliverables:**
- Scope agreement
- Workflow automation or API integration
- Basic AI agent or tool
- Source code
- Handoff session

### Service 2: Hourly Development

**Price:** €75/hour

**Description:**
Ongoing development for AI systems, full-stack features, or iterative improvements. Billed weekly.

**Includes:**
- AI tools & automations
- Full-stack development
- Database & API design
- Regular updates
- Flexible scope

### Service 3: Complete System Build

**Price:** Starting at €4,500

**Description:**
End-to-end system with architecture, AI logic, integrations, and deployment. Delivered in phases.

**Includes:**
- System architecture
- Multi-tenant design
- AI reasoning logic
- Production deployment
- Documentation

### Call to Action

**Button:** "Book Free Fit Check"

---

## Pricing Page

### Header

**Title:**
Pricing

**Subtitle:**
Transparent pricing. Start with a fixed build or scale with hourly development.

### Tier 0: Free Fit Check

**Price:** FREE

**Description:**
15-minute call to ensure project alignment and budget compatibility. No-obligation, no free advice.

**Features:**
- Quick Alignment Check
- Budget Compatibility
- No Obligation

**CTA Button:** "Book 15-Min Slot"
**CTA Link:** /contact

### Tier 1: Starter Build

**Price:** €1,200

**Description:**
Fixed-scope automation or AI tool delivered in 1–2 weeks.

**Features:**
- Scope agreement
- Workflow automation or API integration
- Basic AI agent or tool
- Source code
- Handoff session

**CTA Button:** "Start Fixed Build"
**CTA Link:** /contact

### Tier 2: Hourly Development

**Price:** €75/hour

**Price Subtext:**
Billed weekly. No minimum hours.

**Description:**
Ongoing development for AI systems, full-stack features, or iterative improvements.

**Features:**
- AI tools & automations
- Full-stack development
- Database & API work
- Regular progress updates
- Flexible scope

**Badge:** "Most Flexible" (highlighted tier)

**CTA Button:** "Discuss Hourly Work"
**CTA Link:** /contact

### Tier 3: Complete System

**Price:** Starting at €4,500

**Price Subtext:**
Final cost based on scope. Delivered in phases.

**Description:**
End-to-end system with architecture, AI logic, integrations, and deployment.

**Features:**
- System architecture
- Multi-tenant design
- AI reasoning logic
- Production deployment
- Documentation

**CTA Button:** "Request Estimate"
**CTA Link:** /contact

### Why These Rates Section

**Section Title:**
Why These Rates

**Content:**
I'm transparent about my experience level. I've built production systems with multi-tenant architecture, AI integrations, and real deployments. I know how to design data models, handle webhooks with retry logic, and integrate Claude AI with streaming responses.

What I'm still learning: scoping complex projects perfectly and business process consulting. That's why €75/hour reflects strong technical execution without charging senior consultant rates.

As I build case studies, rates will increase. Work with me now for technical quality at fair pricing.

### Common Questions Section

**Section Title:**
Common Questions

**Q: How do we start working together?**
A: Book a free 15-minute fit check. We'll discuss your project, confirm we're aligned, and I'll send you a clear proposal or scope document within 24 hours.

**Q: Do you offer ongoing support?**
A: Yes, at €75/hour. Billed based on actual hours used each month.

**Q: Can you handle complex systems?**
A: Yes. I've built multi-tenant systems, AI agents, and production apps. These projects start at €4,500 and I recommend starting with a smaller build first to establish trust.

**CTA:**
Ready to start? Book a free 15-minute fit check.

---

## Contact Page

### Header

**Title:**
Contact

**Intro:**
If you want to collaborate, discuss a project, or explore an automation idea, feel free to reach out.

### Pre-Form Text

**Text:**
Not sure where to start? Book a free 15-minute fit check to discuss your project.

**Style:** Simple paragraph, center-aligned, gray text, appears between header and form.

### Contact Form

**Fields:**
- Name (required)
- Email (required)
- Message (required)

**Message Placeholder:**
Tell me what problem you're solving or what you want to build.

**Submit Button States:**
- Default: "Send message"
- Loading: "Sending..."
- Success: "Message sent"

**Ending Note:**
I'll reply as soon as I can.

### Contact Options

**Email:**
- andrewryan763@gmail.com

**Schedule a call:**
- Book a time to discuss your project.
- Link: Open Calendly

---

## Footer

### Navigation Links
- Home
- Projects
- Pricing
- Contact

### Building My Client Portfolio

**Section Title:**
Building My Client Portfolio

**Content:**
I'm offering fair rates (€75/hour, €1,200 starter builds) while building case studies and testimonials. Work with me now for technical quality at early-career pricing.

**Button:** "Book Free Fit Check" (links to /contact)

### Connect Section
**Social Links:**
- GitHub: github.com/ar10000
- LinkedIn: linkedin.com/in/lets-move-forward
- Twitter: @AndrewR53368303
- Email: andrewryan763@gmail.com

### Newsletter
**Title:** Stay Updated

**Description:** Get updates when I ship new tools and insights.

**Placeholder:** "Your email"

**Button:** "Subscribe"

### Footer Bottom
**Copyright:** © 2024 Andrew Ryan. All rights reserved.

**Built by:** Andrew Ryan

**Links:** Privacy Policy, Terms of Service

---

## Notes for Expert Review

1. **Consistency:** Check for consistent tone, terminology, and messaging across all pages
2. **Clarity:** Ensure all descriptions are clear and easy to understand for technical and non-technical readers
3. **Tone:** Verify the calm, technical, minimal tone is maintained throughout
4. **Grammar & Style:** Check for grammatical errors, typos, and style consistency
5. **Completeness:** Verify all information is accurate and up-to-date
6. **Simplicity:** Ensure short sentences and simple words are used consistently
7. **No Hype:** Confirm no marketing language or exaggerated claims
8. **Technical Accuracy:** Verify technical descriptions are accurate and grounded

---

**Document Generated:** For expert review and refinement
**Tone:** Calm, clear, confident, grounded, minimal, technical
**Style:** Short sentences, clean structure, no hype

---

## Important Notes

### Recent Changes

1. **Homepage Updates:**
   - Added "Freelance AI Developer" subtitle under "Andrew Ryan"
   - Merged "What I Do" and "How I Work" into single "How I Work" section (3 cards, no CTAs or metrics)
   - Removed "Where I Am" section (moved to pricing page)
   - Updated CTAs: "Contact for Collaborations" → "See Pricing"

2. **Navigation Updates:**
   - Removed "Services" link from navigation
   - Navigation now: Home, Projects, Pricing, Contact

3. **Pricing Page Updates:**
   - Removed "How Pricing Works" section
   - Removed "Why This Pricing" section
   - Added "Why These Rates" section (moved from homepage)
   - Updated "Common Questions" to only 3 questions

4. **Contact Page Updates:**
   - Removed "How I Work" pricing context box
   - Added simple text before form: "Not sure where to start? Book a free 15-minute fit check to discuss your project."
   - Updated message placeholder: "Tell me what problem you're solving or what you want to build."

5. **Project Detail Pages Updates:**
   - Removed "Engineering Notes" section entirely
   - Consolidated "Tech Stack" and "Architecture" into single "Tech Stack" section
   - Tech Stack now displays as horizontal cards grouped by category (Frontend, Backend, AI/ML, Infrastructure)
   - Each card shows: Category icon, Category name, Tech names as badges, Architecture description for that category
   - Standardized all projects to use "Technical Implementation" section (6 bullets)
   - AutoLeadCloser: Added "Expected Impact (Modeled Benchmarks)" section with 5 metric cards
   - FlowCircle: Added TypeScript code snippet for consistency
   - Portfolio Website: Converted "Before → After Impact" to "Technical Implementation" format

6. **Project Content Updates (Honest Descriptions):**
   - AutoLeadCloser: Updated to reflect production-ready prototype status, removed inflated metrics
   - FlowCircle: Updated to reflect minimalist app for individual creatives, changed from Flutter to Next.js 14
   - Creative Garden: Updated to reflect individual creative project tracking, removed team-focused language
   - Portfolio Website: Updated hero summary to emphasize working demo

7. **Projects Page Cards Updates:**
   - All project cards updated with honest descriptions
   - Status badges updated: AutoLeadCloser (Prototype), FlowCircle (In Development), Creative Garden (Production), Portfolio Website (Live)
   - Removed impact statements with inflated metrics

8. **Footer Updates:**
   - Changed "Latest Projects" to "Building My Client Portfolio"
   - Added new content about fair rates and early-career pricing
   - Added "Book Free Fit Check" button
   - Removed project links (Creative Garden, AutoLeadCloser)
