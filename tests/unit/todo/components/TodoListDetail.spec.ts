import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useTodoStore } from '@/stores/todo'
import TodoListDetail from '@/components/todo/TodoListDetail.vue'

const fakeTodo = {
  id: 1,
  userId: 2,
  title: 'teste 1',
  completed: false
}

describe('TodoListDetail.vue', () => {
  const pinia = createTestingPinia()
  const useTodo = useTodoStore(pinia)
  useTodo.todo = fakeTodo

  it('Should display todo title', () => {
    const wrapper = mount(TodoListDetail, {
      global: {
        plugins: [pinia]
      }
    })

    const todoTitle = wrapper.find('[data-testid="todo-detail-title"]')
    const title = todoTitle.text()
    expect(title).toContain(fakeTodo.title)
  })
})
