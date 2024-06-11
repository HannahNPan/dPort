import React, { useState } from 'react';

const BindSN: React.FC = () => {
    const [serialNumber, setSerialNumber] = useState<string>('');

    const handleBind = () => {
        // Implement bind serial number logic here
    };

    return (
        <div>
            <h1>Bind Serial Number</h1>
            <input 
                type="text" 
                value={serialNumber} 
                onChange={(e) => setSerialNumber(e.target.value)} 
                placeholder="Enter Serial Number" 
            />
            <button onClick={handleBind}>Bind</button>
        </div>
    );
};

export default BindSN;
