require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function main() {
  try {
    console.log('🔧 Testando SMTP Zoho...');
    console.log('📧 Usuário:', process.env.ZOHO_USER);
    console.log('🔑 Senha configurada:', process.env.ZOHO_PASSWORD ? 'SIM ✅' : 'NÃO ❌');

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    // Enviar e-mail de teste
    const info = await transporter.sendMail({
      from: `"Teste SMTP C3 One" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER, // manda pra você mesmo
      subject: "Teste SMTP Zoho ✔",
      text: "Se você recebeu este email, o SMTP Zoho está funcionando corretamente ✅",
      html: "<b>SMTP Zoho funcionando! 🚀</b>",
    });

    console.log("✅ Email enviado com sucesso!");
    console.log("📨 Message ID:", info.messageId);
    console.log("📬 Verifique sua caixa de entrada:", process.env.ZOHO_USER);
  } catch (err) {
    console.error("❌ Erro ao enviar:", err.message);
  }
}

main();