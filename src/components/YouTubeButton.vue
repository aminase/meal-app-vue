<script setup>
const props = defineProps({
  href: String,
})
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="px-2 py-2 rounded border border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-500 transitions-colors"
    ><slot></slot
  ></a>
</template>
