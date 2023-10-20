<template>
  <div class="min-h-screen bg-gray-50">
    <UContainer :ui="{
      constrained: 'max-w-lg min-h-screen',
      base: 'bg-gray-100 mx-auto shadow-2xl',
      padding: 'px-0 sm:px-0 lg:px-0',
    }">
      <!-- navigasi balik satu path ke atasnya -->
      <navGoUpper />
      <slot />
      <!-- tombol promo filter / buttom navigation-->
      <div class="block w-full h-14"></div>
      <div v-if="hasOffers" class="fixed bottom-0 left-0 w-full z-20">
        <div class="max-w-lg mx-auto bg-gray-50 shadow-lg flex flex-wrap text-gray-700">
          <div class="w-full flex">
            <!-- indikator aktif-->
            <div :class="promoFilter == 1 ? 'w-0' : 'w-1/3'" class="h-0.5 transition-all"></div>
            <div :class="promoFilter == 3 || promoFilter == 1 ? 'w-0' : 'w-1/3'" class="h-0.5 transition-all"></div>
            <div :class="promoFilter == 3 ? 'bg-rose-600' : 'bg-sky-600'" class="w-1/3 h-0.5 transition-all"></div>
          </div>
          <div class="w-1/3 py-1 flex flex-col justify-center items-center" role="button" aria-label="Semua"
            @click.exact="promoFilter = 1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>

            <span class="text-xs">Semua</span>
          </div>
          <div class="w-1/3 py-1 flex flex-col justify-center items-center" role="button" aria-label="Kode"
            @click.exact="promoFilter = 3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
            </svg>

            <span class="text-xs">Kode</span>
          </div>
          <div class="w-1/3 py-1 flex flex-col justify-center items-center" role="button" aria-label="Penawaran"
            @click.exact="promoFilter = 2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

            <span class="text-xs">Penawaran</span>
          </div>
        </div>
      </div>
      <!--promo detail modal-->
    </UContainer>
  </div>
</template>

<script setup>
const { promoFilter, hasOffers } = usePromoFilter();
</script>