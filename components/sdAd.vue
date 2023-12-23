<template>
    <div class="bg-gray-200">
        <span class="block text-center text-xs py-1 text-white bg-slate-400" v-if="label && labelTop">{{ label }}</span>
        <div :id="id" class="flex justify-center items-center transition-all duration-300" :style="height ? 'min-height: '+height+'px' : ''">
        </div>
        <span class="block text-center text-xs py-1 text-white bg-slate-400" v-if="label && !labelTop">{{ label }}</span>
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
    height: {},
    label: {},
    labelTop:{default: false}
})

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

const refreshAd = () => {
    googletag.cmd.push(() => {
        googletag.pubads().refresh()
    })
}
/** reset the init every route changed*/

const route = useRoute()


onBeforeUnmount(() => {
    googletag.cmd.push(() => {
        googletag.destroySlots()
    })
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
    }
    // display Adhttps://www.sadiskon.com/
    displayAd()
})

</script>