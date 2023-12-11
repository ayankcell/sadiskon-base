import { ref } from 'vue'

const menuIsOpen = ref(false)
const menuLinks = [
    { label: 'Home', to: 'https://www.sadiskon.com/' },
    { label: 'Semua Toko', to: 'https://www.sadiskon.com/semua-brand/' },
    { label: 'Kategori Promo', to: 'https://www.sadiskon.com/semua-kategori/' },
    { label: 'Baca Artikel', to: 'https://www.sadiskon.com/blog/' },
    { label: 'Gabung Komunitas', to: 'https://www.sadiskon.com/biolink/' },
    { label: 'Tentang Sadiskon', to: 'https://www.sadiskon.com/p/tentang-sadiskon/' },
    { label: 'Kebijakan Privasi', to: 'https://www.sadiskon.com/p/kebijakan-privasi/' },
    { label: 'Kerja Sama', to: 'https://www.sadiskon.com/p/kerja-sama/'}
]

export default () => {
    return {
        menuIsOpen,
        menuLinks
    }
};