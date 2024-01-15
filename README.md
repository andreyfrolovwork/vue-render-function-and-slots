# Пишем свою табличку с помощью рендер функций vue
Передача компонента в default slot и кастомный рендер ячейки таблицы. 
Получается что мы из компонента Table получаем доступ к слоту компонента Column. 
Таким образом мы можем реализовать сложную логику отображения минуя большое количество v-if директив.

```vue
<template>
    <div>
        <Table :items="items">
            <Column label="Имя">
                <template #default="scope">
                    <div>
                        {{ scope.name }}
                    </div>
                </template>
            </Column>
            <Column label="Фамилия">
                <template #default="scope">
                    <b>
                        {{ scope.surname }}
                    </b>
                </template>
            </Column>
        </Table>
    </div>
</template>
```
![chrome_i6DwmpSYlg](https://github.com/iobox420/vue-render-function-and-slots/assets/67315235/d82b345d-3816-48ea-a59a-339f7c977f04)

При запуске тестов не забываем добавить флаг  **--experimental-vm-modules**
```json
{
  "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
}
```


# Написать функцию, которая будет принимать объект и копировать из него только те свойства, которые прописаны в условиях. 
Изменение этих ключей в новом объекте не должны менять значения в старом. Пример вызова функции copy(obj, ['key1.key2.key3', 'key2.key1']).
Второй аргумент функции - это массив путей, по которым нужно выполнять копирование. Этот аргумент может отсутствовать в объекте, например:
```
a = {
b: null
}
```

a.b.c

Пример
const a = { b: { c: 3, d: [3, 4] }, a: 12 }
const b = copy(a, ['a.a', 'b.c', 'b.d.0', 'b.c.e'])
b = { b: { c: 3, d: [3] } }




# Реализовать функцию, которая принимает любой тип данных, и преобразовывать тип boolean (при его наличии) в числовое значение.
В качестве параметров могут быть объекты любого уровня вложенности, массивы, строки, числа и т.д.
Т.е. пример
```

booleanToInt('qwerty') // 'qwerty'
booleanToInt(1) // 1
booleanToInt(false) // 0
booleanToInt(true) // 1
booleanToInt([1, 'qwerty', false]) // [1, 'qwerty', 0]
booleanToInt([1, 'qwerty', { a: true }]) // [1, 'qwerty', { a: 1 }]
booleanToInt({ a: { b: true }, c: false, d: 'qwerty' }) // { a: { b: 1 }, c: 0, d: 'qwerty' }
booleanToInt({
  date1: {
    date1_1: 1,
    date1_2: [
      {
        date2_1: false,
        date2_2: 'str1',
      },
      {
        date2_3: true,
        date2_4: 'str2',
      },
      {
        date2_5: false,
        date2_6: 'str1',
      },
    ],
    date1_3: false,
    date1_4: {
      date3_1: true,
      date3_2: false,
      date3_3: 'str1',
      date3_4: 123,
    },
    date1_5: 'true',
  }
})

  date1: {
    date1_1: 1,
    date1_2: [
      {
        date2_1: 0,
        date2_2: 'str1',
      },
      {
        date2_3: 1,
        date2_4: 'str2',
      },
      {
        date2_5: 0,
        date2_6: 'str1',
      },
    ],
    date1_3: 0,
    date1_4: {
      date3_1: 1,
      date3_2: 0,
      date3_3: 'str1',
      date3_4: 123,
    },
    date1_5: 'true',
  }
```


