import { types, destroy } from 'mobx-state-tree';

const User = types
  .model('User', {
    username: types.string,
    password: types.string,
    nickname: types.optional(types.string, ''),
    status: types.optional(types.string, '')
  })
  .actions(self => ({
    changeNick(nick) {
      self.nickname = nick;
    },
    changeStatus(status) {
      self.status = status;
    }
  }));

const Users = types
  .model('Users', {
    users: types.array(User)
  })
  .views(self => ({
    get newUsers() {
      return self.users.filter(user => user.new);
    },
    findUserByNick(nick) {
      return self.users.filter(user => user.nickname === nick);
    }
  }))
  .actions(self => ({
    addUser(user) {
      self.users.push(user);
    },
    removeUser(user) {
      destroy(user);
    }
  }))
  .create({
    users: []
  });

export default Users;
