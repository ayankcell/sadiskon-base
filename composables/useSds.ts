//@ts-ignore
const placeHolder = (url = '', { showSVG = false, width = 10, height = 10 } = {}) => {
    /** kalau tidak ada url atau tampilkan SVG */
    if (url == '' || showSVG) {
        const fill = '#cccccc'
        const svg = `<svg fill="${fill}" width="${width}" height="${height}" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><rect width="${width}" height="${height}" rx="${width / 25}" ry="${width / 25}"/>
    <circle fill="#ffffff33" r="${height / 5}" cy="${height / 2}">
    <animate attributeName="r" values="0;10;${height / 2};10;0" dur="2s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" attributeType="XML" type="translate" from="-${width}" to="${width * 2}" dur="2s" repeatCount="indefinite" />
    </circle>
    </svg>`;

        return 'data:image/svg+xml;base64,' + btoa(svg)
    } else {
        /** gambar kecil */
        const img = useImage()
        return img(url, { width: width, height: height, lb: `${width},${height},#ffffff` }, { provider: 'photon' })
    }
}

const couponSVG = (tailClass = '', fill = 'text-gray-300') => {
    const svg = `<svg width="100" height="100" class="fill-current ${fill} ${tailClass}" viewBox="0 0 3 3" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.875.75a.125.125 0 0 1-.25 0H.375V1a.624.624 0 0 1 0 1v.25h1.25a.125.125 0 0 1 .25 0h.75V2a.624.624 0 0 1 0-1V.75h-.75Zm1 1.5a.25.25 0 0 1-.25.25H.375a.25.25 0 0 1-.25-.25v-.389l.063-.036A.375.375 0 0 0 .375 1.5a.375.375 0 0 0-.188-.325l-.062-.036V.75A.25.25 0 0 1 .375.5h2.25a.25.25 0 0 1 .25.25v.389l-.063.036a.375.375 0 0 0-.187.325c0 .136.072.258.188.325l.063.036v.389ZM1.75 2a.125.125 0 1 1 0-.25.125.125 0 0 1 0 .25Zm0-.375a.125.125 0 1 1 0-.25.125.125 0 0 1 0 .25Zm0-.375a.125.125 0 1 1 0-.25.125.125 0 0 1 0 .25Z"/></svg>`
    return svg
}

/** get innerHTML from html string */
const stripTags = (str: String) => {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
}

/** generate canonical */
const canonicalGen = (route: Object) => {
    //@ts-ignore
    return route.path.endsWith("/") ? route.path : route.path + "/";
}

/** menu Footer  */
const { menuIsOpen } = useMenuSlide()
const menuFooter = [
    { label: 'Home', icon: 'i-heroicons-home', to: '/' },
    { label: '11.11', icon: 'i-heroicons-fire', to: '/l/11-11/', animation: 'animate-bounce' },
    { label: 'Toko', icon: 'i-heroicons-building-storefront', to: '/semua-brand/' },
    {label: 'Artikel', icon: 'i-heroicons-newspaper', to:'/blog/'},
    { label: 'Cari', icon: 'i-heroicons-magnifying-glass', to: '/cari/' },
    { label: 'Menu', icon: 'i-heroicons-list-bullet', action: () => { menuIsOpen.value = !menuIsOpen.value } },
]

export default function () {
    return {
        placeHolder,
        stripTags,
        couponSVG,
        canonicalGen,
        menuFooter
    }
}