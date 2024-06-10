import { Request, Response } from 'express';
import { query } from '../../db';

const login = async (req: Request, res: Response) => {
    // TODO: add logic to validate wallet
    const { walletPublic } = req.body;
    if (!walletPublic) {
        return res.status(400).json({
            status: false,
            message: 'Invalid wallet public key',
        });
    }
    const result = await query('SELECT * FROM dport.users WHERE wallet_public = $1', [
        walletPublic,
    ]);
    return res.status(200).json({
        status: true,
        data: result.rows,
        message: 'User logged in successfully',
    });
};

const getLeaderBoard = async (req: Request, res: Response) => {
    // dummy data
    // 1	User1	Tesla Model S	Li-Ion	1000
    // 2	User2	Nissan Leaf	Li-Ion	950
    // 3	User3	Chevy Bolt	Li-Ion	900
    const leaderBoard = [
        {
            rank: 1,
            name: 'User1',
            vehicle: 'Tesla Model S',
            battery: 'Li-Ion',
            score: 1000,
        },
        {
            rank: 2,
            name: 'User2',
            vehicle: 'Nissan Leaf',
            battery: 'Li-Ion',
            score: 950,
        },
        {
            rank: 3,
            name: 'User3',
            vehicle: 'Chevy Bolt',
            battery: 'Li-Ion',
            score: 900,
        },
    ];

    return res.status(200).json({
        status: true,
        data: leaderBoard,
        message: 'Leaderboard fetched successfully',
    });
};

const getNFTs = async (req: Request, res: Response) => {
    const { walletPublic } = req.body;
    console.log(walletPublic);

    if (!walletPublic) {
        return res.status(400).json({
            status: false,
            message: 'Invalid wallet public key',
        });
    }
    const result = await query('SELECT * FROM dport.nfts WHERE wallet_public = $1', [walletPublic]);
    // TODO: add logic to fetch NFTs from the blockchain
    return res.status(200).json({
        status: true,
        data: result.rows,
        message: 'NFTs fetched successfully',
    });
};

const addVehicle = async (req: Request, res: Response) => {
    // car plate, make, model, VIN
    const { carPlate, make, model, vin } = req.body;
    const { walletPublic } = req.body;
    if (!walletPublic) {
        return res.status(400).json({
            status: false,
            message: 'Invalid wallet public key',
        });
    }
    // get program_private from db
    try {
        const result = await query('SELECT * FROM dport.users WHERE wallet_public = $1', [
            walletPublic,
        ]);
        const programPrivate = result.rows[0].program_private;
        const userId = result.rows[0].id;
        // add vehicle to blockchain
        // add vehicle to db
        const vehicle = await query(
            'INSERT INTO dport.vehicles (car_plate, make, model, vin,userid) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [carPlate, make, model, vin, userId],
        );
        // TODO: logic to mint nft under programPrivate
        return res.status(200).json({
            status: true,
            data: vehicle.rows,
            message: 'Vehicle added successfully',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: 'Internal server error',
        });
    }
};

const addBattery = async (req: Request, res: Response) => {
    const { batteryBin, type, model, SN } = req.body;
    const { walletPublic } = req.body;
    if (!walletPublic) {
        return res.status(400).json({
            status: false,
            message: 'Invalid wallet public key',
        });
    }
    // get program_private from db
    try {
        const result = await query('SELECT * FROM dport.users WHERE wallet_public = $1', [
            walletPublic,
        ]);
        const programPrivate = result.rows[0].program_private;
        const userId = result.rows[0].id;
        console.log(programPrivate, userId);
        // add battery to blockchain
        // add battery to db
        // batter_bin,model,type,SN
        const battery = await query(
            'INSERT INTO dport.batteries (battery_bin,model,type,SN,userid) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [batteryBin, model, type, SN, userId],
        );

        return res.status(200).json({
            status: true,
            data: battery.rows,
            message: 'Battery added successfully',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: 'Internal server error',
        });
    }
};

export { login, getLeaderBoard, getNFTs, addVehicle, addBattery };
