<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
    <UNotifications />
    <MenuSlide />
  </div>
</template>

<script setup>

//
const { detailVisible, modalVisible, promoData } =
  usePromodetail();
const router = useRouter();
const pageHash = useRoute().hash;
const route = useRoute()
const { menuIsOpen } = useMenuSlide()

watchEffect(async () => {
  if (pageHash && pageHash.includes("#kode-voucher_")) {
    if (localStorage.getItem("_sdsPopup")) {
      const localStorageOffer = JSON.parse(localStorage.getItem("_sdsPopup"));
      //kalo ada data tersimpan di browser
      // ambil datanya dan simpan dalam variable
      promoData.value = localStorageOffer;

      // kemudian hapus localstorage-nya
      localStorage.removeItem("_sdsPopup");
      // dan balikin data sds
    } else {
      const GqlInstance = useGql()
      const singleP = await GqlInstance('SinglePromo', { promoId: pageHash.replace('#kode-voucher_', '') })
      promoData.value = singleP.promo
    }

    //tampilkan promoModal 
    modalVisible.value = true;
  }

})

watch(modalVisible, (tampil, hilang) => {
  // hapus data & hash jika modal tertetup
  if (hilang) {
    router.replace({ hash: '' })
    promoData.value = Object
  } else {
    router.replace({ hash: pageHash })
  }
})

//menu samping harus menutup setiap path / route berubah
// const { menuIsOpen } = useMenuSlide()
watchEffect(() => {
  if (route.fullPath) {
    menuIsOpen.value = false
  }
})

/** delay install service workder **/
onMounted(() => {
  // sadiskon.com dijual
  const saleNote = '%cDomain sadiskon.com is looking for a new owner. Bid at https://sedo.com/search/?keyword=sadiskon.com'
  console.log(saleNote, 'color: green; background: black;')
  setTimeout(() => {
    useHead({
      script: [
        { src: 'https://www.sadiskon.com/js/sw-inst.js', async: true, type: 'text/javascript' },
      ],
    })
  }, 6000);
})
</script>
