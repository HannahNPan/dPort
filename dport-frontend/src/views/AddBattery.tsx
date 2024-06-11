import React, { useState } from 'react';
import { addBattery, addVehicle } from '../api';

const AddBatteryAndVehicle: React.FC = () => {
  const [batteryInfo, setBatteryInfo] = useState({
    bin: '',
    model: '',
    type: '',
    sn: '',
  });

  const [vehicleInfo, setVehicleInfo] = useState({
    carPlate: '',
    make: '',
    model: '',
    vin: '',
  });

  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);

  const walletPublic = "FFkSMVqT3YohjBGVPa9C5VGE5UEN9ceszJ1PBoJiY2JN"; // Replace with actual wallet public key

  const handleBatteryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBatteryInfo({
      ...batteryInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleInfo({
      ...vehicleInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const batteryResponse = await addBattery(walletPublic, batteryInfo.bin, batteryInfo.type, batteryInfo.model, batteryInfo.sn);
      const vehicleResponse = await addVehicle(walletPublic, vehicleInfo.carPlate, vehicleInfo.make, vehicleInfo.model, vehicleInfo.vin);

      if (batteryResponse.status === true && vehicleResponse.status === true) {
        setMessage('Battery and Vehicle added successfully!');
        setMessageType('success');
        setBatteryInfo({ bin: '', model: '', type: '', sn: '' });
        setVehicleInfo({ carPlate: '', make: '', model: '', vin: '' });
      } else {
        setMessage('Failed to add Battery or Vehicle. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Error adding Battery or Vehicle. Please try again.');
      setMessageType('error');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-section p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Add Vehicle</h2>
          <input 
            type="text" 
            name="carPlate"
            placeholder="Car Plate" 
            value={vehicleInfo.carPlate} 
            onChange={handleVehicleChange} 
            className="input input-bordered w-full mb-2"
          />
          <input 
            type="text" 
            name="make"
            placeholder="Make" 
            value={vehicleInfo.make} 
            onChange={handleVehicleChange} 
            className="input input-bordered w-full mb-2"
          />
          <input 
            type="text" 
            name="model"
            placeholder="Model" 
            value={vehicleInfo.model} 
            onChange={handleVehicleChange} 
            className="input input-bordered w-full mb-2"
          />
          <input 
            type="text" 
            name="vin"
            placeholder="VIN" 
            value={vehicleInfo.vin} 
            onChange={handleVehicleChange} 
            className="input input-bordered w-full mb-4"
          />
        </div>
        <div className="form-section p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Add Battery</h2>
          <input 
            type="text" 
            name="bin"
            placeholder="Battery BIN" 
            value={batteryInfo.bin} 
            onChange={handleBatteryChange} 
            className="input input-bordered w-full mb-2"
          />
          <input 
            type="text" 
            name="model"
            placeholder="Model" 
            value={batteryInfo.model} 
            onChange={handleBatteryChange} 
            className="input input-bordered w-full mb-2"
          />
          <input 
            type="text" 
            name="type"
            placeholder="Type" 
            value={batteryInfo.type} 
            onChange={handleBatteryChange} 
            className="input input-bordered w-full mb-2"
          />
          <input 
            type="text" 
            name="sn"
            placeholder="Serial Number" 
            value={batteryInfo.sn} 
            onChange={handleBatteryChange} 
            className="input input-bordered w-full mb-4"
          />
        </div>
      </div>
      <button onClick={handleSubmit} className="btn btn-primary w-full mt-4">Submit</button>
      {message && (
        <div className={`mt-4 p-4 border rounded ${messageType === 'success' ? 'bg-green-200 border-green-600' : 'bg-red-200 border-red-600'}`}>
          {message}
        </div>
      )}
    </div>
  );
}

export default AddBatteryAndVehicle;
