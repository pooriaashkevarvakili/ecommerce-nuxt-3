<template>
    <div>
        <div class="flex justify-between   2xl:px-32 xl:px-32 lg:px-10 px-8   mt-10">
            <div>
                <Tabwrapper class="cursor-pointer">
                    <Tab class="iran-sans" title="همه">
                        <div class="flex flex-wrap">
                            <All />
                        </div>
                    </Tab>
                    <Tab class="iran-sans" title="زن">
                        <Women />
                    </Tab>
                    <Tab class="iran-sans" title="مرد">
                        <Woman />
                    </Tab>
                    <Tab class="iran-sans" title="بچه ها">
                        <Children />
                    </Tab>
                    <Tab class="iran-sans" title="تجهیزات جانبی ">
                        <Kid />
                    </Tab>
                    <Tab class="iran-sans" title=" لوازم آرایشی">
                        <Accessories />
                    </Tab>
                </Tabwrapper>
            </div>
            <div class="hidden iran-sans  2xl:block xl:block lg:block md:hidden">
                محصولات
            </div>
        </div>
        <Product />
    </div>
</template>
<script setup>
import All from "./Tab/All.vue"
import Tab from "./Tab.vue"
import Tabwrapper from "./Tabwrapper.vue"
import Women from "./Tab/Women.vue"
import Woman from "./Tab/Woman.vue"
import Children from "./Tab/Children.vue"
import Kid from "./Tab/Kid.vue"
import Accessories from "./Tab/Accessories.vue"
import Product from "./Product.vue"
</script>

<style>

</style>