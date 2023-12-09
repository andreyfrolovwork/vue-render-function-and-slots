/*import copy from '../src/utils/copy.js'*/
const copy = require('../src/utils/copy.js')

describe('функция copy', () => {
    it('должна копировать простые свойства', () => {
        const source = { a: 1, b: { c: 2 } }
        const result = copy(source, ['a', 'b.c'])
        expect(result).toEqual(source)
    })

    it('должна копировать свойства с undefined значениями', () => {
        const source = { a: { b: { c: undefined } } }
        const result = copy(source, ['a.b.c'])
        expect(result).toEqual({ a: { b: { c: undefined } } })
    })

    it('должна копировать свойства с null значениями', () => {
        const source = { a: { b: { c: null } } }
        const result = copy(source, ['a.b.c'])
        expect(result).toEqual({ a: { b: { c: null } } })
    })
    it('должна обрабатывать пути с несуществующими свойствами', () => {
        const source = { a: { b: { c: 1 } } }
        const result = copy(source, ['x.y.z'])
        expect(result).toEqual({})
    })

    it('не должна модифицировать оригинальный объект', () => {
        const source = { a: { b: { c: 1 } } }
        copy(source, ['a.b.c'])
        expect(source).toEqual({ a: { b: { c: 1 } } })
    })
    it('должна глубоко копировать массивы', () => {
        const source = { a: { b: { c: [1, 2, 3] } } }
        const result = copy(source, ['a.b.c'])

        source.a.b.c.push(4)

        expect(result).toEqual({ a: { b: { c: [1, 2, 3] } } })
    })

    it('должна глубоко копировать объекты внутри массивов', () => {
        const source = { a: { b: { c: [{ foo: 'bar' }, 2, 3] } } }
        const result = copy(source, ['a.b.c'])
        source.a.b.c.push(4)
        expect(result).toEqual({ a: { b: { c: [{ foo: 'bar' }, 2, 3] } } })
    })

    it('глубокое копирование объектов', () => {
        const source = { foo: 'bar' }
        const result = copy(source, [''])
        expect(result).toEqual({ foo: 'bar' })
    })

    it('глубокое копирование объектов, проверяем отсутствие ссылки', () => {
        const source = { foo: 'bar' }
        const result = copy(source, [''])
        source.baz = 'bax'
        expect(result).toEqual({ foo: 'bar' })
    })
})
