import booleanToIntTest from '../src/utils/booleanToInt.js'


describe('booleanToInt', () => {
    it('должна корректно обрабатывать преобразование true в 1', () => {
        expect(booleanToIntTest(true)).toEqual(1)
    })

    it('должна корректно обрабатывать преобразование false в 0', () => {
        expect(booleanToIntTest(false)).toEqual(0)
    })

    it('должна сохранять числовые значения без изменений', () => {
        expect(booleanToIntTest(42)).toEqual(42)
    })

    it('должна сохранять строки без изменений', () => {
        expect(booleanToIntTest('qwerty')).toEqual('qwerty')
    })

    it('должна корректно обрабатывать преобразование вложенных значений в массиве', () => {
        const input = [true, false, [true, false]]
        const expected = [1, 0, [1, 0]]
        expect(booleanToIntTest(input)).toEqual(expected)
    })

    it('должна корректно обрабатывать преобразование вложенных значений в объекте', () => {
        const input = { a: true, b: false, c: { d: true, e: false } }
        const expected = { a: 1, b: 0, c: { d: 1, e: 0 } }
        expect(booleanToIntTest(input)).toEqual(expected)
    })

    it('должна сохранять null и undefined без изменений', () => {
        expect(booleanToIntTest(null)).toEqual(null)
        expect(booleanToIntTest(undefined)).toEqual(undefined)
    })

    it('должна корректно обрабатывать пустые массивы и объекты', () => {
        expect(booleanToIntTest([])).toEqual([])
        expect(booleanToIntTest({})).toEqual({})
    })

    it('должна сохранять другие типы данных без изменений', () => {
        const input = { a: 'string', b: [1, 2, 3], c: { d: null } }
        expect(booleanToIntTest(input)).toEqual(input)
    })

    it('должна корректно обрабатывать вложенные массивы и объекты', () => {
        const input = { a: [true, false], b: { c: true, d: [false, true] } }
        const expected = { a: [1, 0], b: { c: 1, d: [0, 1] } }
        expect(booleanToIntTest(input)).toEqual(expected)
    })

    it('должна корректно обрабатывать вложенные массивы и объекты', () => {
        const input = { a: [true, false, { foo: false, arr: [false, {}] }] }
        const expected = { a: [1, 0, { foo: 0, arr: [0,{}] }] }
        expect(booleanToIntTest(input)).toEqual(expected)
    })
})
