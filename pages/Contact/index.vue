<template>
    <div class="flex flex-wrap text-center flex-col">
        <div class="mt-2">
            تماس با ما
        </div>
        <div class="flex justify-center mt-2">

            <div class="mr-1">آدرس</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-red-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        </div>
        <div class="mt-2">
            تهران،تهران پارس
        </div>
        <div class="flex justify-center mt-2">
            <div class="mr-1">تلفن</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-red-400">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        </div>
        <div class="mt-2">
            09376720694
        </div>
        <div class="flex justify-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-red-400">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>


            <div class="mr-1">پشتیبانی</div>
        </div>
        <div class="mt-2">
            pooriavakili09@gmail.com
        </div>
        <div class="flex mt-2 justify-center">
            <input type="text" placeholder="نام"
                class="input xs:w-80 border outline-none focus:outline-none 5xl:w-80 border-gray-300 w-96" />
        </div>
        <div class="flex mt-2 justify-center">
            <input placeholder="ایمیل" type="text"
                class="input w-96 border outline-none xs:w-80 5xl:w-80  focus:outline-none border-gray-300" />
        </div>
        <div class="flex mt-2 justify-center">
            <input type="text" placeholder="وب سایت"
                class="input w-96 border 5xl:w-80 xs:w-80  outline-none focus:outline-none border-gray-300" />
        </div>
        <div class="flex mt-2 justify-center">
            <textarea class="textarea 5xl:w-80 xs:w-80 w-96 border outline-none focus:outline-none border-gray-300"
                placeholder="پیام"></textarea>
        </div>
        <div class="mt-4">
            <button class="btn w-96 5xl:w-80 xs:w-80  bg-red-400 text-white border-red-400 rounded-full">پیام
                بفرستید</button>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'contact'
})
</script>

<style>

</style>