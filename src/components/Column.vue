<script>
import { defineComponent } from 'vue'

export default defineComponent({
    render() {
        return null
    },
    mounted() {
        this.$parent.setColumnData({
            label: this.$attrs.label,
            createCell: this.$slots.default,
        })
    },
})
</script>
