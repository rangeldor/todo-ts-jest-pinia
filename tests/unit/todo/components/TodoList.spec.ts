import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useTodoStore } from '@/stores/todo'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import TodoList from '@/components/todo/TodoList.vue'

const fakeTodos = [{
  id: 1,
  userId: 2,
  title: 'teste 1',
  completed: false
},
{
  id: 2,
  userId: 1,
  title: 'teste 2',
  completed: true
}]

describe('TodoList.vue', () => {
  const vuetify = createVuetify({ components, directives })
  const pinia = createTestingPinia()
  const useTodo = useTodoStore(pinia)
  useTodo.todos = fakeTodos

  it('Should get todos titles', () => {
    const wrapper = mount(TodoList, {
      global: {
        plugins: [pinia, vuetify]
      }
    })

    const todos = wrapper.findAll('[data-testid="todo-title"]')
    expect(todos).toHaveLength(fakeTodos.length)

    todos.forEach((todo, index) => {
      const title = todo.text()
      expect(title).toContain(fakeTodos[index].title)
    })
  })
})
