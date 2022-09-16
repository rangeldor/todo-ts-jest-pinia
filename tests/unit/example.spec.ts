import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useTodoStore } from '@/stores/todo'
// import { createVuetify } from 'vuetify';
import TodoList from '@/components/TodoList.vue'

const fakeTodos = [{
  id: 1,
  userId: 2,
  title: 'teste 1',
  completed: false
}]

describe('TodoList.vue', () => {
  // const vuetify = createVuetify();
  const pinia = createTestingPinia()
  const useTodo = useTodoStore(pinia)
  useTodo.todos = fakeTodos

  it('Should get todos titles', () => {
    const wrapper = shallowMount(TodoList, {
      global: {
        plugins: [pinia]
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
