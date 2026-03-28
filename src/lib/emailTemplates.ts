type BaseTemplateProps = {
    title: string;
    content: string;
    buttonText?: string;
    buttonUrl?: string;
};

function baseTemplate({
    title,
    content,
    buttonText,
    buttonUrl,
}: BaseTemplateProps) {
    return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body style="margin:0; padding:0; background:#f4f6f8;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table width="600" style="max-width:600px; background:#ffffff; border-radius:8px; overflow:hidden; font-family:Arial, sans-serif;">
            
            <!-- Header -->
            <tr>
              <td style="padding:24px; text-align:center; background:#111827; color:#ffffff;">
                <h2 style="margin:0;">Your Company</h2>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px; color:#333;">
                <h3 style="margin-top:0;">${title}</h3>
                <div style="line-height:1.6;">
                  ${content}
                </div>

                ${buttonText && buttonUrl
            ? `
                  <div style="margin-top:24px; text-align:center;">
                    <a href="${buttonUrl}" 
                       style="background:#2563eb; color:#fff; padding:12px 20px; text-decoration:none; border-radius:6px; display:inline-block;">
                      ${buttonText}
                    </a>
                  </div>
                `
            : ""
        }
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px; text-align:center; font-size:12px; color:#888;">
                © ${new Date().getFullYear()} Your Company. All rights reserved.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

export function userConfirmationTemplate(name: string, message: string) {
    return baseTemplate({
        title: `Terima kasih, ${name}!`,
        content: `
      <p>Kami sudah menerima pesan kamu:</p>
      <blockquote style="background:#f9fafb; padding:12px; border-left:4px solid #2563eb;">
        ${message}
      </blockquote>
      <p>Tim kami akan segera menghubungi kamu.</p>
    `,
        buttonText: "Kunjungi Website",
        buttonUrl: "https://yourwebsite.com",
    });
}

export function adminNotificationTemplate(
    name: string,
    email: string,
    message: string
) {
    return baseTemplate({
        title: "New Contact Inquiry",
        content: `
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Pesan:</strong></p>
      <div style="background:#f3f4f6; padding:12px; border-radius:6px;">
        ${message}
      </div>
    `,
        buttonText: "Balas Email",
        buttonUrl: `mailto:${email}`,
    });
}