import { api } from 'api/api'
import styles from './test.module.scss'
import { useRequest } from 'hooks/useRequest'
import { useEffect } from 'react'

export const Test = () => {
  const { data: users, doRequest: getUsers } = useRequest(api.getUsers, {
    onSuccess: () => console.log('Success fetching event'),
    onError: () => console.log('Error fetching event')
  })

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className={styles.testDiv} >
      <h1>Test</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
