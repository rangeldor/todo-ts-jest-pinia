<template>
  <v-table
    fixed-header
    height="300px"
  >
    <thead>
      <tr>
        <th class="text-left">
          Titulo
        </th>
        <th class="text-center">
          Concluído?
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
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo'
import TodoListItem from './TodoListItem.vue'

const useTodo = useTodoStore()
useTodo.fetchAll()
</script>
