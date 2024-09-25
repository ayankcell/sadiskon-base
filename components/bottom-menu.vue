<template>
    <div class="fixed bottom-0 left-0 w-full z-20">
        <div class="max-w-lg mx-auto bg-white flex text-gray-700 shadow-md">
            <ULink active-class="text-red-700" :to="menu.to"
                class="py-1 flex flex-1 flex-col justify-center items-center" :class="menu.animation ?? ''"
                v-for="menu of data?.menuFooter?.links" :key="menu.label"
                @click="menu.action ? (menuIsOpen = !menuIsOpen) : ''" external>
                <img :src="`${jsonHost}/icons/${menu.icon}`" class="w-5 h-5 opacity-70" />
                <span class="text-xs">{{ menu.label }}</span>
            </ULink>
        </div>
    </div>
</template>
<script setup>
const { menuIsOpen } = useMenuSlide()
const jsonHost = 'https://sds-jsons.pages.dev'

const { data } = await useFetch(`${jsonHost}/menu-footer-v2.json`)</script>