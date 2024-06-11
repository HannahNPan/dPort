import React from 'react';

const Rewards: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="reward-section p-4 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Realworld Rewards</h3>
          <ul className="list-disc list-inside">
            <li>Discount vouchers</li>
            <li>Product trade-ins</li>
            <li>Free garage services</li>
            <li>Car insurance</li>
            <li>Charging devices</li>
            <li>In-car accessories</li>
          </ul>
          <p className="mt-2">
            Subject to point scheme exchange agreements with partners.
          </p>
        </div>
        <div className="reward-section p-4 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Web3 Campaign</h3>
          <ul className="list-disc list-inside">
            <li>Green Hero race</li>
            <li>$BONK airdrop</li>
          </ul>
        </div>
        <div className="reward-section p-4 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Onchain Trading</h3>
          <ul className="list-disc list-inside">
            <li>Buy $DPT with points</li>
            <li>Stake $SOL</li>
            <li>Pay with $SOL</li>
            <li>Get paid in $DPT</li>
            <li>Swap $BONK</li>
          </ul>
          <p className="mt-2">
            The dual-token system works by using $SOL for network stability and $DPT or points for utility.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
