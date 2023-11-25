<script setup>
import Column from './components/Column.vue'
import Table from './components/Table.vue'

const items = [
    {
        name: 'Андрей',
        surname:'Фролов'
    },
    {
        name: 'Алексей',
        surname:'Орлов'
    },
]
</script>

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

<style>
/* Общие стили для таблицы */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

/* Стили для заголовка таблицы */
th {
    background-color: #3498db; /* Цвет заголовка */
    color: #fff; /* Цвет текста в заголовке */
    padding: 10px;
}

/* Стили для четных строк таблицы */
tr:nth-child(even) {
    background-color: #f2f2f2; /* Однотонный фон четных строк */
}

/* Стили для нечетных строк таблицы */
tr:nth-child(odd) {
    background-color: #e5e5e5; /* Однотонный фон нечетных строк */
}

/* Общие стили для ячеек таблицы */
td,
th {
    border: 1px solid #ddd; /* Рамка вокруг ячеек и заголовков */
    padding: 8px;
    text-align: left;
}
</style>
