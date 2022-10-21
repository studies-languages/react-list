import { FormEvent, useDebugValue, useEffect, useState } from 'react'
import {usersdb} from '../db'
import axios from 'axios'
import { List } from './components/List'
import { Form } from './components/Form'

export interface User {
  id: number
  name: string
  age: number
}

export interface UserProps{
  users: User[]
  setUsers: Function
  user: User 
  setUser: Function
}

export function App() {

  const [users, setUsers] = useState<User[]>([])
  const [user, setUser] = useState<User >({
    id: 0, name: '', age: 0
  })

  useEffect(() => {
    setUsers(usersdb)
  }, [])

  return (
    <div>
      <Form 
        users={users} 
        setUsers={setUsers} 
        user={user}
        setUser={setUser}        
        />
      <List 
        users={users} 
        setUsers={setUsers} 
        user={user}
        setUser={setUser}
        />
    </div>


  )
}

