<template>
  <div class="min-h-screen bg-gray-100">
    <UContainer :ui="{
      constrained: 'max-w-lg min-h-screen oveflow-hidden',
      base: 'bg-gray-50 mx-auto shadow-2xl',
      padding: 'px-0 sm:px-0 lg:px-0',
    }">
      <slot />
      <!-- buttom navigation on root path -->
      <div class="block w-full h-14"></div>
      <div class="fixed bottom-0 left-0 w-full z-20">
        <div class="max-w-lg mx-auto bg-white flex text-gray-700 shadow-md">
          <ULink active-class="text-red-700" :to="menu.to" class="py-1 flex flex-1 flex-col justify-center items-center" v-for="menu of menus" @click="menu.action" :key="menu.label">
            <UIcon :name="menu.icon" />
            <span class="text-xs">{{ menu.label }}</span>
          </ULink>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const menus = [
  { label: 'Home', icon: 'i-heroicons-home', to: '/' },
  { label: 'Toko', icon: 'i-heroicons-building-storefront', to: '/semua-brand/' },
  { label: 'Cari', icon: 'i-heroicons-magnifying-glass', to: '/cari/' },
  { label: 'Gratis Ongkir', icon: 'i-heroicons-truck', to: '/l/gratis-ongkir/' },
  { label: 'Menu', icon: 'i-heroicons-list-bullet', action: ()=>{ menuIsOpen.value=!menuIsOpen.value}},
]
const { menuIsOpen } = useMenuSlide()
</script>