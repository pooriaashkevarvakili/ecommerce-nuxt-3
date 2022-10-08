<template>
    <div>
        <footer class="footer p-10 bg-white text-base-content mt-2">
            <div>
                <img class="2xl:ml-20 xl:ml-20 lg:ml-10 md:ml-10" src="ashion.webp" alt="">
                <div class="iran-sans" dir="rtl">
                    لورم ایپسوم متن ساختگی
                    <div class="iran-sans">
                        با تولید سادگی نامفهوم از صنعت چاپ
                    </div>
                    <div class="iran-sans">
                        و با استفاده از طراحان گرافیک است

                    </div>
                </div>
                <div class="flex">
                    <img src="master.png" alt="">
                    <img class="ml-2" src="visa.webp" alt="">
                    <img class="ml-2" src="discover.webp" alt="">
                    <img src="paypal.webp" class="ml-2" alt="">
                    <img src="circus.webp" class="ml-2" alt="">
                </div>
            </div>
            <div>
                <span class="iran-sans">لینک های فوری</span>
                <nuxt-link to="/" class="iran-sans">خانه</nuxt-link>
                <nuxt-link to="/ecommerce" class="iran-sans"> فروشگاه</nuxt-link>
                <nuxt-link to="/blog" class="iran-sans">بلاگ </nuxt-link>
                <nuxt-link to="/contact" class="iran-sans">تماس با ما</nuxt-link>
                <nuxt-link to="/login" class="iran-sans"> ثبت نام</nuxt-link>
            </div>
            <div>
                <span class="iran-sans">خبرها</span>
                <div class="flex">
                    <input type="text" placeholder="Type here"
                        class="input input-bordered input-error w-full max-w-xs" />
                    <button class="bg-red-400 px-5 py-3 rounded-xl ml-2 text-white">subscribe</button>
                </div>

            </div>

        </footer>
        <div class="text-center iran-sans">
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