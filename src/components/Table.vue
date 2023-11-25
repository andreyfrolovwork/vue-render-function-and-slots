<script>
import { h } from 'vue'

export default {
    render(...args) {
        console.log('table this', this)
        const items = this.$attrs.items
        console.log('items', items)
        console.log('table args', args)
        return h('div', {}, [
            this.$slots.default(),
            h('table', [
                h(
                    'thead',
                    h('tr', [
                        ...this.columnsData.map(
                            (c) =>
                                h(
                                    'th',
                                    `${c.label}`
                                )
                        ),
                    ])
                ),
                ...this.$attrs.items.map(
                    (i) =>
                        h('tr', [
                            ...this.columnsData.map(
                                (c) =>
                                    h(
                                        'td',
                                        {
                                            key: c.label,
                                        },
                                        c.createCell(
                                            i
                                        )
                                    )
                            ),
                        ])
                ),
            ]),
        ])
    },
    data() {
        return {
            columnsData: [],
        }
    },
    methods: {
        setColumnData(columnData) {
            this.columnsData.push(columnData)
        },
    },
}
</script>
