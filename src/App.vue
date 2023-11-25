<script setup>
import Column from './components/Column.vue'
import Table from './components/Table.vue'
import { ref } from 'vue'

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
