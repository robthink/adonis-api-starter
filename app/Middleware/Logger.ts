import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Logger {
  public async handle({ logger, route }: HttpContextContract, next: () => Promise<void>) {
    logger.info(route ? route.pattern : '-')
    await next()
  }
}
