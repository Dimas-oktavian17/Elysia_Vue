<script setup>

</script>

<template>
    <header class="container bg-white">
        <HeaderItem />
    </header>
    <main class="container grid grid-cols-1 py-2 lg:grid-cols-2 place-items-center">
        <slot />
    </main>
    <footer class="container">
        <FooterItem />
    </footer>
</template>