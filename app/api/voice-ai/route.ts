import { NextRequest, NextResponse } from "next/server";

// Project context for the AI assistant
const projectContext = {
  projects: [
    {
      name: "Creative Garden",
      description: "A production-grade AI-powered business system",
      status: "Live",
      tech: ["Flutter", "Python", "Supabase", "AI Integration"],
      highlights: [
        "Full-stack MVP built with rapid deployment focus",
        "Production-grade quality at speed",
        "Demonstrates expertise in Flutter/Python/Supabase stack",
      ],
    },
    {
      name: "AutoLeadCloser",
      description: "AI Sales Assistant That Qualifies Leads While You Sleep",
      status: "Beta",
      tech: ["Python", "Claude AI", "Make.com", "Supabase", "Gmail API", "Cal.com"],
      highlights: [
        "Automatically responds to incoming emails and qualifies leads",
        "Uses Claude AI for intelligent conversation",
        "Books sales calls when prospects are ready",
        "Processes 50+ leads per day, saves 10+ hours/week",
        "Built for agencies and service businesses",
      ],
    },
  ],
  services: [
    {
      name: "Custom AI Tools",
      price: "$5-10K projects",
      description: "AI-powered tools that automate bottlenecks—qualifying leads, processing documents, handling support",
      timeline: "2-4 weeks",
      tech: "Claude, GPT, or Gemini integration",
    },
    {
      name: "Workflow Automation",
      price: "$2-5K setups",
      description: "Make.com and n8n workflows that connect your tools and run in the background",
      timeline: "1-2 weeks",
      tech: "Make.com, n8n, Multi-API integration",
    },
    {
      name: "Rapid Prototyping",
      price: "$2-3K MVPs",
      description: "Working prototypes in 48-72 hours to validate ideas with real users",
      timeline: "48-72 hours",
      tech: "Full-stack Flutter/Python/Supabase MVPs",
    },
  ],
  expertise: {
    focus: "Production-grade quality at speed",
    specialties: [
      "Rapid deployment of AI-powered business systems",
      "Full-stack Flutter/Python/Supabase MVPs",
      "Production-grade quality at speed",
    ],
    experience: "Two major production projects: Creative Garden and AutoLeadCloser",
  },
};

const systemPrompt = `You are **Andrew Ryan's AI Solutions Developer**, specializing in rapid deployment of **AI-powered business systems** and **full-stack Flutter/Python/Supabase MVPs**. 

Your role is to answer questions about Andrew's work, projects, and services based ONLY on the provided JSON context. 

Key guidelines:
- Answer only based on the provided JSON context of Andrew's projects (Creative Garden, AutoLeadCloser) and services
- If asked about Andrew's experience, cite the two major projects (Creative Garden and AutoLeadCloser) as production examples
- Always emphasize that Andrew focuses on **production-grade quality at speed**
- Keep responses concise, professional, and helpful
- If information isn't in the context, politely say you don't have that information rather than making assumptions
- Speak in first person as Andrew's AI Solutions Developer

Context:
${JSON.stringify(projectContext, null, 2)}`;

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
          max_tokens: 200,
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
          max_tokens: 200,
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
