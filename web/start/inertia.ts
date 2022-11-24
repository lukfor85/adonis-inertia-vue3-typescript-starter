/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia';
import { logger } from 'Config/app';

Inertia.share({
    errors: (ctx) => {
        return ctx.session.flashMessages.get('errors');
    },
    $appName: `${logger.name} APP`,
}).version(() => Inertia.manifestFile('public/assets/manifest.json'));
