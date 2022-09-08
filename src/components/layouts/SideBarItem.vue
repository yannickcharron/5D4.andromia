<template>
  <li class="nav-item">
    <RouterLink :to="url" class="nav-link" :class="[path == url ? 'active' : '']">
      <div class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
        <slot name="icon" />
      </div>
      <span class="nav-link-text ms-1">{{ text }}</span>
    </RouterLink>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true
  }

})

const route = useRoute()
const path = computed(() => route.path)

</script>

<style lang="scss" scoped>

    
</style>
