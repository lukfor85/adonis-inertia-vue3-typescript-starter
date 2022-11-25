import WebApp from '@/WebApp.vue';
import { initRoutes } from '@eidellev/adonis-stardust/client';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import 'tw-elements';
import { createApp, h } from 'vue';
import '../sass/app.scss';
import { i18n } from './i18n';

initRoutes();

InertiaProgress.init({
    color: '#01a499',
    showSpinner: true,
});

createInertiaApp({
    title: (title) => `${title} - ${window.appName}`,
    resolve: async (name) => {
        const page = (await import(`./Pages/${name}`)).default;
        page.layout = page.layout || WebApp;

        return page;
    },
    setup({ el, app, props, plugin }) {
        let appCreated = createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(i18n);
        appCreated.config.globalProperties.window = window;
        appCreated.mount(el);
    },
}).then(() => {});
