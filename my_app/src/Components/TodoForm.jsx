import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="input-row" id="todo-form">
      <input
        id="todo-input"
        type="text"
        placeholder="Yeni görev ekle..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoComplete="off"
      />
      <button type="submit" className="btn-add" id="todo-add-btn">
        Ekle
      </button>
    </form>
  )
}

export default TodoForm