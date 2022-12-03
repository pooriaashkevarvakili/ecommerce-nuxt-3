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
                        <div class="ml-2 iran-sans">{{ item.name }}</div>
                        <div class="ml-2 iran-sans">{{ item.price }}</div>
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
const product = ref([
    {
        id: 1,
        img: 'asset1.webp',
        name: 'کیف سطلی',
        price: '59/000'
    },
    {
        id: 2,
        img: 'asset4.webp',
        name: 'تی شرت کتون',
        price: '59/000'

    },
    {
        id: 3,
        img: 'asset7.webp',
        name: 'دامن پاپیونی',
        price: '59/000'

    },
    {
        id: 4,
        img: 'asset2.webp',
        name: 'گوشواره آویز',
        price: '59/000'
    },
    {
        id: 5,
        img: 'asset5.webp',
        name: 'جیب های زیپ دار',
        price: '59/000'
    },
    {
        id: 6,
        img: 'asset8.webp',
        name: 'گوشواره فلزی',
        price: '59/000'
    },
    {
        id: 7,
        img: 'asset3.webp',
        name: 'تی شرت کتون',
        price: '59/000'
    },
    {
        id: 8,
        img: 'asset6.webp',
        name: 'کیف چرمی گرد',
        price: '59/000'
    },
    {
        id: 9,
        img: 'asset9.webp',
        name: 'کیف کراس بادی فلپ',
        price: '59/000'

    }
])
</script>
<style>

</style>