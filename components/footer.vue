<template>
    <footer class="p-2 bg-gray-900 text-gray-200 mt-3">
        <div class="grid grid-cols-2">
            <div class="p-2" v-for="(menuItem, i) in footerMenu" :key="i">
                <h2>{{ menuItem.title }}</h2>
                <ul class="p-0 leading-normal">
                    <li v-for="(link, j) in menuItem.links" :key="j" class="list-none">
                        <a :href="link.to" class="text-sm underline hover:no-underline">{{ link.label }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-center">
            <span class="block text-red-600 text-base"><strong>Sadiskon</strong> - Sahabat hemat kamu belanja online</span>
            <span class="text-xs text-gray-500 text-center">&copy; 2019 - 2024 Sadiskon</span>
        </div>
    </footer>
</template>
<script setup>
const footerMenu = [
    {
        title: 'Jelajahi Sadiskon',
        links: [
            { to: 'https://www.sadiskon.com', label: 'Beranda' },
            { to: 'https://www.sadiskon.com/semua-brand/', label: 'Semua Brand' },
            { to: 'https://www.sadiskon.com/blog/', label: 'Blog' },
            { to: 'https://www.sadiskon.com/l/gratis-ongkir/', label: 'Voucher Gratis Ongkir' },
            { to: 'https://www.sadiskon.com/l/sadis/', label: 'Promo Sadis' }
        ]
    },
    {
        title: 'Promo Unggulan',
        links: [
            { to: 'https://www.sadiskon.com/promo/lazada/', label: 'Voucher Lazada' },
            { to: 'https://www.sadiskon.com/promo/shopee/', label: 'Voucher Shopee' },
            { to: 'https://www.sadiskon.com/promo/zalora/', label: 'Voucher Zalora' },
            { to: 'https://www.sadiskon.com/promo/bpjs/', label: 'Promo BPJS' },
            {to: 'https://www.sadiskon.com/c/produk-digital/token-tagihan-listrik/', label: 'Promo Listrik PLN'}
        ]
    },
    {
        title: 'Terhubung',
        links: [
            { to: 'https://www.sadiskon.com/biolink', label: 'Komunitas Belanja Hemat' },
            { to: 'https://www.sadiskon.com/p/kerja-sama/', label: 'Kerja Sama' },
        ]
    }
]
</script>