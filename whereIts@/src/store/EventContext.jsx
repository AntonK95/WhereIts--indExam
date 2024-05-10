
import { createContext } from "react";
import { create } from 'zustand';

// Skapa en tillståndscontainer med Zustand
export const useEventStore = create((set) => ({
    events: [],
    setEvents: (events) => set({ events }),
  }));

export const EventContext = createContext(useEventStore);