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
      <div>
        {users?.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
