import { Route, Routes } from 'react-router-dom'
import { UsersPage } from 'src/pages/users'
import { TodoListPage } from 'src/pages/todo-list'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />}></Route>
      <Route path="/:userId/tasks" element={<TodoListPage />}></Route>
    </Routes>
  )
}
