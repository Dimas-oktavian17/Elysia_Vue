<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class'],
  description:string | unknown
}>()
</script>

<template>
  <div :class="cn('text-sm [&_p]:leading-relaxed', props.class)">
 {{ props.description }}
  </div>
</template>
