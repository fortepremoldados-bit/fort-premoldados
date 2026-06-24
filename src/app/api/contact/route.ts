import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'empresa.forte.premoldados@gmail.com',
    subject: `Nova Cotação - ${body.empresa}`,
    html: `
      <h2>Nova Solicitação de Cotação</h2>

      <p><strong>Nome:</strong> ${body.nome}</p>
      <p><strong>Empresa:</strong> ${body.empresa}</p>
      <p><strong>Telefone:</strong> ${body.telefone}</p>
      <p><strong>Produto:</strong> ${body.produto}</p>

      <p><strong>Detalhes:</strong></p>
      <p>${body.detalhes}</p>
    `,
  });

  return Response.json({
    success: true,
  });
}