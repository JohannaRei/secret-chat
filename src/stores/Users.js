import { types } from 'mobx-state-tree';

const User = types
  .model('User', {
    username: types.string,
    password: types.string,
    nickname: types.string
  })
  .actions(self => ({
    changeNick(nick) {
      self.nickname = nick;
    }
  }));

const Users = types
  .model('Users', {
    users: types.array(User)
  })
  .actions(self => ({
    addUser(user) {
      self.users.push(user);
    }
  }))
  .create({
    users: [{ username: 'johq', password: 'salasana', nickname: 'JohQ' }]
  });

export default Users;
