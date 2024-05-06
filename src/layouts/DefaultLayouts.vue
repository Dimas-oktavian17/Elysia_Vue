<script setup>

</script>

<template>
    <header class="container bg-white">
        <HeaderItem />
    </header>
    <main class="container py-36 grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <slot />
    </main>
    <footer class="container">
        <FooterItem />
    </footer>
</template>