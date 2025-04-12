import { useState } from 'react'
import * as React from 'react'
import { User } from '@/pages/users/types.ts'

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setUsers([...users, { id: crypto.randomUUID(), email }])
    setEmail('')
  }

  const handleDelete = (id: string) => {
    setUsers(lastUser => lastUser.filter(user => user.id !== id))
  }

  return {
    users,
    email,
    setEmail,
    handleSubmit,
    handleDelete,
  }
}
