import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';

import { FriendList } from 'components/Friends/FriendsList/FriendList';
import friends from 'components/Friends/friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </App>
  </React.StrictMode>
);
