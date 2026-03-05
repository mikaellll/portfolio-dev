import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    // OVH SMTP configuration
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,       // contact@mickaelcode.com
        pass: process.env.SMTP_PASSWORD,   // Votre mot de passe email OVH
      },
    });

    // Email content
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00ffff; border-bottom: 2px solid #00ffff; padding-bottom: 10px;">
            Nouveau message depuis le portfolio
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; width: 100px;">Nom</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555;">Sujet</td>
              <td style="padding: 10px;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 20px; background: #f4f4f4; border-left: 4px solid #00ffff; border-radius: 4px;">
            <p style="color: #555; font-weight: bold; margin-bottom: 10px;">Message :</p>
            <p style="color: #333; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
            Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json(
      { error: 'Erreur lors de l\'envoi du message.' },
      { status: 500 }
    );
  }
}
