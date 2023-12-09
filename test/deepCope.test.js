const { deepCopy } = require('../src/utils/copy.js'); // Подставьте свой путь к файлу с функцией deepCopy

describe('deepCopy', () => {
    it('should create a deep copy of an object without reference', () => {
        const originalObject = {
            name: 'John',
            age: 25,
            address: {
                city: 'New York',
                country: 'USA'
            },
            hobbies: ['reading', 'traveling']
        };

        const copiedObject = deepCopy(originalObject);

        expect(copiedObject).toEqual(originalObject);
        expect(copiedObject).not.toBe(originalObject); // Проверяем, что объекты не ссылаются друг на друга
        expect(copiedObject.address).not.toBe(originalObject.address); // Проверяем, что вложенные объекты не ссылаются друг на друга
        expect(copiedObject.hobbies).not.toBe(originalObject.hobbies); // Проверяем, что вложенные массивы не ссылаются друг на друга
    });

    it('should create a deep copy of an array without reference', () => {
        const originalArray = [1, 2, { a: 3 }];

        const copiedArray = deepCopy(originalArray);

        expect(copiedArray).toEqual(originalArray);
        expect(copiedArray).not.toBe(originalArray); // Проверяем, что массивы не ссылаются друг на друга
        expect(copiedArray[2]).not.toBe(originalArray[2]); // Проверяем, что вложенные объекты не ссылаются друг на друга
    });

    it('should handle circular references correctly', () => {
        const circularObject = { prop: 'circular' };
        circularObject.circularRef = circularObject;

        const copiedObject = deepCopy(circularObject);

        expect(copiedObject).toEqual(circularObject);
        expect(copiedObject).not.toBe(circularObject); // Проверяем, что объекты не ссылаются друг на друга
        expect(copiedObject.circularRef).toBe(copiedObject); // Проверяем, что круговые ссылки обрабатываются правильно
    });

    // Добавьте другие тест-кейсы по необходимости
});
