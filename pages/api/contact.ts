import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { name, email, message } = req.body;

  // Debug temporário (pode remover depois)
  console.log("Auth user:", "contact@c3one.com");
  console.log("Password length:", process.env.ZOHO_CONTACT_PASS?.length);

  // Configuração do Zoho SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: "contact@c3one.com",
      pass: process.env.ZOHO_CONTACT_PASS, // ✅ CORRIGIDO
    },
  });

  try {
    await transporter.sendMail({
      from: `"Site C3 One" <contact@c3one.com>`,
      to: "contact@c3one.com",
      bcc: "support@c3one.com", // ✅ Melhor usar bcc em vez de to com vírgula
      replyTo: email,
      subject: `Novo contato do site - ${name}`,
      text: message,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>E-mail:</strong> ${email}</p>
             <p><strong>Mensagem:</strong><br/>${message}</p>`,
    });

    return res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } catch (error: any) {
    console.error("Erro ao enviar e-mail:", error);
    return res.status(500).json({ message: "Erro ao enviar mensagem." });
  }
}