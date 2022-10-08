<template>
    <div>
        <div v-show="title==selectedTitle">
            <slot />
        </div>
    </div>
</template>
<script setup>
import { inject } from 'vue'
defineProps({
    title: String
})
const selectedTitle = inject("selectedTitle")
</script>
<style>

</style>