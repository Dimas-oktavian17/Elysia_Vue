<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface Post {
  id?: number;
  name: string;
  email: string;
  path: string;
}

const data = ref<Post[]>([]);

const posts = computed(() => data.value);

// Function to fetch and update data
async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/posts');
    const result = await response.json();

    if (Array.isArray(result) && result.every((item) => typeof item === 'object')) {
      data.value = result as Post[];
    } else {
      console.error('Invalid data format:', result);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onMounted(fetchData); // Fetch data initially on component mount

// Optional: Watch for changes to the API endpoint using watchEffect
// (Uncomment if needed)
import { watchEffect } from 'vue';

watchEffect(fetchData, { flush: 'post' }); // Fetch data after component updates

</script>

<template>
  <h1 class="text-center text-red-600">test</h1>
  <!-- <div v-if="posts.length">
    <ul>
      <li v-for="post in posts" :key="post.id || post.name">
        <h2>{{ post.name }}</h2>
        <p>{{ post.email }}</p>
        <a :href="post.path">{{ post.path }}</a>
      </li>
    </ul>
  </div>
  <div v-else>
    <p v-if="!posts.length">Loading data...</p>
    <p v-else>Error fetching data.</p>
  </div> -->
</template>

<style scoped>
.container {
  display: grid;
  place-items: center;
  height: 100vh;
}
</style>
