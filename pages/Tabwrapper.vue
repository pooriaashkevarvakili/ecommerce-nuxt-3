<template>
    <div class="">
        <ul class="flex flex-row space-x-5">
            <li v-for="title in tabTitles" :key="title" @click="selectedTitle=title">
                {{title}}
            </li>
        </ul>
        <slot />
    </div>
</template>

<script>
import { ref, provide } from "vue"
export default {
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])
        provide("selectedTitle", selectedTitle)
        return {
            selectedTitle,
            tabTitles
        }
    }
}
</script>

<style>

</style>