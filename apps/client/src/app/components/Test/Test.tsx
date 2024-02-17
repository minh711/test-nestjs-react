import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_ACCOUNTS } from '../../graphql/account';

const Test = () => {
  const { loading, error, data } = useQuery(GET_ACCOUNTS);

  return (
    <div>
      <h1>Accounts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.getAccounts.map((account: any) => (
            <li key={account.id}>{account.username} - {account.email}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Test