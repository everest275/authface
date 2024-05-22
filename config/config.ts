export interface ApplicationInit {
  app: string;
  init(app: string): Promise<void>; // Changed to return a Promise
}

export const applicationInit: ApplicationInit = {
  app: "../src/app/app",
  async init(app: string) { // Changed to async function
    if (process.env.npm_lifecycle_event === 'dev:local') {
      process.loadEnvFile('.env.local'); // Assuming loadEnvFile is an async function
    } else if (process.env.npm_lifecycle_event === 'dev') {
      process.loadEnvFile('.env.dev'); // Assuming loadEnvFile is an async function
    } else if (process.env.npm_lifecycle_event === 'start') {
      process.loadEnvFile('.env'); // Assuming loadEnvFile is an async function
    } else {
      console.log("Different npm script has been executed, Access denied");
      return; // Early return here
    }
    await import(app);
  }
};
