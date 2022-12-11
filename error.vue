<template>
  <div class="
      flex
      2xl:mr-0
      xl:mr-0
      lg:mr-0
      flex-col
      mt-20
      items-center
      justify-center
    ">
    <img class="2xl:mr-2 xl:mr-2 lg:mr-2 md:mr-10" src="@/assets/img/error.png" alt="" />
    <div class="2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 ml-0">
      {{ error.message }}
    </div>
    <div class="mt-3 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 ml-0">
      این صفحه موجود نمی باشد
    </div>
    <nuxt-link class="
        btn
        text-xl
        btn-primary
        2xl:ml-10
        xl:ml-10
        lg:ml-10
        md:ml-0
        ml-0
        w-52
        mt-5
      " to="/">
      خانه
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>

<style>

</style>