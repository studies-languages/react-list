import { ChangeEvent, FormEvent, useState } from 'react'

interface UserProps {
  id: number
  name?: string
}

export function App() {

  const [users, setUsers] = useState<UserProps[]>([])
  const [user, setUser] = useState<UserProps>({
    id: 0, name: ''
  })


  function addList(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const input = (document.querySelector('input') as HTMLInputElement)
    const name = input.value

    if (!name) return

    setUsers([
      ...users,
      {
        id: users?.length + 1,
        name
      }
    ])

    input.value = ''

  }

  function deleteUser(userId: number) {

    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)

  }

  // function updateUser()
  function handlechange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    const userSelect = {
      ...user,
      [name]: value
    }

    setUser(userSelect)

  }


  return (
    <div>
      <form onSubmit={addList}>

        <input
          type="text"
          name='newuser'

        />
        <button >
          Salvar
        </button>
      </form>
      {users?.map(user => (
        <p
          key={user.id}
          onClick={() => {
            console.log(user.name)
            setUser(user)

            // id.value = String(user.id)
            // name.value = user.name 


          }}

        >
          {user.id} - {user.name} - &nbsp;
          <button onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </p>

      ))}

      <form onSubmit={(event) => {
        event.preventDefault()
        const newUsers = users.map(row => {
          if(row.id === user.id){
            return user
          }
          return row
        })
        setUsers(newUsers)
        setUser({})
        // console.log(newUsers)

      }}>
        <input type="text" name='id'
          value={user?.id || ''}
          onChange={handlechange}
        />
        <input type="text" name='name'
          value={user?.name || ''}
          onChange={handlechange}

        />
        <button>update</button>
      </form>
    </div>


  )
}

