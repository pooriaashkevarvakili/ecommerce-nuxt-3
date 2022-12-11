<template>
    <div>
        <div class="flex items-center justify-center flex-col mt-24" v-if="product.length == 0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <span class="text-2xl"> cart Empty </span>
            <nuxt-link class="bg-black px-10 py-3 rounded-xl mt-5 text-white" to="/">خانه</nuxt-link>
        </div>
        <div v-else class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 gird-cols-1 gap-6 mt-4">
            <div v-for="item in product" :key="item.id" class="card w-96 bg-base-100 shadow-xl">
                <figure><img :src="item.img" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{{ item.name }}</h2>
                    <div class="flex justify-between">
                        <p>{{ item.price }}</p>
                        <p>{{ totalAmont }}</p>

                    </div>
                    <div>
                        <button @click="cartStore.increment(item.id)" class="btn btn-primary">+</button>
                        <span class="ml-3">{{ item.quantity }}</span>
                        <button @click="cartStore.decrement(item.id)" class="btn ml-3 btn-primary">-</button>
                    </div>

                    <div class="card-actions flex justify-between">
                        <button @click="cartStore.clear" class="btn btn-primary">clear</button>
                        <button @click="cartStore.remove(item.id)" class="btn btn-primary">remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script setup>
import { usecartStore } from "../stores/cart"
const cartStore = usecartStore()
const product = computed(() => cartStore.allproducts)
const totalAmont = computed(() => cartStore.totalAmont)
</script>