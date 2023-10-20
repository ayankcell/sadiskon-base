<template>
    <div class="py-2 flex items-center">
        <span class="text-sm font-semibold text-gray-600">Bagikan promo:</span>
        <UButton v-for="share of socialShares" :key="share.name" variant="ghost" color="gray" size="xl"
            :aria-label="share.name" @click="socialSharesAction(share)" :icon="share.icon" />
    </div>
</template>
<script setup>
const { toClipboard } = useClipboard();
const toast = useToast()
const props = defineProps(['promoData'])
const emoji = [
  '😍','✨','🥰','🤩','🥳','🤑','🙀','🎟️','💰','🛍️'
]
const random = Math.floor( Math.random() * emoji.length )

const shareURL = props.promoData.merchant? `https://www.sadiskon.com/${props.promoData.merchant.nodes[0].uri}#kode-voucher_${props.promoData.id}` : `https://www.sadiskon.com${useRoute().path}#kode-voucher_${props.promoData.id}`

const shareText = `${emoji[random]} Wow! aku nemu 🎫 promo ini di Sadiskon:

${props.promoData.title}
${shareURL}
`

const socialShares = [
    { name: 'Facebook', icon: 'i-bxl-facebook-circle', to: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}` },
    { name: 'WhatsApp', icon: 'i-bxl-whatsapp', to: `https://api.whatsapp.com/send/?text=${encodeURIComponent(shareText)}` },
    { name: 'Salin Link', icon: 'i-heroicons-link', action: true },
]

const socialSharesAction = async (item) => {
    return item.action? await copyShareURL() : navigateTo(item.to, { open: { target: '_blank' } })
}

const copyShareURL = async () => {
    // kalo berhasil, tampilkan notifikasi salin & buka halaman promo
    try {
        await toClipboard(shareText);

        toast.add({
            title: "Tautan berhasil disalin!",
            color: "green",
            timeout:2000,
            icon: "i-heroicons-check-circle",
        });
    } catch (e) {
        //kalo gagal
        toast.add({
            title: "Gagal disalin!",
            icon: "i-heroicons-exclamation-circle",
            color: "red",
        });
    }
    return { copyShareURL };
};
</script>