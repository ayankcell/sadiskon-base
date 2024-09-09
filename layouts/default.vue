<template>
  <div class="min-h-screen bg-gray-100">
    <UContainer :ui="{
      constrained: 'max-w-lg min-h-screen oveflow-hidden',
      base: 'bg-gray-100 mx-auto shadow-2xl',
      padding: 'px-0 sm:px-0 lg:px-0',
    }">
    <BannerAtas/>
      <slot />
      <Footer />
      <!-- buttom navigation on root path -->
      <div class="block w-full h-14"></div>
     <BottomMenu/>
    </UContainer>
  </div>
</template>