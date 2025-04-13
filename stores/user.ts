import { defineStore } from 'pinia';

type User = {
  _id: number;
  name: string;
  token: string;
};

export const useUserStore = defineStore('user', {
  state: (): User => ({
    _id: 0,
    name: '',
    token: '',
  }),

  actions: {
    // ユーザーロード
    async load(token: string): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.update({ _id: 1, name: 'Ben', token });
          resolve();
        }, 1000);
      });
    },

    // ステート更新
    update(user: User) {
      Object.assign(this, user);
    },
  },
});
