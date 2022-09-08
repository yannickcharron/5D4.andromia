<template>
    <SideBar></SideBar>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <NavBar />
        <slot />
        <FooterBar />
    </main>
</template>

<script setup>
import SideBar from '../../components/layouts/SideBar.vue';
import NavBar from '../../components/layouts/NavBar.vue';
import FooterBar from '../../components/layouts/FooterBar.vue';

</script>

<style lang="scss" scoped>
</style>