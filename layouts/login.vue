<template>
    <div class="bg-pink-300">
        <div class="flex items-center justify-center w-full h-screen">
            <div class="
            card
            2xl:w-96
            xl:w-96
            lg:w-96
            md:w-96
            2xl:mr-0
            xl:mr-0
            lg:mr-0
            bg-base-100
            shadow-xl
          ">
                <figure>
                    <img src="@/assets/img/bg.jpg.webp" class="w-32 h-32 rounded-full mt-5" />
                </figure>
                <div class="card-body">
                    <div class="card-title flex items-center justify-center">
                        خوش اومدید
                    </div>
                    <div class="card-title flex items-center justify-center">ثبت نام</div>
                    <div class="card-title">
                        <input style="direction: rtl" class="input border mt-3 w-full border-gray-300"
                            placeholder="ایمیل" />
                    </div>
                    <div class="card-title">
                        <input style="direction: rtl" class="input w-full border border-gray-300 mt-3"
                            placeholder="پسورد" type="password" />
                    </div>
                    <div class="card-actions">
                        <nuxt-link to="/" class="btn mt-5 w-full btn-primary">ثبت نام</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
useHead({
    title: "login",
});
</script>
  
<style>

</style>