<template>
    <div class="fifa-list-container">
        <span class="fifa-list-container__header">
            Task {{ taskNumber }} - {{ headerLabel }}
        </span>
    </div>
</template>
<script>

export default {
    data() {
        return {
            headerLabel: 'Fifa list',
            taskNumber: 2,
        };
    },

    components: {

    }
}
</script>
<style lang="scss" scoped>
.fifa-list-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 50px;

    &__header {
        font-size: 20px;
        margin-bottom: 25px;
    }
}
</style>