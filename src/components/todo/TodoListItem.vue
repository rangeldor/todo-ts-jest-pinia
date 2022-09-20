<template>
  <td data-testid="todo-title">
    {{ todoItem.title }}
  </td>
  <td class="text-center">
    <v-icon
      :color="iconColor"
      :icon="icon"
    />
  </td>
  <td class="text-center">
    <div class="d-flex justify-center align-center">
      <v-btn
        data-testid="todo-detail-button"
        class="ma-1"
        variant="text"
        icon="mdi-eye-outline"
        color="primary"
        @click="handleDetail"
      />
      <v-btn
        class="ma-1"
        variant="text"
        icon="mdi-pencil-outline"
        color="primary"
      />
      <v-btn
        class="ma-1"
        variant="text"
        icon="mdi-delete-outline"
        color="primary"
      />
      <v-btn
        class="ma-1"
        variant="text"
        icon="mdi-comment-outline"
        color="primary"
      />
    </div>
  </td>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { ITodo, useTodoStore } from '@/stores/todo'

const useTodo = useTodoStore()
useTodo.fetchAll()

interface ITodoListItemProps {
  todoItem: ITodo
}
const props = defineProps<ITodoListItemProps>()
const { todoItem } = toRefs(props)

const icon = computed(() => todoItem.value.completed ? 'mdi-check' : 'mdi-close')
const iconColor = computed(() => todoItem.value.completed ? 'green' : 'red')

const handleDetail = () => {
  useTodo.todo = todoItem.value
  useTodo.openDetailDialog = !useTodo.openDetailDialog
}
</script>
