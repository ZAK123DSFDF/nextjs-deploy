import { create } from "zustand";
interface user {
  name: string;
  age: string;
}
interface userStore {
  user: user;
  updatedNameInput: (newName: string) => void;
  updatedName: (newUser: string) => void;
}
export const userStore = create((set) => ({
  user: {
    name: "zakk",
    age: "20",
  },

  updatedNameInput: (newName: string) =>
    set((state: any) => ({
      user: {
        ...state.user,
        name: newName,
      },
    })),
  updatedName: (newUser: string) =>
    set((state: any) => ({
      user: {
        ...state.user,
        name: newUser,
      },
    })),
}));
