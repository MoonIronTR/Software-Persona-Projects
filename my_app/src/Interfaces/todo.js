// Todo factory function - creates a new todo object
export const createTodo = (text) => {
  return {
    id: Date.now(),
    text: text,
    completed: false,
    createdAt: new Date().toLocaleString('tr-TR'),
  }
}

// Filter constants
export const FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
}