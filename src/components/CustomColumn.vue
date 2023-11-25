<script lang='jsx'>
import { defineComponent } from 'vue'

export default defineComponent({
    render() {
        return <div> 123</div>
    },

    // props: {
    //     label: {
    //         type: String,
    //         required: true,
    //     },
    // },
    //
    // mounted() {
    //     console.log('🔥🔥🔥',this)
    //     // Передаем в компонент CustomTable необходимые данные
    //     this.$parent.setColumnData({
    //         label: this.label,
    //         createCell: this.$slots.default,
    //     });
    // },
})
</script>

<template>

</template>

<style scoped></style>
