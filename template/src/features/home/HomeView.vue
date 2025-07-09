<template>
  <div class="min-h-screen">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <StackSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup>
import HeroSection from './sections/HeroSection.vue';
import AboutSection from './sections/AboutSection.vue';
import ServicesSection from './sections/ServicesSection.vue';
import StackSection from './sections/StackSection.vue';
import ContactSection from './sections/ContactSection.vue';
import Footer from '@/shared/components/Footer.vue';
</script>
