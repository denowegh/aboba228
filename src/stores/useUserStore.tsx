import { create } from 'zustand';

interface UserState {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const useDuelStore = create<UserState>((set) => ({
    setIsLoggedIn: (isLoggedIn) => set({isLoggedIn}),
    isLoggedIn: false
}));
