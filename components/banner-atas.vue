<template>
    <!-- banner 10.10 -->
    <div class="w-full h-12 bg-red-600 flex items-center text-white text-sm justify-center" v-show="!terlewat">
        <div class="font-bold px-2">
            Sadisnya <span class="inline-block text-lg">Promo 12.12</span>
        </div>
        <div v-show="dayjs().isBefore(dDay,'day')">{{ dayjs(dDay).fromNow() }}</div>
        <div v-show="dayjs().isSame(dDay,'day')" class="font-semibold">HARI INI</div>
        <ULink to="https://www.sadiskon.com/l/12-12/" :no-prefetch="true"
            class="text-center mx-2 px-4 py-1 bg-yellow-500 rounded-lg text-xs font-semibold animate-bounce">Ambil</ULink>
    </div>
</template>
<script setup>
const dDay = '2023-12-12'
const dayjs = useDayjs()
const terlewat = dayjs().isAfter(dDay,'day')
</script>