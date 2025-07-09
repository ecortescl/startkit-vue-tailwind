<script setup>
import { RouterView } from 'vue-router'
import Navbar from '../shared/components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

