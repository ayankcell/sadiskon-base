function slugToName(slug:string) {
    const slugPart = slug.split('-')
    const slugPartProcess = slugPart.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1)
    })

    return slugPartProcess.join(' ')
}

export default function () {
    return {
        slugToName
    }
}