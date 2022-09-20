<template>
  <v-card
    class="mx-auto px-6 py-8"
    max-width="344"
  >
    <v-card-title>
      <h1 class="text-primary">
        Create Todo
      </h1>
    </v-card-title>

    <v-form
      v-model="form"
      @submit.prevent="onSubmit"
    >
      <!-- <v-text-field
        v-model="todoForm.title"
        class="mb-2"
        clearable
        label="Título"
        data-testid="todo-create-title"
      /> -->

      <input
        v-model="todoForm.title"
        class="mb-2"
        data-testid="todo-create-title"
      >

      <v-checkbox
        v-model="todoForm.completed"
        label="Completo?"
        data-testid="todo-create-completed"
      />
      <br>

      <v-btn
        :disabled="!form"
        :loading="isLoading"
        block
        color="primary"
        size="large"
        type="submit"
        variant="elevated"
      >
        Criar
      </v-btn>
    </v-form>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ITodo, useTodoStore } from '@/stores/todo'

const useTodo = useTodoStore()
const form = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const todoForm = ref<ITodo>({
  title: '',
  completed: false
})

const onSubmit = async () => {
  if (!form.value) return

  isLoading.value = true

  try {
    await useTodo.create(todoForm.value)
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
    useTodo.openCreateDialog = !useTodo.openCreateDialog
  }
}

</script>
