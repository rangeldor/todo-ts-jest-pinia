import { defineStore } from 'pinia';
import axios, { AxiosError } from 'axios';

export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface IState {
  isLoading: boolean
  todos: ITodo[]
}

export const useTodoStore = defineStore('todo', {
  state: (): IState => ({
    isLoading: false,
    todos: [],
  }),

  actions: {
    async fetchAll() {
      this.isLoading = true;

      const url = 'https://jsonplaceholder.typicode.com/todos';

      try {
        const response = await axios.get(url);
        this.todos = response.data;
      } catch (error) {
        const err = error as AxiosError;

        if (err.response) {
          return err.response;
        }
      } finally {
        this.isLoading = false;
      }
    },
  },
});
