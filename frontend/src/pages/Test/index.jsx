import { api } from 'api/api';
import { useRequest } from 'hooks/useRequest';
import React, { useEffect } from 'react';
import styles from './test.module.scss';

export function Test() {
  const { data: users, doRequest: getUsers } = useRequest(api.getUsers, {
    onSuccess: () => {},
    onError: () => {},
  });

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.testDiv}>
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
  );
}
