<template>
    <v-btn :color="type">
        <slot/>
    </v-btn>
</template>
<script>
export const TYPES = {
    INFO: 'info',
}
export default {
    props: {
        type: {
            type: String,
            default: TYPES.INFO,
        }
    }
}
</script>