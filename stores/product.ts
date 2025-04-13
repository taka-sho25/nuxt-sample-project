import { defineStore } from 'pinia';

type Product = {
  _id: number;
  title: string;
  price: number;
};

export const useProductStore = defineStore('product', {
  state: (): Product => ({
    _id: 0,
    title: 'Unknown',
    price: 0,
  }),

  actions: {
    // 初期ロード（setTimeoutを使った非同期風）
    load() {
      setTimeout(() => {
        this.update({ _id: 1, title: 'Product', price: 99.99 });
      }, 1000);
    },

    // Promise を返す非同期ロード
    async loadAsync(): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.update({ _id: 1, title: 'Product', price: 99.99 });
          resolve();
        }, 1000);
      });
    },

    // ステートの更新
    update(product: Product) {
      Object.assign(this, product);
    },

    // リセット
    reset() {
      this._id = 0;
      this.title = 'Unknown';
      this.price = 0;
    },
  },
});
