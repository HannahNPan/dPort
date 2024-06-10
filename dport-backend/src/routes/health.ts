import { prefix } from '../config';
import { health } from '../controller';
import router from './router';

const { GetHealth } = health;

const routes = [router.get(prefix + '/health', GetHealth)];

export { routes };
