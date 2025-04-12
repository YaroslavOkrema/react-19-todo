import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { User } from '@/types/types.ts'
import { createUser, fetchUsers } from '@/shared/api.ts'
import { Suspense, use, useState } from 'react'
import * as crypto from 'node:crypto'
import * as React from 'react'

const defaultUsersPromise = fetchUsers()

export const UsersPage = () => {
  //const { email, setEmail, users, handleSubmit, handleDelete } = useUsers()
  const [userPromise, setUserPromise] = useState(defaultUsersPromise)
  const refetchUsers = () => {
    setUserPromise(fetchUsers())
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Users</h1>
      <div>
        <CreateUserForm refetchUsers={refetchUsers} />
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <UsersList usersPromise={userPromise} />
        </Suspense>
      </div>
    </div>
  )
}

export const CreateUserForm = ({
  refetchUsers,
}: {
  refetchUsers: () => void
}) => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await createUser({
      email,
      id: crypto.randomUUID(),
    })
    refetchUsers()
    setEmail('')
  }
  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Input type="email" />
      <Button type="submit">Add</Button>
    </form>
  )
}

export const UsersList = ({
  usersPromise,
}: {
  usersPromise: Promise<User[]>
}) => {
  const users = use(usersPromise)
  return (
    <div className="flex flex-col">
      {users.map((user: User) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="border p-2 rounded bg-gray-100">
      {user.email}
      <Button type="button">Delete</Button>
    </div>
  )
}
