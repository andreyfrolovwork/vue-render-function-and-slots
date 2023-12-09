export default function booleanToIntTest(value) {
    if (typeof value === 'boolean') {
        return value ? 1 : 0
    }

    if (Array.isArray(value)) {
        return value.map(booleanToIntTest)
    }

    if (typeof value === 'object' && value !== null) {
        const result = {}
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                result[key] = booleanToIntTest(value[key])
            }
        }
        return result
    }

    return value
}
