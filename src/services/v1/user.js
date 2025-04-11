'use strict'

const queryService = require('../../utils/queries.js')
const userPayload = require('@payloads/userPayload.js')
const EXPIRES_IN = process.env.JWT_TOKEN_EXPIRY || '14d'

module.exports = async function (fastify, opts) {
  fastify.get(
    '/users',
    //{ schema: userPayload.getMeSchema, onRequest: fastify.authenticate },
    async function (request, reply) {
      const users = await queryService.getAllUsers(fastify.supabase)
      return reply.success({ users }, { message: 'Success' })
    }
  )
}

module.exports.autoPrefix = '/user'
