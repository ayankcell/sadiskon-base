<template>
    <div class="border-dashed border-2 border-gray-300 p-2 flex flex-col space-y-2">
        <div class="flex justify-center items-center shadow-sm bg-gray-100">
            <span class="block py-2 font-mono">
                {{ voucherCode }}
            </span>
        </div>
        <UButton size="lg" icon="i-heroicons-clipboard-document" color="sky" block id="codeCopy" @click.exact="copyVC()">
            Salin Kode
        </UButton>
    </div>
</template>
<script setup>
const props = defineProps(['voucherCode','promoId'])
//copy kode voucher
const { toClipboard } = useClipboard(); // composable
const toast = useToast();
const { goToPromo } = useRedir();

const copyVC = async () => {
  // kalo berhasil, tampilkan notifikasi salin & buka halaman promo
  try {
    await toClipboard(props.voucherCode);

    toast.add({
      title: "Kode berhasil disalin!",
      color:"green",
      icon: "i-heroicons-check-circle",
    });
    setTimeout(() => {
      goToPromo(props.promoId);
      // console.log(promoData.value.id)
    }, 4000);
  } catch (e) {
    //kalo gagal
    toast.add({
      title: "Kode gagal disalin!",
      icon: "i-heroicons-exclamation-circle",
      color: "red",
    });
  }
  return { copyVC };
};
</script>