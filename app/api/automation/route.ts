import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      website,
      automationGoal,
      bottleneck,
      tools,
      idealOutcome,
      budgetRange,
      timeline,
    } = body;

    // Validate required fields
    if (
      !name ||
      !email ||
      !company ||
      !automationGoal ||
      !bottleneck ||
      !tools ||
      !idealOutcome ||
      !budgetRange ||
      !timeline
    ) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate website URL if provided
    if (website) {
      try {
        new URL(website.startsWith("http") ? website : `https://${website}`);
      } catch {
        return NextResponse.json(
          { error: "Invalid website URL format" },
          { status: 400 }
        );
      }
    }

    // Log the submission (in production, you'd send this to email service or database)
    console.log("Automation intake submission:", {
      name,
      email,
      company,
      website: website || "Not provided",
      automationGoal,
      bottleneck,
      tools,
      idealOutcome,
      budgetRange,
      timeline,
      timestamp: new Date().toISOString(),
    });

    // OPTION: Send email via Resend (uncomment if configured)
    /*
    import { Resend } from "resend";
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: "Automation Intake <onboarding@resend.dev>",
      to: ["andrewryan763@gmail.com"],
      subject: `New Automation Intake: ${company} - ${name}`,
      html: `
        <h2>New Automation Intake Submission</h2>
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Website:</strong> ${website || "Not provided"}</p>
        
        <h3>Automation Details</h3>
        <p><strong>What to automate:</strong></p>
        <p>${automationGoal.replace(/\n/g, "<br>")}</p>
        
        <p><strong>Biggest bottleneck:</strong></p>
        <p>${bottleneck.replace(/\n/g, "<br>")}</p>
        
        <p><strong>Current tools:</strong></p>
        <p>${tools.replace(/\n/g, "<br>")}</p>
        
        <p><strong>Ideal outcome:</strong></p>
        <p>${idealOutcome.replace(/\n/g, "<br>")}</p>
        
        <h3>Project Details</h3>
        <p><strong>Budget Range:</strong> ${budgetRange}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        
        <hr>
        <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
      `,
    });
    */

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your submission! I'll review your requirements and respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Automation intake error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

