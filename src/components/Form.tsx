import { ChangeEvent, FormEvent } from "react"
import { UserProps } from "../App"
import { handleChange } from "../hooks"


export function Form({ users, setUsers, user, setUser }: UserProps) {

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input type="hidden" name='id'

      />
      <input
        type="text"
        name='name'
        value={user.name || ''}
        onChange={event => handleChange(event, setUser, user)}

      />
      <input
        type="text"
        name='age'
        value={user.age || ''}
        onChange={event => handleChange(event, setUser, user)}
      />
      <button>
        SALVAR
      </button>
    </form>

  )

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()


    if (!user.name || !user.age) return
    try {

      if (user.id) {

        const updateUsers = users.map(row => {
          if (user.id == row.id) {
            return user
          }
          return row
        })
        setUsers(updateUsers)
        return
      }
      const newUser = {
        ...user,
        id: users.length + 1
      }
      setUsers([...users, newUser])
    } catch (err) {
      console.log(err)
    } finally {
      setUser({

        // name: '', age: 0
      })
      const name = (document.querySelector('input[name=name]') as HTMLInputElement)
      name.focus()
    }

  }

  function handleChangeOld(event: ChangeEvent) {
    const { name, value } = event.target as HTMLInputElement
    setUser({
      ...user,
      [name]: value
    })
  }


}