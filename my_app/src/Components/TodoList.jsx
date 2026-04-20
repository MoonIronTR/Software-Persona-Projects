import { useState } from 'react'

function TodoList({ todos, onDelete, onUpdate, onToggle }) {
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const startEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const cancelEdit = () => {
    setEditId(null)
    setEditText('')
  }

  const saveEdit = (id) => {
    if (!editText.trim()) return
    onUpdate(id, editText.trim())
    setEditId(null)
    setEditText('')
  }

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') saveEdit(id)
    if (e.key === 'Escape') cancelEdit()
  }

  const handleDelete = (id) => {
    const el = document.getElementById(`todo-${id}`)
    if (el) {
      el.classList.add('removing')
      setTimeout(() => onDelete(id), 250)
    } else {
      onDelete(id)
    }
  }

  if (todos.length === 0) {
    return (
      <div className="empty-state" id="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
        <p className="title">Henüz görev yok</p>
        <p className="sub">Yukarıdan yeni bir görev ekleyin</p>
      </div>
    )
  }

  return (
    <ul className="todo-list" id="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          id={`todo-${todo.id}`}
          className={`todo-item ${todo.completed ? 'done' : ''}`}
        >
          {editId === todo.id ? (
            <div className="edit-row">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, todo.id)}
                autoFocus
                id={`edit-input-${todo.id}`}
              />
              <button className="save-btn" onClick={() => saveEdit(todo.id)}>
                Kaydet
              </button>
              <button className="cancel-btn" onClick={cancelEdit}>
                İptal
              </button>
            </div>
          ) : (
            <>
              <label className="custom-check">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggle(todo.id)}
                  id={`check-${todo.id}`}
                />
                <span className="box">✓</span>
              </label>

              <span className="text">{todo.text}</span>

              <div className="actions">
                <button
                  className="btn-edit"
                  onClick={() => startEdit(todo)}
                  id={`edit-btn-${todo.id}`}
                >
                  Güncelle
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(todo.id)}
                  id={`del-btn-${todo.id}`}
                >
                  Sil
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TodoList