import { prefix } from '../config';

import { user } from '../controller';
import router from './router';

const { login, getLeaderBoard, getNFTs, addVehicle, addBattery } = user;

const routes = [
    router.post(prefix + '/login', login),
    router.get(prefix + '/leaderboard', getLeaderBoard),
    router.post(prefix + '/nfts', getNFTs),
    router.post(prefix + '/vehicle', addVehicle),
    router.post(prefix + '/battery', addBattery),
];
export { routes };
