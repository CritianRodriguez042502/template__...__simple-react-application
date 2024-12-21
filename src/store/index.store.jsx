import { create } from "zustand";

export const useStore = create(() => ({
  count: 0,
  increment: () => useStore.setState({ count: useStore.getState().count + 1 }),
  decrement: () => useStore.setState({ count: useStore.getState().count - 1 }),
}));
