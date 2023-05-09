<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  href: String,
})
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="px-2 py-2 rounded border border-2 text-white border-red-600 bg-red-500 hover:bg-red-500 transitions-colors"
    ><slot></slot
  ></a>
</template>
