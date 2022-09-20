import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useTodoStore } from '@/stores/todo'
import TodoListItem from '@/components/todo/TodoListItem.vue'

const fakeTodo = {
  id: 1,
  userId: 2,
  title: 'teste 1',
  completed: false
}

describe('TodoListItem.vue', () => {
  const pinia = createTestingPinia()
  const useTodo = useTodoStore(pinia)
  useTodo.todo = fakeTodo

  it('Should get todo title', () => {
    const wrapper = mount(TodoListItem, {
      global: {
        plugins: [pinia]
      },
      props: {
        todoItem: fakeTodo
      }
    })

    const todoTitle = wrapper.find('[data-testid="todo-title"]')
    const title = todoTitle.text()
    expect(title).toContain(fakeTodo.title)
  })

  it('Should set todo on todoStore', () => {
    const wrapper = mount(TodoListItem, {
      global: {
        plugins: [pinia]
      },
      props: {
        todoItem: fakeTodo
      }
    })

    const detailButton = wrapper.find('[data-testid="todo-detail-button"]')
    detailButton.trigger('click')

    expect(useTodo.todo).toEqual(fakeTodo)
    expect(useTodo.openDetailDialog).toBe(true)
  })
})
