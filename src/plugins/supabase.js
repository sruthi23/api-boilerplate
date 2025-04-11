const fp = require('fastify-plugin')
const { createClient } = require('@supabase/supabase-js')

// Supabase Plugin
async function supabaseConnector(fastify, options) {
  try {
    const url = process.env.SUPABASE_URL
    const key = process.env.SUPABASE_KEY

    if (url && key) {
      const supabase = createClient(url, key)
      fastify.decorate('supabase', supabase)
    } else {
      console.error('Missing Supabase URL or Key')
      process.exit(1)
    }
  } catch (err) {
    console.error('Supabase connection error:', err)
    process.exit(1)
  }
}

module.exports = fp(supabaseConnector)
