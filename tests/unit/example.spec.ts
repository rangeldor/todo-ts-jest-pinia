import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import { createTestingPinia } from '@pinia/testing';
import { useTodoStore } from '@/stores/todo';

const fakeTodos = [{
  id: 1,
  userId: 2,
  title: 'teste 1',
  completed: false,
}];

describe('HelloWorld.vue', () => {
  const pinia = createTestingPinia();
  const useTodo = useTodoStore(pinia);
  useTodo.todos = fakeTodos;

  it('Should get todo title', () => {
    const wrapper = shallowMount(HelloWorld, {
      global: {
        plugins: [pinia],
      },
    });

    const todo = wrapper.get('[data-test-id="todo"]');
    expect(todo.text()).toBe('teste 1');
  });
});
