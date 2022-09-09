<template>
  <div>
    <div v-for="todo in useTodo.todos" :key="todo.id" data-test-id="todo">
     {{ todo.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo';

const useTodo = useTodoStore();
useTodo.fetchAll();

</script>
