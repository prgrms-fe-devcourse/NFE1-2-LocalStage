import { create } from 'zustand';

interface Cache {
  data: unknown;
  timestamp: number;
}

export const useCacheStore = create<{
  caches: { [url: string]: Cache };
  hasCache: (url: string) => boolean;
  registerCache: (url: string, data: unknown) => void;
  clear: (url: string) => void;
}>((set, get) => ({
  caches: {},
  hasCache: (url: string) => {
    const cache = get().caches[url];
    if (!cache) return false;
    const currentTime = Date.now();
    const expirationTime = 5 * 60 * 1000; // 5분 (밀리초 단위)
    return currentTime - cache.timestamp < expirationTime;
  },
  registerCache: (url: string, data: unknown) => {
    if (!get().hasCache(url)) {
      set(state => ({
        ...state,
        caches: {
          ...state.caches,
          [url]: {
            data,
            timestamp: Date.now(),
          },
        },
      }));
    }
  },
  clear: (url: string) =>
    set(state => {
      const restCaches = { ...state.caches };
      delete restCaches[url];
      return { ...state, caches: restCaches };
    }),
}));
