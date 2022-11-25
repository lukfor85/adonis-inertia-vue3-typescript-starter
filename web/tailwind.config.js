const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./resources/js/**/*.{vue,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    darkMode: 'class',
    variants: {
        extend: {},
    },
    plugins: [require('tw-elements/dist/plugin')],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.neutral,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            teal: colors.teal,
            darkblue: colors.slate,
        },
    },
};
