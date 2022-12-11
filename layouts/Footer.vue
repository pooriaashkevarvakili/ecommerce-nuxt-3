<template>
    <div>
        <footer class="footer p-10 bg-white text-base-content mt-2">
            <div>
                <img class="2xl:ml-20 2xl:block xl:block lg:block  xl:ml-20 lg:ml-10 md:hidden 4xl:hidden 5xl:hidden xs:hidden sm:hidden"
                    src="@/assets/img/ashion.webp" alt="">
                <div class="md:hidden sm:hidden 4xl:hidden 5xl:hidden  xs:hidden" dir="rtl">
                    لورم ایپسوم متن ساختگی
                    <div>
                        با تولید سادگی نامفهوم از صنعت چاپ
                    </div>
                    <div>
                        و با استفاده از طراحان گرافیک است

                    </div>
                </div>

            </div>
            <div class="md:ml-10">
                <span>لینک های فوری</span>
                <nuxt-link to="/">خانه</nuxt-link>
                <nuxt-link to="/ecommerce"> فروشگاه</nuxt-link>
                <nuxt-link to="/blog">بلاگ </nuxt-link>
                <nuxt-link to="/contact">تماس با ما</nuxt-link>

            </div>
            <div>

                <div
                    class="flex  md:-mr-10 md:flex 2xl:flex xl:flex  lg:flex sm:hidden 4xl:hidden 5xl:hidden xs:hidden">
                    <input type="text" placeholder="Type here"
                        class="input input-bordered input-error w-full max-w-xs" />
                    <button class="bg-red-400 px-5 py-3 rounded-xl ml-2 text-white">subscribe</button>
                </div>
                <div class="flex">
                    <img src="@/assets/img/master.png" alt="">
                    <img class="ml-2" src="@/assets/img/visa.webp" alt="">
                    <img class="ml-2" src="@/assets/img/discover.webp" alt="">
                    <img src="@/assets/img/paypal.webp" class="ml-2" alt="">
                    <img src="@/assets/img/circus.webp" class="ml-2" alt="">
                </div>
                <img class="2xl:hidden xl:hidden lg:hidden md:block 4xl:block 5xl:block xs:block sm:block"
                    src="@/assets/img/ashion.webp" alt="">
            </div>

        </footer>
        <div class="text-center">
            Copyright © 2022
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>