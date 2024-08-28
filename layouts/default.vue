<template>
  <div class="min-h-screen bg-gray-100">
    <UContainer :ui="{
      constrained: 'max-w-lg min-h-screen oveflow-hidden',
      base: 'bg-gray-100 mx-auto shadow-2xl',
      padding: 'px-0 sm:px-0 lg:px-0',
    }">
      <slot />
      <Footer />
      <!-- buttom navigation on root path -->
      <div class="block w-full h-14"></div>
      <div class="fixed bottom-0 left-0 w-full z-20">
        <div class="max-w-lg mx-auto bg-white flex text-gray-700 shadow-md">
          <ULink active-class="text-red-700" :to="menu.to" class="py-1 flex flex-1 flex-col justify-center items-center"
            :class="menu.animation ?? ''" v-for="menu of data?.menuFooter?.links" :key="menu.label"
            @click="menu.action ? (menuIsOpen = !menuIsOpen) : '' ">
            <UIcon :name="menu.icon" />
            <span class="text-xs">{{ menu.label }}</span>
          </ULink>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
// const { menuFooter } = useSds()
const { menuIsOpen } = useMenuSlide()

interface FooterLink {
    label: string;
    icon: string;
    to: string;
    animation: boolean;
    action: boolean;
  }
  
  interface MenuFooter {
    lastUpdated: string;
    links: FooterLink[];
  }
  
  interface ApiResponse {
    menuFooter: MenuFooter;
  }
const { data } = await useFetch<ApiResponse>('https://sds-jsons.pages.dev/menu-footer.json')

</script>