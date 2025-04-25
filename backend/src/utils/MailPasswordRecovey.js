import nodemailer from "nodemailer";
import {config} from "../config.js";


const transporter = nodemailer.createTransport({



        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user: config.email.user,
            pass: config.email.pass
        }
});

const sendEmail = async (to, subject, body, html) => {

    try {
        const info = await transporter.sendMail({
            from: "Eduardo@gmail.com",
            to,
            subject,
            body,
            html,

        })
    } catch (error) {
        console.log("error" + error)
    }
    
}


const HTMLRecoveryEmail = (code)=>{
    return `<div style="font-family: Arial, sans-serif; text-align: center; background-color: #e0f7fa; padding: 20px; border: 1px solid #00897b; border-radius: 10px; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #004d40; font-size: 24px; margin-bottom: 20px;">Recuperación de Contraseña</h1>
      <p style="font-size: 16px; color: #00796b; line-height: 1.5;">
        Hola, hemos recibido una solicitud para restablecer tu contraseña. Usa el siguiente código de verificación para continuar:
      </p>
      <div style="display: inline-block; padding: 10px 20px; margin: 20px 0; font-size: 18px; font-weight: bold; color: #ffffff; background-color: #004d40; border-radius: 5px; border: 1px solid #00695c;">
        ${code}
      </div>
      <p style="font-size: 14px; color: #004d40; line-height: 1.5;">
        Este código es válido por los próximos <strong>15 minutos</strong>. Si no solicitaste este correo, puedes ignorarlo sin problema.
      </p>
      <hr style="border: none; border-top: 1px solid #00897b; margin: 20px 0;">
      <footer style="font-size: 12px; color: #004d40;">
        Si necesitas más ayuda, por favor contacta a nuestro equipo de soporte en
        <a href="mailto:support@example.com" style="color: #00796b; text-decoration: none;">support@example.com</a>.
      </footer>
</div>;
`
}

export  {sendEmail, HTMLRecoveryEmail}