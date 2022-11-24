import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { RenderResponse } from '@ioc:EidelLev/Inertia';

export default class MainController {
    public async index({ inertia }: HttpContextContract): Promise<RenderResponse> {
        return inertia.render('IndexPage', { infoText: 'just info' });
    }
}
