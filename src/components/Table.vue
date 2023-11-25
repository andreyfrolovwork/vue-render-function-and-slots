<script>
import { h } from 'vue'

export default {
    render(...args) {
        const items = this.$attrs.items
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
