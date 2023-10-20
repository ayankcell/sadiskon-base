const redirHost = 'https://sadiskon.irit.link/gotopromo/'
const { modalVisible, promoData } = usePromodetail();

/** tracking clickout */
function trackClickout(){
    const gtm = useGtm()
    try {
        gtm?.trackEvent({
            event: 'clickout',
            label:'click affiliate link'
        })
    } catch (error) {
        console.log(error)
    }

}

/**
 * fungsi yang meng handle click pada promo list
 * jika ada kode voucher, redirect halaman ini ke link affiliate & buka tab baru dengan menampilkan rincian ( modal ) promo
 * jika tanpa kode, tampilkan rincian promo di halaman ini dan buka tab baru ke affiliate link
 * */
const sdsRedir = (promo: Object) => {
    //kalo tanpa kode, maka langsung redirect aja
    //@ts-ignore
    if (!promo.voucherCode) {
        //tampilkan rincian promonya di halaman ini
        modalVisible.value = true
        //@ts-ignore
        promoData.value = promo
        //tambahkan #hash di belakang
        //@ts-ignore
        // router.replace({hash:'#kode-voucher_'+promo.id})
        // dan buka tab baru ke halaman affiliate
        //@ts-ignore
        goToPromo(promo.id);

    } else {
        //ini kalo kode
        localStorage.setItem('_sdsPopup', JSON.stringify(promo))
        trackClickout()
        // buka tab baru dengan kode
        //@ts-ignore
        navigateTo(location.href + '#kode-voucher_' + promo.id, { open: { target: "_blank" } });
        // halaman ini redirect ke affiliate link
        //@ts-ignore
        navigateTo(redirHost + promo.id, { external: true });
    }

    return;
}

const sdsPromoDetailInNewTab = (promo: Object) => {
    trackClickout()
    //@ts-ignore
    navigateTo(location.href + '#kode-voucher_' + promo.id, { open: { target: "_blank" } });
    // halaman ini redirect ke affiliate link
    //@ts-ignore
    navigateTo(redirHost + promo.id, { external: true });
}

function goToPromo(id: String) {
    trackClickout()
    navigateTo(redirHost + id, {
        open: { target: "_blank" },
        external: true,
    });
}


export default () => {
    return {
        sdsRedir,
        goToPromo,
        redirHost,
        sdsPromoDetailInNewTab
    }
}