import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: [],
    total: 0,
  }),
  getters: {
    itemCount: (state) => state.items.length,
  },
  actions: {
    addItem(item) {
      this.items.push(item);
      this.total += item.price;
    },
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
        this.total -= item.price;
      }
    },
    clearCart() {
      this.items = [];
      this.total = 0;
    },
  },
});
