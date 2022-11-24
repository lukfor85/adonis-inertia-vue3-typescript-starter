<template>
    <Head>
        <title>Index</title>
        <meta head-key="description" name="description" content="This is a page specific description" />
    </Head>
    <div>{{ infoText }} for {{ $t('main.foo') }}</div>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/inertia-vue3';

const props = defineProps<{
    infoText: string;
}>();
</script>

<style lang="scss" scoped>
//
</style>
