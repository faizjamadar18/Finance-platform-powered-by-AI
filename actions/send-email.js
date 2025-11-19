// refer docx of resend
"use server";

import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {                  
  const resend = new Resend(process.env.RESEND_API_KEY || ""); 

  try {
    const data = await resend.emails.send({              // this is the main send() comimg from emails and resend to send email 
      from: "Finance Platform <onboarding@resend.dev>",  // free plan : the email will be send from theseparticular account 
      to,
      subject,
      react,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}