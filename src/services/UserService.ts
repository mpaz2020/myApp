import { User } from '@/interfaces/user'

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return data
}
