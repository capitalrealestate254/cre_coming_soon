'use server'

import {
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
  SendSmtpEmail,
} from '@getbrevo/brevo'

type SendContactEmailResult = { success: true } | { success: false; error: string }

export async function sendContactEmail(
  _prevState: unknown,
  formData: FormData,
): Promise<SendContactEmailResult> {
  try {
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const interested = String(formData.get('interested') || '').trim()
    const visitShowhouse = String(formData.get('visitShowhouse') || '').trim()

    // Intentionally minimal logging in production; remove PII
    // console.debug('[Brevo] Submission received')

    if (!name || !email) {
      return { success: false, error: 'Missing required fields' }
    }

    const apiKey = process.env.BREVO_API_KEY
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL
    const senderEmail = process.env.BREVO_SENDER_EMAIL
    const senderName = process.env.BREVO_SENDER_NAME || 'Coming Soon'

    // console.debug('[Brevo] Config present')

    if (!apiKey || !toEmail || !senderEmail) {
      return { success: false, error: 'Email configuration is incomplete' }
    }

    const subject = `New inquiry from ${name}`
    const textContent = `New inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterested in: ${interested}\nVisit show-house: ${visitShowhouse}`
    const htmlContent = `
      <h2>New inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Interested in:</strong> ${interested}</p>
      <p><strong>Visit show-house:</strong> ${visitShowhouse}</p>
    `

    const api = new TransactionalEmailsApi()
    api.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey)

    // console.debug('[Brevo] Preparing message')

    const message = new SendSmtpEmail()
    message.subject = subject
    message.htmlContent = htmlContent
    message.textContent = textContent
    message.sender = { email: senderEmail, name: senderName }
    message.to = [{ email: toEmail }]
    message.headers = { 'X-Mailer': 'CRE-Website' }

    await api.sendTransacEmail(message)

    // console.debug('[Brevo] Email sent')

    return { success: true }
  } catch (error) {
    const err = error as {
      body?: unknown
      message?: string
      response?: { status?: number; data?: unknown; body?: unknown; text?: string }
      status?: number
    }
    console.error('[Brevo] Failed to send email', {
      message: err?.message,
      status: err?.status ?? err?.response?.status,
    })
    return { success: false, error: 'Failed to send email' }
  }
}
