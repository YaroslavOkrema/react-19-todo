import { User } from '@/types/types.ts'

export const fetchUsers = () => {
  return fetch('http://localhost:3001/users').then(
    response => response.json() as Promise<User[]>,
  )
}

export const createUser = (user: User) => {
  return fetch(`http://localhost:3001/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(response => response.json())
}

export const deleteUser = (id: string) => {
  return fetch(`http://localhost:3001/users/${id}`, {
    method: 'DELETE',
  }).then(response => response.json())
}
