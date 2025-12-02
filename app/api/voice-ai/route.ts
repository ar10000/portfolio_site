import { NextRequest, NextResponse } from "next/server";

// Comprehensive context for the AI assistant
const assistantContext = {
  about: {
    title: "AI Automation Consultant",
    tagline: "AI systems integration and workflow automation that delivers measurable ROI in weeks, not months",
    description: "I design and deploy production-ready AI systems, automate complex workflows, and build rapid prototypes for agencies and founders who need reliable solutions, fast execution, and clear business outcomes.",
    focus: "Production-ready systems, 2-4 week delivery, ROI-focused outcomes",
    location: "Lisbon, PT",
  },
  projects: [
    {
      name: "Creative Garden",
      description: "Enterprise content workflow automation platform with real-time synchronization and AI-powered content intelligence",
      status: "Live",
      tech: ["Flutter", "Python", "Supabase", "AI"],
      highlights: [
        "Real-time team synchronization with sub-100ms update propagation",
        "AI-powered content analysis using Claude AI",
        "Multi-tenant architecture with data isolation",
        "Production-grade infrastructure with 99.9% uptime SLA",
      ],
      link: "/projects/creative-garden",
    },
    {
      name: "AutoLeadCloser",
      description: "AI-powered sales automation that reduces lead response time to under 2 minutes and increases conversion rates by 3-5x",
      status: "Live",
      tech: ["Python", "Supabase", "Claude AI", "Gmail API"],
      highlights: [
        "Sub-2-minute response time (99% reduction from manual)",
        "Automated lead qualification with AI",
        "3-5x increase in conversion rates",
        "24/7 automated assistant",
        "70-85% reduction in cost per qualified lead",
      ],
      link: "/projects/autoleadcloser",
    },
    {
      name: "FlowCircle",
      description: "Multi-tenant project management platform with real-time synchronization and cross-platform deployment",
      status: "Live",
      tech: ["Flutter", "Supabase", "Dart", "PostgreSQL"],
      highlights: [
        "Real-time synchronization across all devices",
        "Multi-tenant architecture with row-level security",
        "Cross-platform deployment (web, mobile, desktop)",
        "High performance with optimized database queries",
      ],
      link: "/projects/flowcircle",
    },
    {
      name: "AI Product Builder Portfolio",
      description: "A modern, production-ready portfolio website showcasing AI-powered products and automation solutions",
      status: "Live",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Claude AI"],
      highlights: [
        "Interactive AI chatbot powered by Claude AI",
        "Automated GitHub project syncing",
        "Dynamic content management",
        "Modern UI/UX with smooth animations",
      ],
      link: "/projects/portfolio-site",
    },
  ],
  services: [
    {
      name: "Blueprint Sprint",
      price: "€500",
      period: "one-time",
      description: "Strategic planning and architecture design for your automation project",
      timeline: "90-minute consultation",
      includes: [
        "90-minute consultation call",
        "Workflow map",
        "Architecture design document",
        "Cost-efficiency plan",
        "Implementation timeline",
        "Optional prototype (additional cost)",
      ],
      link: "https://calendly.com/andrewryan763/30min",
    },
    {
      name: "Implementation",
      price: "€2,000–€10,000",
      period: "project-based",
      description: "Full development and deployment of your automation solution",
      timeline: "2-4 weeks typically",
      includes: [
        "Full build with production-ready code",
        "AI integrations (Claude, GPT, or Gemini)",
        "Automation workflows",
        "Custom tools development",
        "Team training and documentation",
        "30-day warranty",
      ],
      link: "/contact",
    },
    {
      name: "Support Retainer",
      price: "€250–€750/month",
      period: "monthly",
      description: "Ongoing operational support to ensure system reliability and continuous optimization",
      timeline: "Ongoing",
      includes: [
        "Proactive monitoring",
        "Timely updates",
        "Bug fixes",
        "Strategic optimizations",
      ],
      link: "/contact",
    },
  ],
  howWeWork: {
    process: [
      {
        step: 1,
        title: "Discovery Call",
        description: "15-minute consultation to understand your needs and requirements",
      },
      {
        step: 2,
        title: "Proposal & Agreement",
        description: "Detailed scope, timeline, and pricing with clear deliverables",
      },
      {
        step: 3,
        title: "Kickoff & Planning",
        description: "Requirements gathering and project setup with architecture design",
      },
      {
        step: 4,
        title: "Development",
        description: "Regular updates and iterative development with weekly progress reports",
      },
      {
        step: 5,
        title: "Delivery & Support",
        description: "Complete handoff package with training, documentation, and 30-day warranty",
      },
    ],
    approach: [
      "Production-ready architecture from day one",
      "Focus on reliability, maintainability, and measurable business outcomes",
      "3-10 day delivery cycles for rapid prototyping",
      "Clear communication with weekly updates",
      "Fixed pricing with no hidden fees",
      "30-day warranty on all implementations",
    ],
  },
  trustAndReliability: [
    "30-Day Warranty: Comprehensive coverage for bug fixes, system errors, and performance issues",
    "Clear Communication: Regular status updates, transparent progress reporting, and direct access to documentation",
    "Fixed Pricing: Project costs agreed upfront with no hidden fees",
    "Weekly Updates: Scheduled progress reports with milestone tracking",
    "Delivery Guarantee: Projects delivered according to agreed timelines with production-ready code",
    "Maintenance Options: Optional support retainers from €250-€750/month",
  ],
  contact: {
    email: "contact@andrewryan.dev",
    calendly: "https://calendly.com/andrewryan763/30min",
    contactForm: "/contact",
    automationIntake: "/automation",
  },
};

