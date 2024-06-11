import React, { useEffect, useState } from 'react';
import { fetchNFTs } from '../api';

interface NFT {
  id: string;
  name: string;
  image: string;
}

const Profile: React.FC = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const walletPublic = "FFkSMVqT3YohjBGVPa9C5VGE5UEN9ceszJ1PBoJiY2JN"; // Replace with actual wallet public key

  useEffect(() => {
    const getNFTs = async () => {
      const data = await fetchNFTs(walletPublic);
      if (data.status) {
        setNfts(data.data.map((nft: any) => ({
          id: nft.id,
          name: nft.nft_name,
          image: nft.nft_image,
        })));
      }
    };
    getNFTs();
  }, [walletPublic]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {nfts.map(nft => (
          <div key={nft.id} className="card shadow-lg rounded-lg p-4">
            <img src={nft.image} alt={nft.name} className="rounded-t-lg" />
            <div className="p-2">
              <h3 className="text-lg font-semibold">{nft.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
