<template>
    <USlideover v-model="menuIsOpen">
        <UCard class="flex flex-col flex-1"
            :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="flex justify-between">
                    <span>Menu</span>
                    <div class="" role="button" @click.exact="menuIsOpen = !menuIsOpen" aria-label="tutup menu">
                        <UIcon name="i-heroicons-x-mark" />
                    </div>
                </div>
            </template>
            <UVerticalNavigation :links="links" :ui="{
                wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2',
                base: 'group block border-s -ms-px lg:leading-6 before:hidden',
                padding: 'p-0 ps-4',
                rounded: '',
                size: 'text-base',
                font: '',
                ring: '',
                active: 'text-primary-500 dark:text-primary-400 border-current font-semibold',
                inactive: 'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
            }" />
            <template #footer>
                <div class="flex justify-center items-center space-x-3">
                   
                    <a href="https://twitter.com/sadiskon" rel="nofollow" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-gray-700"
                            viewBox="0 0 32 32" xml:space="preserve">
                            <path
                                d="M16.51.704C7.78.704.704 7.781.704 16.51S7.78 32.316 16.51 32.316s15.806-7.077 15.806-15.806S25.239.704 16.509.704zm3.875 24.765-5.261-7.035-6.513 7.035H6.938l7.436-8.035-7.39-9.883h5.696l4.846 6.479 5.997-6.479h1.673l-6.922 7.479 7.806 10.438h-5.695z" />
                        </svg>
                        
                    </a>
                    <a href="https://t.me/sadiskoncom" rel="nofollow" target="_blank">
                        <svg class="w-6 h-6 fill-gray-700" viewBox="0 0 1.6 1.6" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M.8 0a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Zm.355.48c-.03.001-.077.017-.302.109A38.833 38.833 0 0 0 .38.79C.342.805.322.82.32.834.316.862.357.87.408.887a.556.556 0 0 0 .126.029.151.151 0 0 0 .088-.032C.843.737.957.662.964.661.969.66.976.658.981.663c.005.004.004.012.004.014C.981.694.774.88.762.892L.756.898C.712.941.668.97.744 1.02l.181.12c.046.029.081.064.128.06.022-.002.044-.022.055-.082.027-.142.08-.449.092-.575a.139.139 0 0 0-.001-.031.034.034 0 0 0-.012-.022.053.053 0 0 0-.031-.009Z" />
                        </svg>
                       
                    </a>
                    <a href="https://www.youtube.com/@sadiskon" rel="nofollow" target="_blank">
                        <svg class="w-6 h-6 fill-gray-700" viewBox="0 0 1.92 1.92" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.84.777a.68.68 0 0 0-.073-.33.234.234 0 0 0-.138-.08A6.269 6.269 0 0 0 .96.342a6.276 6.276 0 0 0-.667.024.23.23 0 0 0-.117.059C.104.491.096.605.088.701a3.863 3.863 0 0 0 0 .518.764.764 0 0 0 .024.16.251.251 0 0 0 .057.109.229.229 0 0 0 .119.062 3.614 3.614 0 0 0 .52.026c.28.004.526 0 .816-.022a.23.23 0 0 0 .122-.062.199.199 0 0 0 .049-.08.846.846 0 0 0 .042-.272c.003-.045.003-.315.003-.363Zm-1.061.411V.693l.474.249c-.133.074-.308.157-.474.246Z" />
                        </svg>
                       
                    </a>
                    <a href="https://www.tiktok.com/@sadiskon" rel="nofollow" target="_blank">
                        <svg class="w-6 h-6 fill-gray-700" viewBox="0 0 1.92 1.92" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.68.56v.16A.08.08 0 0 1 1.6.8a.64.64 0 0 1-.32-.086v.526A.52.52 0 1 1 .522.778.08.08 0 0 1 .64.85v.202a.074.074 0 0 1-.022.05.199.199 0 0 0 .16.338.209.209 0 0 0 .182-.212V.24a.08.08 0 0 1 .08-.08h.169a.08.08 0 0 1 .08.066A.32.32 0 0 0 1.6.48a.08.08 0 0 1 .08.08Z" />
                    </svg>
                </a>
            </div>
        </template>
    </UCard>
</USlideover></template>
<script setup>
const { menuIsOpen, menuLinks } = useMenuSlide()
const links = menuLinks

</script>