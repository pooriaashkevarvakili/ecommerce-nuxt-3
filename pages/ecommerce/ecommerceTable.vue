<template>
    <div class="grid mt-6 px-10 grid-cols-5">
        <div class="iran-sans">محصول</div>
        <div class="iran-sans">قیمت</div>
        <div class="iran-sans">تعداد</div>
        <div class="iran-sans">جمع کل</div>

    </div>
    <hr />
    <div class="grid mt-2 px-10 2x:grid-cols-5 xl:grid-cols-5 grid-cols-1 lg:grid-cols-5 md:grid-cols-5">
        <div class="flex flex-wrap">
            <div class="flex  flex-wrap">
                <img class="rounded-lg" src="asset1.webp" alt="">
                <div>
                    <div class="ml-2 mt-2 iran-sans">کیف سطلی</div>
                </div>
            </div>
        </div>
        <div class="iran-sans">150/000</div>
        <div>

            <button class="btn btn-sm bg-red-400 border-red-400" @click="counter++">
                +
            </button>
            {{ counter }}
            <button class="btn btn-sm bg-red-400 border-red-400" @click="counter--">
                -
            </button>
        </div>
        <div class="iran-sans">2000</div>
        <button class="btn btn-sm w-10 rounded-full text-white bg-gray-300">X</button>
    </div>
    <div class="grid mt-2 px-10 2x:grid-cols-5 xl:grid-cols-5 grid-cols-1 lg:grid-cols-5 md:grid-cols-5">
        <div class="flex flex-wrap">
            <div class="flex  flex-wrap">
                <img class="rounded-lg" src="asset5.webp" alt="">
                <div>
                    <div class="ml-2 mt-2 iran-sans">کیف زیپ دار</div>
                </div>
            </div>
        </div>
        <div class="iran-sans">150/000</div>
        <div>

            <button class="btn btn-sm bg-red-400 border-red-400" @click="counter++">
                +
            </button>
            {{ counter }}
            <button class="btn btn-sm bg-red-400 border-red-400" @click="counter--">
                -
            </button>
        </div>
        <div class="iran-sans">2000</div>
        <button class="btn btn-sm w-10 rounded-full text-white bg-gray-300">X</button>
    </div>
    <div class="grid mt-2 px-10 2x:grid-cols-5 xl:grid-cols-5 grid-cols-1 lg:grid-cols-5 md:grid-cols-5">
        <div class="flex flex-wrap">
            <div class="flex  flex-wrap">
                <img class="rounded-lg" src="asset4.webp" alt="">
                <div>
                    <div class="ml-2 mt-2 iran-sans"> جین مشکی</div>
                </div>
            </div>
        </div>
        <div class="iran-sans">150/000</div>
        <div>

            <button class="btn btn-sm bg-red-400 border-red-400" @click="counter++">
                +
            </button>
            {{ counter }}
            <button class="btn btn-sm bg-red-400 border-red-400" @click="counter--">
                -
            </button>
        </div>
        <div class="iran-sans">2000</div>
        <button class="btn btn-sm w-10 rounded-full text-white bg-gray-300">X</button>
    </div>
    <div class="grid mt-2 px-10 2x:grid-cols-5 xl:grid-cols-5 grid-cols-1 lg:grid-cols-5 md:grid-cols-5">
        <div class="flex flex-wrap">
            <div class="flex  flex-wrap">
                <img class="rounded-lg" src="asset3.webp" alt="">
                <div>
                    <div class="ml-2 mt-2 iran-sans"> تی شرت کتون</div>
                </div>
            </div>
        </div>
        <div class="iran-sans">150/000</div>
        <div>

            <button class="btn btn-sm bg-red-400 border-red-400" @click="counter++">
                +
            </button>
            {{ counter }}
            <button class="btn btn-sm bg-red-400 border-red-400" @click="counter--">
                -
            </button>
        </div>
        <div class="iran-sans">2000</div>
        <button class="btn btn-sm w-10 rounded-full text-white bg-gray-300">X</button>
    </div>
</template>

<script setup>
const counter = useState('counter', () => Math.round(Math.random()))

</script>

<style>

</style>