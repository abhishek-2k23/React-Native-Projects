import { create } from 'zustand';

// Define the User interface
interface User {
  userEmail: string;
  userName: string;
  credits: number;
}

// Define the Store interface
interface UserStore {
  user: User | null; // Either a user object or null if no user is present
  addUser: (newUser: User) => void; // Action to add a user
  removeUser: () => void; // Action to remove the user
}

// Create the Zustand store
const useUserStore = create<UserStore>((set) => ({
  user: null, // Initial state: no user
  addUser: (newUser) => set({ user: newUser }), // Add a user
  removeUser: () => set({ user: null }), // Remove the user
}));

export default useUserStore;
