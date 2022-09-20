import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useTodoStore } from '@/stores/todo'
import TodoListCreate from '@/components/todo/TodoListCreate.vue'

const fakeTodo = {
  id: 1,
  userId: 2,
  title: 'teste 1',
  completed: false
}

describe('TodoListCreate.vue', () => {
  const pinia = createTestingPinia()
  const useTodo = useTodoStore(pinia)

  it('Should create todo', async () => {
    const wrapper = shallowMount(TodoListCreate, {
      global: {
        plugins: [pinia]
      }
    })

    const title = wrapper.find('input')
    await title.setValue(fakeTodo.title)
    expect(title.element.value).toBe(fakeTodo.title)

    // const completed = wrapper.find('[data-testid="todo-create-completed"]')
    // await completed.setValue(true)

    // await wrapper.find('form').trigger('submit.prevent')
  })
})
