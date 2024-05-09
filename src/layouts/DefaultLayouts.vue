<script setup>

</script>

<template>
    <header class="container bg-white">
        <HeaderItem />
    </header>
    <main class="container flex flex-col-reverse py-2 lg:flex-row-reverse lg:justify-evenly">
        <slot />
    </main>
    <footer class="container">
        <FooterItem />
    </footer>
</template>