import { config } from 'dotenv';
import path from 'path';

// Cargar variables de entorno
export const loadEnv = () => {
    const envPath = path.resolve(__dirname, '../../env/.env.production');
    config({ path: envPath });
};