'use server';

import { Resend } from 'resend';
import { ContactEmail } from '@/emails/ContactEmail';
import { render } from '@react-email/render';

// Initialize Resend with API Key (will utilize env var)
const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    parentName: string;
    phone: string;
    email?: string;
    childAge?: string;
    program?: string;
    message?: string;
}

export async function sendContactEmail(formData: ContactFormData) {
    const { parentName, phone, email, childAge, program, message } = formData;

    try {
        // Render the email component to HTML
        const emailHtml = await render(
            ContactEmail({
                parentName,
                phone,
                email,
                childAge,
                program,
                message
            })
        );

        const { data, error } = await resend.emails.send({
            from: 'Sunshine School Form <onboarding@resend.dev>', // Default testing domain
            to: ['skolasunshine@gmail.com'], // The school's email
            // If the user provided an email, we can Reply-To them
            replyTo: email || undefined,
            subject: `Nova poruka od: ${parentName}`,
            html: emailHtml,
        });

        if (error) {
            console.error('Resend error:', error);
            return { success: false, error: 'Došlo je do greške prilikom slanja emaila.' };
        }

        return { success: true, data };
    } catch (error) {
        console.error('Server action error:', error);
        return { success: false, error: 'Došlo je do neočekivane greške.' };
    }
}
