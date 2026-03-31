export async function onRequestPost(context) {
  const { request, env } = context

  let body
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 })
  }

  const { name, email, message } = body

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'All fields required' }), { status: 400 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'portfolio@rummanriyaz.com',
      to: 'rumman@formaai.com.au',
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  })

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Failed to send' }), { status: 500 })
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 })
}
