<template>
    <div class="min-h-screen bg-gray-50">
      <UContainer :ui="{
        constrained: 'max-w-lg min-h-screen',
        base: 'bg-gray-50 mx-auto shadow-2xl',
        padding: 'px-0 sm:px-0 lg:px-0',
      }">
        <!-- navigasi balik satu path ke atasnya -->
        <navGoUpper :to="to" :label="label"/>
        <SdAd unit="top_sitewide" :size="[[320,50],[468,60]]" id="div-gpt-ad-1705790436404-0" />
        <slot />
        <Footer/>
      </UContainer>
    </div>
  </template>
<script setup>
const props = defineProps(['to','label'])
</script>