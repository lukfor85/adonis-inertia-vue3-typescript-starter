// declare module '*.vue' {
//     import Vue from 'vue';
//     export default Vue;
// }

/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.json' {
    const content: any;
    export default content;
}
