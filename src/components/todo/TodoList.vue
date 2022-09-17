<template>
  <v-table
    fixed-header
    height="400px"
  >
    <thead>
      <tr>
        <th class="text-left text-primary">
          Titulo
        </th>
        <th class="text-center text-primary">
          Concluído?
        </th>
        <th class="text-center text-primary">
          Ações
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="todo in useTodo.todos"
        :key="todo.id"
      >
        <TodoListItem :todo-item="todo" />
      </tr>
    </tbody>
  </v-table>

  <v-dialog
    max-width="600"
    v-model="useTodo.openDetailDialog"
  >
    <TodoListDetail />
  </v-dialog>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo'
import TodoListItem from './TodoListItem.vue'
import TodoListDetail from './TodoListDetail.vue'

const useTodo = useTodoStore()
useTodo.fetchAll()

</script>
