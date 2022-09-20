import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'

export interface ITodo {
  userId?: number
  id?: number
  title: string
  completed: boolean
}

interface IState {
  isLoading: boolean
  todos: ITodo[]
  todo: ITodo | Record<string, never>
  openDetailDialog: boolean
  openCreateDialog: boolean
}

export const useTodoStore = defineStore('todo', {
  state: (): IState => ({
    isLoading: false,
    todos: [],
    todo: {},
    openDetailDialog: false,
    openCreateDialog: false
  }),

  actions: {
    async fetchAll () {
      this.isLoading = true

      const url = 'https://jsonplaceholder.typicode.com/todos'

      try {
        const response = await axios.get(url)
        this.todos = response.data
      } catch (error) {
        const err = error as AxiosError

        if (err.response) {
          return err.response
        }
      } finally {
        this.isLoading = false
      }
    },

    async create (todo: ITodo) {
      const url = 'https://jsonplaceholder.typicode.com/todos'

      try {
        await axios.post(url, todo)
      } catch (error) {
        const err = error as AxiosError

        if (err.response) {
          return err.response
        }
      }
    }
  }
})
