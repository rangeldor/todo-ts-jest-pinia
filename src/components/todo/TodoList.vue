<template>
  <v-expansion-panels>
    <v-expansion-panel
      title="Title"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
    />
  </v-expansion-panels>
  <v-icon icon="fas fa-regular fa-home" />
  <v-icon icon="mdi:mdi-home" />
  <v-btn
    color="primary"
    class="my-3"
    @click.prevent="handleCreate"
  >
    <v-icon
      start
      icon="mdi-plus-circle"
    />
    Criar Todo
  </v-btn>

  <v-card :disabled="useTodo.isLoading">
    <v-progress-linear
      v-if="useTodo.isLoading"
      indeterminate
      color="red-darken-4"
      height="7"
      rounded
    />

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
  </v-card>
  <v-dialog
    max-width="600"
    v-model="useTodo.openDetailDialog"
  >
    <TodoListDetail />
  </v-dialog>

  <v-dialog
    max-width="600"
    v-model="useTodo.openCreateDialog"
  >
    <TodoListCreate />
  </v-dialog>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useTodoStore } from '@/stores/todo'
import TodoListItem from './TodoListItem.vue'
import TodoListDetail from './TodoListDetail.vue'
import TodoListCreate from './TodoListCreate.vue'

const useTodo = useTodoStore()

onMounted(async () => {
  await useTodo.fetchAll()
})

const handleCreate = () => {
  useTodo.openCreateDialog = !useTodo.openCreateDialog
}
</script>
