<script lang="jsx">
import { defineComponent, h } from 'vue'
export default defineComponent({

    render() {
        console.log('🔥🔥🔥 columns this', this)
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
