import {create} from 'zustand';

export const useAppStore = create((set) => ({
  isSidebarOpen: true,
  openSidebar: () => set({ isSidebarOpen: true}),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));
