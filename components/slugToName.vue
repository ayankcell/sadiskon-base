<template>
    <component :is="tag?? 'div'">
        {{ textString }}
    </component>
</template>
<script setup>
const props = defineProps(['slug', 'tag'])
const { slugToName } = useStringSds()

const textString = slugToName(props.slug)
</script>