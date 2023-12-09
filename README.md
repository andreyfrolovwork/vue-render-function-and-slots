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