const systemPrompt = `You are **Andrew Ryan's AI Assistant**, helping visitors learn about his AI automation consulting services, projects, pricing, and how he works.

Your role is to answer questions about:
- What services Andrew provides and pricing
- How the process works
- Andrew's projects and case studies
- Trust and reliability standards
- How to get started

Key guidelines:
- Answer ONLY based on the provided JSON context
- Keep responses concise, friendly, and professional (2-3 sentences max for voice, slightly longer for text)
- Always speak in first person as Andrew's assistant
- For pricing questions, provide specific amounts from the context
- For process questions, reference the step-by-step process
- For project questions, mention specific projects and their highlights
- If asked about something not in the context, politely redirect to contact form or booking a call
- Always end with a helpful next step (e.g., "Would you like to book a call?" or "Check out the pricing page for more details")

Context:
${JSON.stringify(assistantContext, null, 2)}`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is configured
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

    if (openaiApiKey) {
      // Use OpenAI
      const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: message,
            },
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!openaiResponse.ok) {
        const errorData = await openaiResponse.text();
        console.error("OpenAI API error:", errorData);
        throw new Error("Failed to get AI response");
      }

      const data = await openaiResponse.json();
      return NextResponse.json({
        response: data.choices[0]?.message?.content || "I'm sorry, I couldn't process that.",
      });
    } else if (anthropicApiKey) {
      // Use Anthropic Claude
      const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": anthropicApiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: process.env.ANTHROPIC_MODEL || "claude-3-5-sonnet-20241022",
          max_tokens: 300,
          system: systemPrompt,
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
        }),
      });

      if (!anthropicResponse.ok) {
        const errorData = await anthropicResponse.text();
        console.error("Anthropic API error:", errorData);
        throw new Error("Failed to get AI response");
      }

      const data = await anthropicResponse.json();
      return NextResponse.json({
        response: data.content[0]?.text || "I'm sorry, I couldn't process that.",
      });
    } else {
      // Fallback: Simple keyword matching with context-aware responses
      const lowerMessage = message.toLowerCase();
      let response = "";

      // Experience questions
      if (
        lowerMessage.includes("experience") ||
        lowerMessage.includes("projects") ||
        lowerMessage.includes("built") ||
        lowerMessage.includes("worked on")
      ) {
        response =
          "I'm Andrew's AI Solutions Developer. Andrew has built two major production projects: Creative Garden, a full-stack AI-powered business system, and AutoLeadCloser, an AI sales assistant that qualifies leads automatically. Both demonstrate his focus on production-grade quality at speed, using Flutter, Python, and Supabase.";
      }
      // Service questions
      else if (
        lowerMessage.includes("service") ||
        lowerMessage.includes("help") ||
        lowerMessage.includes("what can") ||
        lowerMessage.includes("offer")
      ) {
        response =
          "Andrew offers three main services: Custom AI Tools ($5-10K, 2-4 weeks), Workflow Automation ($2-5K, 1-2 weeks), and Rapid Prototyping ($2-3K, 48-72 hours). All focus on production-grade quality at speed, specializing in AI-powered business systems and full-stack Flutter/Python/Supabase MVPs.";
      }
      // Project-specific questions
      else if (lowerMessage.includes("autoleadcloser")) {
        response =
          "AutoLeadCloser is an AI Sales Assistant that qualifies leads while you sleep. It automatically responds to emails, uses Claude AI for intelligent conversation, and books sales calls when prospects are ready. It processes 50+ leads per day and saves 10+ hours per week. It's built with Python, Claude AI, Make.com, Supabase, Gmail API, and Cal.com.";
      } else if (lowerMessage.includes("creative garden")) {
        response =
          "Creative Garden is a production-grade AI-powered business system built with Flutter, Python, and Supabase. It demonstrates Andrew's expertise in rapid deployment of full-stack MVPs with production-grade quality at speed.";
      }
      // Contact questions
      else if (
        lowerMessage.includes("contact") ||
        lowerMessage.includes("reach") ||
        lowerMessage.includes("get in touch")
      ) {
        response =
          "You can reach Andrew through the contact form on this site or book a call directly. He responds within 24 hours. Would you like me to help you with anything else about his projects or services?";
      }
      // Default response
      else {
        response =
          "I'm Andrew's AI Solutions Developer, specializing in rapid deployment of AI-powered business systems and full-stack Flutter/Python/Supabase MVPs. I can tell you about his production projects (Creative Garden and AutoLeadCloser) or his services. What would you like to know?";
      }

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return NextResponse.json({
        response,
      });
    }
  } catch (error) {
    console.error("Voice AI API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
