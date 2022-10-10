import { useQuery } from 'react-query'
import { api } from '../services/api'

interface User {
  name: string
  email: string
  createdAt: string
  id: number
}

interface Users {
  users: User[]
}

export const getUsers = async () => {
  const { data } = await api.get<Users>('/users')

  const users = data.users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))

  return users
}

export const useUsers = () => {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5,
  })
}
