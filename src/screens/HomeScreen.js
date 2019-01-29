// @flow
import React from 'react';
import { Screen, Text, Content } from '../components/common';
import Users from '../stores/Users';

// type Props = {};

const HomeScreen = () => {
  const { users } = Users;
  return (
    <Screen>
      <Content>
        <Text tx="homeScreen.title" />
        {users.map(user => (
          <Text key={user.username}>{user.nickname}</Text>
        ))}
      </Content>
    </Screen>
  );
};

export default HomeScreen;
