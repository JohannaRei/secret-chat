// @flow
import React from 'react';
import { Screen, Text, Content } from '@common';
import { Users } from '@stores';

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
