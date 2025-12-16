'use client';

import { useContext } from 'react';
import { EthereumContext } from '@/contexts/EthereumContext';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const context = useContext(EthereumContext);

  if (!context) {
    throw new Error('Header must be used within an EthereumProvider');
  }

  const { account, isConnected, isConnecting, error, connect, disconnect } = context;

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">NFT Marketplace</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:underline">
              Explore
            </Link>
            <Link href="/create" className="text-sm font-medium transition-colors hover:underline">
              Create
            </Link>
            <Link href="/my-nfts" className="text-sm font-medium transition-colors hover:underline">
              My NFTs
            </Link>
          </nav>

          {/* Wallet Connect Button */}
          <div className="flex items-center gap-4">
            {isConnected && account ? (
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  <span className="text-sm font-mono">
                    {formatAddress(account)}
                  </span>
                </div>
                <Button
                  onClick={disconnect}
                  variant="outline"
                  size="sm"
                >
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button
                onClick={connect}
                disabled={isConnecting}
                size="sm"
              >
                <Wallet className="mr-2 h-4 w-4" />
                {isConnecting ? 'Connecting...' : 'Connect Wallet'}
              </Button>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="pb-3">
            <div className="rounded-lg border p-3 text-sm">
              {error}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
