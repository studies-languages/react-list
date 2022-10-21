import { UserProps } from "../App"

export function List({users, setUsers, setUser}: UserProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th> 
          <th>Age</th>
        </tr>
      </thead>
      <tbody>

        {
          users.map( user => (
          <tr 
            key={user.id}
            onClick={() => setUser(user)}
            >
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>
              <button onClick={() => handleDelete(user.id)}>
                Deletar
                </button>
            </td>
                        
          </tr>    
          ))
        }

      </tbody>
    </table>
  )

  // function 
  function handleDelete(userId: number) {

    const newUsers = users.filter(user => user?.id !== userId)
    setUsers(newUsers)

  }
}