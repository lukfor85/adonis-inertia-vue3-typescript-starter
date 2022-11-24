<template>
    <div id="fullscreen-layout" class="fullscreen-layout">
        <slot />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.fullscreen-layout {
    height: 100%;
    width: 100%;
    min-height: 100%;
    text-align: center;
}
</style>
