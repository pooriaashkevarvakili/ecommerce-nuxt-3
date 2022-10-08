<template>
    <div class="">
        <ul class="flex flex-row space-x-5">
            <li class="iran-sans" v-for="title in tabTitles" :key="title" @click="selectedTitle=title">
                {{title}}
            </li>
        </ul>
        <slot />
    </div>
</template>
<script setup>
import { ref, provide, useSlots } from "vue"
const slots = useSlots()
const tabTitles = ref(slots.default().map((tab) => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])
provide("selectedTitle", selectedTitle)
</script>
<style>

</style>