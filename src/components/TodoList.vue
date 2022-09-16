<template>
  <v-container>
    <v-table
      fixed-header
      height="300px"
    >
      <thead>
        <tr>
          <th class="text-left">
            Titulo
          </th>
          <th class="text-left">
            Concluído?
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="todo in useTodo.todos"
          :key="todo.id"
        >
          <td data-testid="todo-title">
            {{ todo.title }}
          </td>
          <td :class="todo.completed ? 'bg-primary' : ''">
            {{ todo.completed ? 'Sim' : 'Não' }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo'

const useTodo = useTodoStore()
useTodo.fetchAll()
</script>
