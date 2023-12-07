<template>
    <div class="w-full">
        <span class="block text-center text-xs py-2 text-gray-500" v-if="showLabel">Advertisement</span>
        <div :id="id" :class="`w-full h-[${maxAdH}px]`">
        </div>
    </div>
</template>
<script setup>

/** inpired from https://github.com/garrettbland/vue-google-ad-manager */
const props = defineProps({
    id: {
        default: () => {
            return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
        }
    },
    unit: { required: true },
    size: {},
    slotType: {
        default: 'normal'
    },
    showLabel: { default: false }
})
/** get the tallest ad as container height */
const sizes = props.size.map(size => size[1])
sizes.sort((a, b) => { return a - b })

const maxAdH = sizes[1]
/** initialization */
const { isLoaded, gptScript } = useSdAd()

/** methods */
const displayAd = () => {
    googletag.cmd.push(() => {
        adDefine()
        // googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        googletag.display(props.id)
    })
}

const adDefine = () => {
    if (props.slotType === 'out-of-page') {
        return outOfPageSlot()
    }
    return adSlots()
}

const adSlots = () => {
    googletag.defineSlot(`/138734930/${props.unit}`, props.size, props.id).addService(googletag.pubads());
}

const outOfPageSlot = () => {
    googletag.defineOutOfPageSlot(`/138734930/${props.unit}`, props.id).addService(googletag.pubads())
}
/** reset the init every route changed*/

const route = useRoute()
watchEffect(() => {
    if (route.fullPath) {
        isLoaded.value = false
    }
})
/** configuring dan displaying ads */
onMounted(() => {
    // tambahkan Google Publisher Tag (gpt.js) jika belum ditambahkan
    if (!isLoaded.value) {
        // script gpt.js
        useHead({
            script: [
                { src: gptScript, async: true }
            ]
        })

        // create google tag
        window.googletag = {};
        googletag.cmd = googletag.cmd || [];

        // set loaded state
        isLoaded.value = true

        /** destroy semua slot yang ada 
         * pastiin gak dobel slot
        */
        googletag.cmd.push(() => {
            googletag.destroySlots()
        })
    }

    // display Ad
    displayAd()
})



</script>