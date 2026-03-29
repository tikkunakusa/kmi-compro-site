// import nodemailer from "nodemailer";

// type SendMailParams = {
//     to: string;
//     subject: string;
//     html: string;
// };

// const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_PORT),
//     secure: false,
//     auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//     },
// });

// export async function sendMail({ to, subject, html }: SendMailParams) {
//     try {
//         const info = await transporter.sendMail({
//             from: process.env.EMAIL_FROM,
//             to,
//             subject,
//             html,
//         });

//         return info;
//     } catch (error) {
//         console.error("Email error:", error);
//         throw error;
//     }
// }