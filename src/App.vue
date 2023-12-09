<script setup>
import Column from './components/Column.vue'
import Table from './components/Table.vue'
import { ref } from 'vue'
import copy from './utils/copy.js'
const items = ref([
    {
        name: 'Андрей',
        surname: 'Фролов',
    },
    {
        name: 'Алексей',
        surname: 'Орлов',
    },
])

/* Задача № 1  */
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
                    <b>
                        {{ scope.surname }}
                    </b>
                </template>
            </Column>
        </Table>
    </div>
</template>
