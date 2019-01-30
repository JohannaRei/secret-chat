// @flow
import React from 'react';
import { observer } from 'mobx-react';
import {
  Screen, Text, Content, Button
} from '@common';
import { Users, Options } from '@stores';

// type Props = {};

const HomeScreen = () => {
  const { users } = Users;
  const { options } = Options;
  return (
    <Screen>
      <Content>
        <Text tx="homeScreen.title" />
        {users.map(user => (
          <Text key={user.username}>{user.nickname}</Text>
        ))}
        {options.map(option => (
          <Button title={`${option.name} ${option.active}`} onPress={option.toggle} />
        ))}
        <Text>{Options.activeOptions[0].name}</Text>
      </Content>
    </Screen>
  );
};

export default observer(HomeScreen);
