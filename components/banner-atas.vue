<template>
    <!-- banner 10.10 -->
    <div class="w-full" :class="data.banner.themeColor" v-show="!terlewat">
        <!-- text only -->
        <div class="p-4 text-center" v-if="!data.banner.isImage">
            <div class="text-lg font-semibold">{{ data.banner?.headline }}
                <span v-show="dayjs().isBefore(dDay, 'day')">{{ dayjs(dDay).fromNow(true) }} lagi</span>
                <span v-show="dayjs().isSame(dDay, 'day')" class="font-semibold">sisa {{ dayjs(expired).fromNow(true) }} lagi</span>
                <!-- <span v-show="dayjs().isBefore(expired, 'day')" class="font-semibold"> sisa {{ dayjs(expired).fromNow(true) }} lagi</span> -->
            </div>
            <p class="text-sm">
                {{ data.banner?.content }}
            </p>

            <UButton :to=" data.banner.link " :no-prefetch=" true " class="rounded-full mt-5" size="sm" color="blue"
                trailing-icon="i-heroicons-shopping-bag">Ambil Promonya
            </UButton>
        </div>
        <!--image-->
        <NuxtLink :to=" data.banner.link " :title=" data.banner?.title ?? '' " v-else>
            <NuxtImg :src=" data?.banner?.imageUrl " :alt=" data?.banner?.title ?? '' " class="w-full object-cover" />
            <div class="text-center bg-red-500 py-1">
                <span v-show=" dayjs().isBefore(dDay, 'day') " class="animate-ping">{{ dayjs(dDay).fromNow(true) }}
                    lagi</span>
                <span v-show=" dayjs().isSame(dDay, 'day') " class="font-semibold">sisa {{ dayjs(expired).fromNow(true) }} lagi</span>
            </div>
        </NuxtLink>
    </div>
</template>
<script setup>
const { data } = await useFetch('https://sds-jsons.pages.dev/top-banner.json')


const dDay = data.value?.banner?.dateStart
const expired = data.value?.banner?.dateExpired
const dayjs = useDayjs()
const terlewat = dayjs().isAfter(expired ?? dDay, 'day')
</script>