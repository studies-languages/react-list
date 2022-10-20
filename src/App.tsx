import { FormEvent, useDebugValue, useEffect, useState } from 'react'

interface UserProps {
  id: number
  name: string
  service: string
}


export function App() {

  const [users, setUsers] = useState<UserProps[]>([])
  const [user, setUser] = useState<UserProps | null>()
  const form = (document.querySelector('#form') as HTMLFormElement)

  useEffect(() => {
    setUsers([{
      id: 1,
      name: 'lucas ',
      service: 'qweqwe'
    }])

  }, [])
  // const formFields = []
  const field = {
    service: (document.querySelector('input[name=service]') as HTMLInputElement),
    name: (document.querySelector('input[name=name]') as HTMLInputElement),
    id: (document.querySelector('input[name=id]') as HTMLInputElement)
  }

  function clearFields() {
    form?.reset()
    field.name?.focus()
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(formData) as unknown as UserProps
    try {

      if (data.id) {

        const updateUsers = users.map(user => {
          if (user.id == data.id) {
            return data
          }
          return user
        })
        setUsers(updateUsers)
        return
      }

      const newUser = {
        id: users.length + 1,
        name: data.name,
        service: data.service
      }

      setUsers([...users, newUser])
    } catch (err) {
      console.log(err)
    } finally {
      clearFields()
    }

  }

  function deleteUser(userId: number) {

    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)

  }

  return (
    <div>
      <form id="form" onSubmit={handleSubmit}>
        <input type="hidden" name='id'

        />
        <input type="text" name='name' />
        <input type="text" name='service' />
        <button>
          SALVAR
        </button>
      </form>
      {users?.map(user => (
        <p
          key={user.id}
          onClick={() => {


            field.name.value = user.name
            field.service.value = user.service
            field.id.value = String(user.id)

            // id.value = String(user.id)
            // name.value = user.name 


          }}

        >
          {user.id} - {user.name} - {user.service} &nbsp;
          <button onClick={() => deleteUser(user.id || 0)}>
            Delete
          </button>
        </p>

      ))}
    </div>


  )
}

