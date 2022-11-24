// @ts-ignore
import en from '@/i18n/en.json';
import { createI18n } from 'vue-i18n';

export const i18n = createI18n({
    locale: navigator.language.split('-')[0] || 'en',
    fallbackLocale: 'en',
    mode: 'legacy',
    messages: { en },
    globalInjection: true,
});
