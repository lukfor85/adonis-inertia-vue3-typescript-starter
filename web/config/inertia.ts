/**
 * Feel free to let me know via PR,
 * if you find something broken in this config file.
 */

import Env from '@ioc:Adonis/Core/Env';
import { InertiaConfig } from '@ioc:EidelLev/Inertia';

/*
|--------------------------------------------------------------------------
| Inertia-AdonisJS config
|--------------------------------------------------------------------------
|
*/

export const inertia: InertiaConfig = {
    view: 'app',
    ssr: {
        enabled: Env.get('NODE_ENV') !== 'development',
    },
};
