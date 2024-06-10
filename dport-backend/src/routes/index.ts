import { routes as health } from './health';
import { routes as user } from './user';
const router = [...health, ...user];
export default router;
