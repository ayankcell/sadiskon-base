<script setup>
const props = defineProps(['error'])

const handleError = () => clearError({ redirect: '/' })

const errorTitle = {
    //@ts-ignore
    404: `Waduh! Halaman gak ditemukan: ${props.error?.url} | Sadiskon`,
    500: `Gangguan Server Nih: ${props.error?.url}`
}

const errorPage = {
    404: {
        headline: 'Waduh! Halaman Gak Ditemukan', messages: [
            { text: 'Mungkin kamu tersesat, atau promo sudah dihapus.' },
            { text: 'Tenang, masih ada banyak promo lainnya kok!' }
        ]
    },
    500: {
        headline: 'Duh! Maaf Lagi Ada Masalah Nih', messages: [
            { text: 'Sistem Sadiskon lagi ada gangguan teknis.' },
            { text: 'Kamu boleh coba refresh halaman ini setelah beberapa menit, atau coba klik tombol "Balik" di bawah ini' }
        ]
    }
}

useSeoMeta({
    //@ts-ignore
    title: errorTitle[props.error?.statusCode]
});
</script>
<template >
    <div>
        <NuxtLayout name="error">
            <div class="min-h-screen w-full flex flex-col justify-center items-center space-y-5">
                <svg data-name="Layer 1" width="400" height="304.33" viewBox="0 0 400 304.33"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M142.295 70.813a.656.656 0 0 1-.654-.61 23.204 23.204 0 0 0-23.078-21.501c-.7 0-1.435.036-2.186.106a.656.656 0 0 1-.631-.328 27.571 27.571 0 0 0-50.42 5.996.653.653 0 0 1-.646.474l-.175-.005a7.616 7.616 0 0 0-.273-.006 19.445 19.445 0 0 0-18.949 15.353.656.656 0 0 1-.642.521H.657a.657.657 0 0 1 0-1.313h43.459A20.77 20.77 0 0 1 64.21 53.626a28.884 28.884 0 0 1 52.464-6.161 24.393 24.393 0 0 1 1.888-.076 24.521 24.521 0 0 1 24.389 22.722.656.656 0 0 1-.609.701.675.675 0 0 1-.047.002Zm-7.811 8.418H26.81a.656.656 0 1 1 0-1.313h107.674a.656.656 0 1 1 0 1.313Zm-81.412 9.52h-36.11a.657.657 0 1 1 0-1.313h36.11a.657.657 0 0 1 0 1.313Z"
                        fill="#cbcbcb" />
                    <path
                        d="M86.833 216.498c0 26.692-27.983 39.464-27.983 39.464s-28.271-12.772-28.845-39.464c-.338-15.69 12.721-28.414 28.414-28.414a28.414 28.414 0 0 1 28.414 28.414Z"
                        fill="#e5e5e5" />
                    <path fill="#cbcbcb" d="M68.321 257.54H49.378l-2.296-9.184h23.535l-2.296 9.184z" />
                    <path fill="#fff" d="M50.024 273.247h17.651v9.199H50.024z" />
                    <path
                        d="M67.818 282.589H49.88v-9.486h17.938Zm-17.651-.287h17.364v-8.912H50.167Zm12.301-23.679h-7.236l-.83-1.305h8.897l-.83 1.305zm-12.946-1.083h.287v14.063h-.287zm18.369 0h.287v14.063h-.287zm-6.164-9.339-.175-.227c8.291-6.394 18.175-17.348 18.175-33.222a28.232 28.232 0 0 0-17.266-26.049l.112-.264a28.518 28.518 0 0 1 17.441 26.313c0 15.99-9.945 27.016-18.287 33.449Z"
                        fill="#cbcbcb" />
                <path
                    d="m52.541 248.2-.175-.227c8.291-6.394 18.175-17.348 18.175-33.222a28.265 28.265 0 0 0-17.07-25.965l.114-.263a28.552 28.552 0 0 1 17.243 26.229c0 15.99-9.945 27.016-18.287 33.449Z"
                    fill="#cbcbcb" />
                <path
                    d="M64.295 248.2c-8.342-6.434-18.287-17.459-18.287-33.449a28.552 28.552 0 0 1 17.244-26.229l.114.263a28.265 28.265 0 0 0-17.07 25.965c0 15.874 9.883 26.828 18.175 33.222Z"
                    fill="#cbcbcb" />
                <path
                    d="M55.111 248.2c-8.342-6.434-18.287-17.459-18.287-33.449a28.499 28.499 0 0 1 17.558-26.362l.111.265a28.213 28.213 0 0 0-17.382 26.097c0 15.874 9.884 26.828 18.175 33.222Zm3.164-60.116h.287v60.272h-.287z"
                    fill="#cbcbcb" />
                <path fill="#fff" d="m50.024 276.526 5.263-5.263" />
                <path fill="#cbcbcb" d="m49.922 276.424 5.263-5.263.203.203-5.263 5.263z" />
                <path fill="#fff" d="m50.024 279.4 7.824-8.227" />
                <path fill="#cbcbcb" d="m49.921 279.302 7.824-8.228.208.198-7.824 8.228z" />
                <path fill="#fff" d="M47.8 271.173h21.526v2.583H47.8z" />
                <path d="M69.469 273.9H47.656v-2.87h21.813Zm-21.526-.287h21.238v-2.296H47.943Z" fill="#cbcbcb" />
                <path
                    d="M140.989 148.852c0 17.618-18.47 26.048-18.47 26.048s-18.66-8.43-19.039-26.048c-.222-10.356 8.397-18.755 18.755-18.755a18.754 18.754 0 0 1 18.754 18.755Z"
                    fill="#e5e5e5" />
                <path fill="#cbcbcb" d="M128.77 175.942h-12.503l-1.515-6.062h15.534l-1.516 6.062z" />
                <path fill="#fff" d="M116.694 186.309h11.651v6.071h-11.651z" />
                <path
                    d="M128.438 192.475h-11.84v-6.261h11.84Zm-11.65-.189h11.461v-5.882h-11.461Zm8.119-15.629h-4.776l-.548-.861h5.873l-.548.861zm-8.545-.715h.189v9.283h-.189zm12.124 0h.189v9.283h-.189zm-4.069-6.165-.116-.15c5.472-4.221 11.997-11.45 11.997-21.928a18.634 18.634 0 0 0-11.397-17.194l.074-.175a18.823 18.823 0 0 1 11.512 17.368c0 10.555-6.564 17.832-12.071 22.078Z"
                    fill="#cbcbcb" />
                <path
                    d="m118.355 169.777-.116-.15c5.472-4.221 11.997-11.45 11.997-21.928a18.656 18.656 0 0 0-11.267-17.138l.075-.174a18.845 18.845 0 0 1 11.381 17.312c0 10.555-6.564 17.832-12.071 22.078Z"
                    fill="#cbcbcb" />
                <path
                    d="M126.113 169.777c-5.507-4.246-12.071-11.523-12.071-22.078a18.845 18.845 0 0 1 11.382-17.312l.075.174a18.656 18.656 0 0 0-11.267 17.138c0 10.478 6.524 17.708 11.997 21.928Z"
                    fill="#cbcbcb" />
                <path
                    d="M120.051 169.777c-5.506-4.246-12.071-11.523-12.071-22.078a18.81 18.81 0 0 1 11.59-17.4l.073.175a18.621 18.621 0 0 0-11.473 17.225c0 10.478 6.524 17.708 11.997 21.928Zm2.088-39.68h.189v39.782h-.189z"
                    fill="#cbcbcb" />
                <path fill="#fff" d="m116.694 188.473 3.474-3.474" />
                <path fill="#cbcbcb" d="m116.627 188.406 3.474-3.474.134.134-3.474 3.474z" />
                <path fill="#fff" d="m116.694 190.371 5.164-5.43" />
                <path fill="#cbcbcb" d="m116.626 190.306 5.164-5.431.137.131-5.164 5.431z" />
                <path fill="#fff" d="M115.225 184.94h14.208v1.705h-14.208z" />
                <path
                    d="M129.528 186.74h-14.397v-1.895h14.397Zm-14.208-.189h14.018v-1.516H115.32Zm182.685-13.612a.47.47 0 0 0 .469-.438 16.632 16.632 0 0 1 16.543-15.412c.501 0 1.029.026 1.567.076a.47.47 0 0 0 .452-.235 19.763 19.763 0 0 1 36.14 4.298.469.469 0 0 0 .463.34l.125-.004c.065-.002.13-.005.196-.005a13.938 13.938 0 0 1 13.582 11.005.47.47 0 0 0 .461.373h31.528a.47.47 0 1 0 0-.941h-31.152a14.888 14.888 0 0 0-14.403-11.378 20.704 20.704 0 0 0-37.605-4.416 17.483 17.483 0 0 0-1.354-.054 17.576 17.576 0 0 0-17.481 16.287.47.47 0 0 0 .437.502l.033.001Zm5.6 6.034h77.179a.47.47 0 1 0 0-.941h-77.179a.47.47 0 0 0 0 .941Zm58.355 6.824h25.883a.47.47 0 0 0 0-.941H361.96a.47.47 0 1 0 0 .941Z"
                    fill="#cbcbcb" />
                <path fill="#9f616a" d="M241.686 299.348h-1.549l-.737-5.975h2.287v5.975z" />
                <path d="M242.081 300.849h-4.995v-.063a1.946 1.946 0 0 1 1.944-1.944h3.05Z" fill="#2f2e41" />
                <path fill="#9f616a" d="m261.662 296.412-1.328.798-3.709-4.742 1.96-1.177 3.077 5.122z" />
                <path
                    d="m258.492 300.069-.032-.054a1.946 1.946 0 0 1 .665-2.668l2.615-1.571 1.034 1.721Zm-16.404-1.954h-.027a20.802 20.802 0 0 1-2.255-.129 51.732 51.732 0 0 0-.968-.09l-.013-.002c-.255-.076-.262-2.463-.154-10.634.055-4.185.118-8.929.043-11.95l-.001-.03.023-.02a11.357 11.357 0 0 1 9.992-2.537l.028.006.014.024c1.522 2.576 3.821 6.287 6.045 9.875 5.103 8.237 6.562 10.66 6.402 10.843l-.019.015c-.349.174-.61.308-.833.422a27.453 27.453 0 0 1-2.709 1.222l-.041.017-.03-.033c-5.178-5.674-9.487-12.012-12.152-17.871-.311 2.001-.689 4.612-1.089 7.372-1.149 7.936-1.925 13.161-2.238 13.48Z"
                    fill="#2f2e41" />
                <path
                    d="M341.087 91.5c0 85.955-90.114 127.083-90.114 127.083S159.935 177.454 158.087 91.5C157.001 40.978 199.053 0 249.587 0s91.5 40.966 91.5 91.5Z"
                    fill="#f50057" />
                <path fill="#ffb7b7" d="M252.907 298.672h-1.9l-.903-7.326h2.803v7.326z" />
                <path d="M249.651 298.129h3.663v2.306h-5.97a2.306 2.306 0 0 1 2.306-2.306Z" fill="#2f2e41" />
                <path fill="#ffb7b7" d="M260.034 298.672h-1.899l-.904-7.326h2.804v7.326z" />
                <path
                    d="M256.778 298.129h3.663v2.306h-5.97a2.306 2.306 0 0 1 2.306-2.306Zm-3.961-3.148-2.091-.1a.697.697 0 0 1-.664-.691l-.146-21.157a.697.697 0 0 1 .798-.695l8.365 1.214a.693.693 0 0 1 .597.684l1.076 19.605a.697.697 0 0 1-.697.702H257.8a.694.694 0 0 1-.689-.589s-1.703-14.705-1.936-14.696c-.236.005-1.633 15.109-1.633 15.109a.7.7 0 0 1-.692.615l-.033-.001Z"
                    fill="#2f2e41" />
                <path fill="#3f3d56" d="M281.474 223.667h-61l-7.394-29.576h75.788l-7.394 29.576z" />
                <path fill="#fff" d="M222.554 274.247h56.841v29.622h-56.841z" />
                <path
                    d="M279.856 304.33h-57.765v-30.546h57.765Zm-56.841-.924h55.917v-28.697h-55.917Zm39.61-76.251h-23.303l-2.674-4.203H265.3l-2.674 4.203zm-41.689-3.488h.924v45.288h-.924zm59.152 0h.924v45.288h-.924zm-19.85-30.077-.564-.732c26.7-20.59 58.529-55.865 58.529-106.983a90.913 90.913 0 0 0-55.602-83.884l.36-.85a91.836 91.836 0 0 1 56.166 84.735c0 51.493-32.025 86.998-58.889 107.715Z"
                    fill="#3f3d56" />
                <path
                    d="m230.662 193.591-.564-.732c26.7-20.59 58.529-55.865 58.529-106.983a91.02 91.02 0 0 0-54.969-83.614l.366-.848a91.944 91.944 0 0 1 55.527 84.462c0 51.493-32.024 86.998-58.889 107.715Z"
                    fill="#3f3d56" />
                <path
                    d="M268.513 193.59c-26.865-20.717-58.889-56.221-58.889-107.715a91.944 91.944 0 0 1 55.527-84.461l.366.848a91.02 91.02 0 0 0-54.969 83.614c0 51.118 31.828 86.392 58.529 106.983Z"
                    fill="#3f3d56" />
                <path
                    d="M238.937 193.59c-26.865-20.717-58.889-56.221-58.889-107.715A91.772 91.772 0 0 1 236.589.983l.356.853a90.85 90.85 0 0 0-55.973 84.04c0 51.118 31.828 86.393 58.529 106.983ZM249.126 0h.924v194.091h-.924z"
                    fill="#3f3d56" />
                <path fill="#fff" d="m222.554 284.805 16.948-16.948" />
                <path fill="#3f3d56" d="m222.227 284.478 16.948-16.948.653.653-16.948 16.948z" />
                <path fill="#fff" d="m222.554 294.062 25.196-26.494" />
                <path fill="#3f3d56" d="m222.221 293.746 25.193-26.497.67.637-25.194 26.497z" />
                <path fill="#fff" d="M215.391 267.568h69.318v8.318h-69.318z" />
                <path d="M285.171 276.349h-70.242v-9.242h70.242Zm-69.318-.924h68.394v-7.394h-68.394Z" fill="#3f3d56" />
                <path
                    d="M203.019 225.621a.47.47 0 0 1-.469-.438 16.632 16.632 0 0 0-16.543-15.412 16.891 16.891 0 0 0-1.567.076.47.47 0 0 1-.452-.235 19.763 19.763 0 0 0-36.14 4.298.469.469 0 0 1-.463.34l-.125-.004c-.065-.002-.13-.005-.196-.005a13.938 13.938 0 0 0-13.582 11.005.47.47 0 0 1-.461.373h-31.528a.47.47 0 1 1 0-.941h31.152a14.888 14.888 0 0 1 14.403-11.378 20.704 20.704 0 0 1 37.605-4.416 17.483 17.483 0 0 1 1.354-.054 17.576 17.576 0 0 1 17.481 16.287.47.47 0 0 1-.437.502.479.479 0 0 1-.033.001Zm-5.6 6.034H120.24a.47.47 0 1 1 0-.941h77.179a.47.47 0 1 1 0 .941Zm-58.355 6.824h-25.883a.47.47 0 1 1 0-.941h25.883a.47.47 0 1 1 0 .941Z"
                    fill="#cbcbcb" />
            </svg>
            <h1 class="w-full text-center py-5 text-3xl font-bold text-gray-600">
                {{ errorPage[error?.statusCode].headline }}
            </h1>
            <p class="text-center px-2" v-for="(text,i) in errorPage[error?.statusCode].messages" :key="i">
                {{ text.text }}
            </p>

            <UButton color="gray" size="xl" :ui="{ rounded: 'rounded-full' }" icon="i-heroicons-arrow-left-20-solid"
                @click.exact="handleError">Balik ke Sadiskon</UButton>

        </div>
    </NuxtLayout>
</div></template>
