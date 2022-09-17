<template>
  <v-card>
    <h1 class="text-primary">
      Todo Detalhes
    </h1>
    <v-card-text>
      <div class="d-flex justify-center align-start flex-column">
        <div>
          <strong>Id:</strong>
          <span class="ml-1">{{ todo.id }}</span>
        </div>
        <div>
          <strong>Título:</strong>
          <span
            class="ml-1"
            data-testid="todo-detail-title"
          >{{ todo.title }}</span>
        </div>
        <div>
          <strong>Completo?:</strong>
          <span class="ml-1">{{ todo.completed ? 'Sim' : 'Não' }}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'

const { todo } = useTodoStore()

</script>
