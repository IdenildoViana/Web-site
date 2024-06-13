import { EmailTemplate } from "@/app/Componentes/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = body.nome;
    const email = body.email;
    const phone = body.telefone;
    const message = body.message;

    if (!name)
      return Response.json({ error: "O nome é obrigatório" }, { status: 400 });
    if (!email)
      return Response.json({ error: "O email é obrigatório" }, { status: 400 });
    if (!phone)
      return Response.json(
        { error: "O telefone é obrigatório" },
        { status: 400 }
      );
    if (!message)
      return Response.json(
        { error: "A mensagem é obrigatória" },
        { status: 400 }
      );

    const { data, error } = await resend.emails.send({
      from: `${name.toString()} <onboarding@resend.dev>`,
      to: ["ideviana01@gmail.com"],
      subject: "Orçamento VianaDev",
      react: EmailTemplate({
        name: name.toString(),
        phone: phone.toString(),
        message: message.toString(),
      }),
      text: "",
    });

    if (error) {
      console.log("erro 1", error.message);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log("erro 2", error);
    return Response.json({ error }, { status: 500 });
  }
}
