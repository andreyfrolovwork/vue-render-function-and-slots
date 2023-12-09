import { deepCopy } from '../src/utils/copy.js'
describe('deepCopy', () => {
    it('должна создавать глубокую копию объекта без ссылок', () => {
        const originalObject = {
            name: 'Андрей Фролов',
            age: 29,
            bio: 'Frontend разработчик',
            experience: 'Более 3 лет',
        }
        const copiedObject = deepCopy(originalObject)
        expect(copiedObject).toEqual(originalObject)
        expect(copiedObject).not.toBe(originalObject)
    })

    it('должна создавать глубокую копию массива без ссылок', () => {
        const originalArray = [1, 2, { a: 3 }]

        const copiedArray = deepCopy(originalArray)

        expect(copiedArray).toEqual(originalArray)
        expect(copiedArray).not.toBe(originalArray)
        expect(copiedArray[2]).not.toBe(originalArray[2])
    })

    it('должна создавать глубокую копию массива без ссылок', () => {
        const originalArray = [1, { foo: 'bar' }, [1, 2, [1, 2, { f: 'v' }]]]

        const copiedArray = deepCopy(originalArray)

        expect(copiedArray).toEqual(originalArray)
        expect(copiedArray).not.toBe(originalArray)
    })

    it('должна корректно обрабатывать круговые ссылки', () => {
        const circularObject = { prop: 'круговая ссылка' }
        circularObject.circularRef = circularObject

        const copiedObject = deepCopy(circularObject)

        expect(copiedObject).toEqual(circularObject)
        expect(copiedObject).not.toBe(circularObject)
        expect(copiedObject.circularRef).toBe(copiedObject)
    })


})
