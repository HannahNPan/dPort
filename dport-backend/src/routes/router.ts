import express from 'express';
import fs from 'fs';

const router = express.Router();

const compileRoutes = () => {
    fs.readdirSync(__dirname).forEach(async function (file) {
        if (file === 'index.ts' || file === 'router.ts') return;
        const name = file.split('.')[0];
        await import(`./${name}`);
    });
};

compileRoutes();

export default router;
