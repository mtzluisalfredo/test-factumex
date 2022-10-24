export const httpUseOptions = {
  headers: {
    Accept: 'application/json',
  },
  cachePolicy: 'no-cache' as any, // 'no-cache'
  interceptors: {
    request: async ({ options }: any) => {
      return options;
    },

    response: async ({ response }: any) => {
      const res = response;

      return res;
    },
  },
};
