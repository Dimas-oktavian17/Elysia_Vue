<script setup>
const props = defineProps({
  data: {
    type: [Array, Object],
    required: false
  }
})

</script>

<template>
  <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
        {{ props.data.title }}
      </h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions
      {{ props.data.author }} - {{ props.data.year }}
    </p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions
      {{ props.data.InsertAt }} - {{ props.data.UpdateAt }}
    </p>
  </div>
</template>
