<template>
    <div class="min-h-screen bg-gray-50">
      <UContainer :ui="{
        constrained: 'max-w-lg min-h-screen',
        base: 'bg-gray-50 mx-auto shadow-2xl',
        padding: 'px-0 sm:px-0 lg:px-0',
      }">
        <!-- navigasi balik satu path ke atasnya -->
        <navGoUpper />
        <BannerAtas/>
        <slot />
        <Footer/>
      </UContainer>
    </div>
  </template>
