const isLoaded = ref(false) // apakah udah loaded script gpt.js nya
const gptScript = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js'

export default function () {
    return {
        isLoaded,
        gptScript,
    }
}