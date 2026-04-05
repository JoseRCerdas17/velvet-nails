import resend
import os

resend.api_key = os.getenv("RESEND_API_KEY")

def enviar_confirmacion_cliente(nombre: str, email: str, servicio: str, precio: str, fecha: str, hora: str):
    try:
        resend.Emails.send({
            "from": "Velvet Nails <onboarding@resend.dev>",
            "to": "jose12roberto17@gmail.com",
            "subject": "Cita confirmada - Velvet Nails Studio",
            "html": f"""
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0A0A0A;color:#fff;padding:40px;border-radius:12px;">
                <div style="text-align:center;margin-bottom:32px;">
                    <h1 style="color:#FF69B4;font-size:24px;letter-spacing:4px;text-transform:uppercase;margin:0;">VELVET NAILS</h1>
                    <p style="color:#666;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Studio</p>
                </div>
                <div style="background:#1A1A1A;border-radius:8px;padding:24px;margin-bottom:24px;">
                    <h2 style="color:#fff;font-size:18px;margin-top:0;">Hola {nombre},</h2>
                    <p style="color:#888;line-height:1.6;">Tu cita ha sido confirmada. Te esperamos en Velvet Nails Studio.</p>
                </div>
                <div style="background:#1A1A1A;border:1px solid #FF69B4;border-radius:8px;padding:24px;margin-bottom:24px;">
                    <h3 style="color:#FF69B4;font-size:12px;letter-spacing:3px;text-transform:uppercase;margin-top:0;">Detalles de tu cita</h3>
                    <table style="width:100%;border-collapse:collapse;">
                        <tr style="border-bottom:1px solid #2D2D2D;">
                            <td style="color:#666;padding:10px 0;font-size:14px;">Servicio</td>
                            <td style="color:#fff;padding:10px 0;font-size:14px;font-weight:bold;text-align:right;">{servicio}</td>
                        </tr>
                        <tr style="border-bottom:1px solid #2D2D2D;">
                            <td style="color:#666;padding:10px 0;font-size:14px;">Fecha</td>
                            <td style="color:#fff;padding:10px 0;font-size:14px;font-weight:bold;text-align:right;">{fecha}</td>
                        </tr>
                        <tr style="border-bottom:1px solid #2D2D2D;">
                            <td style="color:#666;padding:10px 0;font-size:14px;">Hora</td>
                            <td style="color:#fff;padding:10px 0;font-size:14px;font-weight:bold;text-align:right;">{hora}</td>
                        </tr>
                        <tr>
                            <td style="color:#666;padding:10px 0;font-size:14px;">Total</td>
                            <td style="color:#FF69B4;padding:10px 0;font-size:18px;font-weight:bold;text-align:right;">{precio}</td>
                        </tr>
                    </table>
                </div>
                <div style="text-align:center;">
                    <p style="color:#444;font-size:12px;">Costa Rica</p>
                    <p style="color:#FF69B4;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Velvet Nails Studio</p>
                </div>
            </div>
            """
        })
    except Exception as e:
        print(f"Error enviando email: {e}")