import { types } from 'mobx-state-tree';

const Option = types
  .model('Option', {
    name: types.string,
    active: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggle() {
      self.active = !self.active;
    }
  }));

const Options = types
  .model('Options', {
    options: types.array(Option)
  })
  .views(self => ({
    get activeOptions() {
      return self.options.filter(option => option.active);
    },
    getOption(name) {
      return self.options.filter(option => option.name === name);
    }
  }))
  .create({
    options: [{ name: 'timeLimit', active: false }, { name: 'showStatus', active: true }]
  });

export default Options;
