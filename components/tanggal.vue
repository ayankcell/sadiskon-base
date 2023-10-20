<template>
    <span>
        {{ tanggal }}
    </span>
</template>

<script setup>
const dayjs = useDayjs()
const props = defineProps(['date','format','asRelativeTime','prefix'])
const prefix = ref(props.prefix?? '')
const tanggal = ref('')
tanggal.value = props.date? prefix.value+' '+ dayjs(props.date).format(props.format) : 'Tanpa batas masa berlaku'

tanggal.value = props.asRelativeTime && props.date? prefix.value+' '+dayjs(props.date + " 23:59:59").fromNow() : tanggal.value
</script>