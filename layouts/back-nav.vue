<template>
  <div class="min-h-screen bg-gray-50">
    <UContainer :ui="{
      constrained: 'max-w-lg min-h-screen',
      base: 'bg-gray-50 mx-auto shadow-2xl',
      padding: 'px-0 sm:px-0 lg:px-0',
    }">
      <!-- navigasi balik satu path ke atasnya -->
      <navGoUpper :to="to" :label="label" />
      <SdAd unit="top_sitewide" :size="['fluid']" id="div-gpt-ad-1705790436404-0" />
      <slot />
      <Footer />
      <!-- buttom navigation on root path -->
      <div class="block w-full h-14"></div>
      <div class="fixed bottom-0 left-0 w-full z-20">
        <div class="max-w-lg mx-auto bg-white flex text-gray-700 shadow-md">
          <ULink active-class="text-red-700" :to="menu.to" :external="true" class="py-1 flex flex-1 flex-col justify-center items-center"
            :class="menu.animation ?? ''" v-for="menu of menus" @click="menu.action" :key="menu.label">
            <UIcon :name="menu.icon" />
            <span class="text-xs">{{ menu.label }}</span>
          </ULink>
        </div>
      </div>
    </UContainer>
  </div>
</template>
<script setup>
const props = defineProps(['to', 'label'])
const { menuFooter } = useSds()
const menus = menuFooter

console.lo
</script>