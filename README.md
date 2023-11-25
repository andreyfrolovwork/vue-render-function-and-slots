# Пишем свой табличку с помощью рендер функий vue
Передача компонента в default slot и кастомный рендер ячейки таблицы
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
                    <div>
                        {{ scope.surname }}
                    </div>
                </template>
            </Column>
        </Table>
    </div>
</template>
```
![chrome_i6DwmpSYlg](https://github.com/iobox420/vue-render-function-and-slots/assets/67315235/d82b345d-3816-48ea-a59a-339f7c977f04)
