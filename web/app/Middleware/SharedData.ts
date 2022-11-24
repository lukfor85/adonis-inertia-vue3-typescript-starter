import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { logger } from 'Config/app';

export default class SharedData {
    public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
        ctx.view.share({
            $appName: logger.name,
        });

        await next();
    }
}
