import { ref } from 'vue'

const detailVisible = ref(false) // promo detail popup
const expiredMode = ref(false)
const modalVisible = ref(false) // kode voucher popup
const promoData = ref(Object)
export default function(){
    return {
        detailVisible,
        modalVisible,
        expiredMode,
        promoData,
    }
}