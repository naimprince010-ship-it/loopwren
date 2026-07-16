import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, details } = body;

    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_placeholder_key_here") {
      console.error("Missing or invalid RESEND_API_KEY in environment variables.");
      return NextResponse.json(
        { error: "Server configuration error: Email service is not configured properly." },
        { status: 500 }
      );
    }

    // TODO: Connect your actual email provider here (e.g. Resend, SendGrid)
    // For Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'hello@loopwren.com',
    //   subject: `New Project Inquiry from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nDetails:\n${details}`,
    // });

    // For now, we'll just simulate a successful response if key exists
    console.log("Received contact form submission:", { name, email, details });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
