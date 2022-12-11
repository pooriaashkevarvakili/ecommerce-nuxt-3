<template>
    <div>
        <div
            class="mt-3 md:ml-36 sm:ml-72 4xl:ml-60 5xl:ml-44 xs:ml-40 2xl:px-32 xl:px-32 lg:px-10 md:px-10 px-2 grid 2xl:grid-cols-3 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3  ">
            <div v-for="products in productName" :key="products.id">
                {{ products.name }}
            </div>
        </div>
        <div
            class="mt-3 md:ml-28 sm:ml-60 4xl:ml-56 5xl:ml-40 xs:ml-28 2xl:px-32 space-y-2 xl:px-32 lg:px-10 md:px-10 px-2 grid 2xl:grid-cols-3 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 ">
            <div v-for="item in product" :key="item.id">
                <div class="flex items-center flex-wrap">
                    <img class="rounded-lg" :src="item.img" alt="">
                    <div>
                        <div class="ml-2">{{ item.name }}</div>
                        <div class="ml-2">{{ item.price }}</div>
                        <button @click="cartStore.addToCart(item)" class="btn ml-2 btn-success">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 text-white h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useProductStore } from "../stores/product"
import { usecartStore } from "../stores/cart";
const productStore = useProductStore()
const cartStore = usecartStore()
const product = computed(() => productStore.product)
const productName = ref([
    {
        id: 1,
        name: 'روند داغ'
    },
    {
        id: 2,
        name: 'بهترین فروشنده'
    },
    {
        id: 3,
        name: 'آینده'
    }
])

</script>
<style>

</style>