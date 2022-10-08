<template>
    <div>
        <div
            class="mt-3 2xl:px-32 xl:px-32 lg:px-10 md:px-10 px-2 grid 2xl:grid-cols-3 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3  ">
            <div v-for="products in productName" :key="products.id">
                {{products.name}}
            </div>
        </div>
        <div
            class="mt-3 2xl:px-32 space-y-2 xl:px-32 lg:px-10 md:px-10 px-2 grid 2xl:grid-cols-3 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 ">
            <div v-for="item in product" :key="item.id">
                <div class="flex items-center flex-wrap">
                    <img class="rounded-lg" :src="item.img" alt="">
                    <div>
                        <div class="ml-2">{{item.name}}</div>
                        <div class="ml-2">{{item.price}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const productName = ref([
    {
        id: 1,
        name: 'HOT TREND'
    },
    {
        id: 2,
        name: '  Best Saller'
    },
    {
        id: 3,
        name: 'FEATURE'
    }
])
const product = ref([
    {
        id: 1,
        img: 'asset1.webp',
        name: 'Chain bucket bag',
        price: '59/000'
    },
    {
        id: 2,
        img: 'asset4.webp',
        name: 'Cotton T-Shirt',
        price: '59/000'

    },
    {
        id: 3,
        img: 'asset7.webp',
        name: 'Bow wrap skirt',
        price: '59/000'

    },
    {
        id: 4,
        img: 'asset2.webp',
        name: 'Pendant earrings',
        price: '59/000'
    },
    {
        id: 5,
        img: 'asset5.webp',
        name: 'Zip-pockets',
        price: '59/000'
    },
    {
        id: 6,
        img: 'asset8.webp',
        name: 'Metallic earrings',
        price: '59/000'
    },
    {
        id: 7,
        img: 'asset3.webp',
        name: 'otton T-Shirt',
        price: '59/000'
    },
    {
        id: 8,
        img: 'asset6.webp',
        name: 'Round leather bag',
        price: '59/000'
    },
    {
        id: 9,
        img: 'asset9.webp',
        name: 'Flap cross-body bag',
        price: '59/000'

    }
])
</script>
<style>

</style>