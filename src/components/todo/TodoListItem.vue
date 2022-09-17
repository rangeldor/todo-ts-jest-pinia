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
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { ITodo } from '@/stores/todo'

interface ITodoListItem {
  todoItem: ITodo
}
const props = defineProps<ITodoListItem>()
const { todoItem } = toRefs(props)

const icon = computed(() => todoItem.value.completed ? 'mdi-check' : 'mdi-close')
const iconColor = computed(() => todoItem.value.completed ? 'green' : 'red')
</script>
