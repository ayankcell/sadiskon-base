<script setup>
//tombol kembali satu path ke atas
/**
 * @todo: change promoFilter state to initial when navigating pages
 */
const route = useRoute();
const path = route.path

const upperPaths = path.split('/').filter((p) => p !== '')
upperPaths.pop()

const upperPath = ref('/' + upperPaths.join('/') + '/')

const props = defineProps(['to','label'])
upperPath.value = props.to?? upperPath.value
</script>
<template>
  <div>
    <div class="fixed top-0 left-0 w-full z-20">
      <div class="max-w-lg mx-auto bg-white shadow-md flex flex-wrap text-gray-700">
        <div class="w-full flex justify-start items-center">
          <NuxtLink aria-label="Kembali" :to="upperPath == '//' ? '/' : upperPath"
            class="flex items-center space-x-2 px-2 py-3 text-gray-600 text-sm" :no-prefetch="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
            {{ label?? 'Kembali' }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="block w-full h-12"></div>

  </div>
</template>
