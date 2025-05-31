declare global {
    namespace NodeJS {
      interface ProcessEnv {
        RIOT_API_KEY: string;
        NODE_ENV: 'development' | 'production' | 'test';
      }
    }
  }

  export {};