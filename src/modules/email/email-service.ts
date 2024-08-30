import { Resend } from 'resend';

export const enviarCorreo = async (from:string,to: string,subject:string,body:string) => {
    console.log(from,to,subject,body)

    const resend = new Resend(process.env.RESENDER_KEY);
    try {
       await  resend.emails.send({
            from:"rourus@rourus.com",
            to: to,
            subject: subject,
            html: body
        });
        return true
        
    } catch (error) {
        console.log(error)
       return false
    }
   
}

