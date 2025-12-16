'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { BrowserProvider, JsonRpcSigner, Network } from 'ethers';

interface EthereumContextType {
  provider: BrowserProvider | null;
  signer: JsonRpcSigner | null;
  account: string | null;
  network: Network | null;
  isConnecting: boolean;
  isConnected: boolean;
  error: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

export const EthereumContext = createContext<EthereumContextType | undefined>(undefined);

interface EthereumProviderProps {
  children: ReactNode;
}

export function EthereumProvider({ children }: EthereumProviderProps) {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [network, setNetwork] = useState<Network | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize provider on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const browserProvider = new BrowserProvider(window.ethereum);
      setProvider(browserProvider);
    }
  }, []);

  // Get network information
  const updateNetwork = useCallback(async (provider: BrowserProvider) => {
    try {
      const network = await provider.getNetwork();
      setNetwork(network);
    } catch (err) {
      console.error('Error getting network:', err);
    }
  }, []);

  // Connect wallet
  const connect = useCallback(async () => {
    if (!provider) {
      setError('No Ethereum provider found. Please install MetaMask.');
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      // Request account access
      await provider.send('eth_requestAccounts', []);

      // Get signer and account
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setSigner(signer);
      setAccount(address);
      setIsConnected(true);

      // Get network info
      await updateNetwork(provider);
    } catch (err: any) {
      console.error('Error connecting wallet:', err);
      setError(err.message || 'Failed to connect wallet');
      setIsConnected(false);
    } finally {
      setIsConnecting(false);
    }
  }, [provider, updateNetwork]);

  // Disconnect wallet
  const disconnect = useCallback(() => {
    setSigner(null);
    setAccount(null);
    setIsConnected(false);
    setError(null);
  }, []);

  // Handle account changes
  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        // User disconnected wallet
        disconnect();
      } else if (accounts[0] !== account) {
        // Account changed
        setAccount(accounts[0]);
        // Refresh signer
        if (provider) {
          provider.getSigner().then(setSigner).catch(console.error);
        }
      }
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);

    return () => {
      window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
    };
  }, [account, provider, disconnect]);

  // Handle chain/network changes
  useEffect(() => {
    if (!window.ethereum || !provider) return;

    const handleChainChanged = () => {
      // Reload the page on chain change (recommended by MetaMask)
      window.location.reload();
    };

    window.ethereum.on('chainChanged', handleChainChanged);

    return () => {
      window.ethereum?.removeListener('chainChanged', handleChainChanged);
    };
  }, [provider]);

  // Check if already connected on mount
  useEffect(() => {
    const checkConnection = async () => {
      if (!provider) return;

      try {
        const accounts = await provider.send('eth_accounts', []);
        if (accounts.length > 0) {
          const signer = await provider.getSigner();
          const address = await signer.getAddress();

          setSigner(signer);
          setAccount(address);
          setIsConnected(true);

          await updateNetwork(provider);
        }
      } catch (err) {
        console.error('Error checking connection:', err);
      }
    };

    checkConnection();
  }, [provider, updateNetwork]);

  const value: EthereumContextType = {
    provider,
    signer,
    account,
    network,
    isConnecting,
    isConnected,
    error,
    connect,
    disconnect,
  };

  return (
    <EthereumContext.Provider value={value}>
      {children}
    </EthereumContext.Provider>
  );
}


