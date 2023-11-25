<script>
import { h } from 'vue'

export default {
    setup(props, context) {
        return () =>
            h('div', {}, [
                'hello',
                'hello',
                h(
                    'div',
                    {
                        prop1: 'prop1val',
                    },
                    'custom'
                ),
            ])
    },
}
</script>
