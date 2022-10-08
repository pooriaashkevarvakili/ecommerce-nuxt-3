<template>
    <div class="flex  items-center justify-center w-full h-screen">
        <div class="flex flex-col mt-20">
            <div class="text-center iran-sans"> ثبت نام</div>
            <label class="mt-2 flex flex-col">

                <input type="text"
                    class="py-2 input iran-sans placeholder-gray-400 rounded-lg border border-gray-300 hover:outline-none focus:outline-none"
                    placeholder="ایمیل">
            </label>
            <label class="mt-2 flex flex-col">

                <input
                    class="py-2 iran-sans placeholder-gray-400 input rounded-lg border border-gray-300 hover:outline-none focus:outline-none"
                    type="text" placeholder="پسورد">
            </label>
            <nuxt-link to="/" class="text-center iran-sans mt-4 text-white bg-black  py-2 rounded-xl">ثبت نام
            </nuxt-link>
        </div>

    </div>
</template>
<script setup>

</script>

<style>

</style>