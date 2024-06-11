// src/api.ts
const API_BASE_URL = "http://152.67.199.45:3000/api";

export const login = async (walletPublic: string) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ walletPublic }),
  });
  const data = await response.json();
  return data;
};

export const fetchLeaderboard = async () => {
  const response = await fetch(`${API_BASE_URL}/leaderboard`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const fetchNFTs = async (walletPublic: string) => {
  const response = await fetch(`${API_BASE_URL}/nfts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ walletPublic }),
  });
  const data = await response.json();
  return data;
};

export const addVehicle = async (walletPublic: string, carPlate: string, make: string, model: string, vin: string) => {
  const response = await fetch(`${API_BASE_URL}/vehicle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ walletPublic, carPlate, make, model, vin }),
  });
  const data = await response.json();
  return data;
};

export const addBattery = async (walletPublic: string, batteryBin: string, type: string, model: string, SN: string) => {
  const response = await fetch(`${API_BASE_URL}/battery`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ walletPublic, batteryBin, type, model, SN }),
  });
  const data = await response.json();
  return data;
};
