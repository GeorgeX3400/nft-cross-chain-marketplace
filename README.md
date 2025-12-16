# Cross-Chain NFT Marketplace

A decentralized NFT marketplace built with Solidity and Next.js that enables users to mint, buy and sell NFTs across multiple blockchain networks.

## Tech Stack

- **Smart Contracts**: Solidity
- **Frontend**: Next.js
- **Web3 Integration**: ethers.js 
- **Cross-Chain**: LayerZero / Wormhole
- **Blockchain Networks**: Ethereum, Polygon, Arbitrum, Optimism, etc.

## Features

- Authentication with email and connect to MetaMask wallet
- Multi-chain NFT minting and selling
- Cross-chain NFT transfers
- Fixed-price listings 
- Collection management
- User profiles

---

## User Stories

#### US-1: Connect Wallet
**As a** user
**I want to** connect my Web3 wallet (MetaMask)
**So that** I can interact with the marketplace and manage my NFTs

 
- User can click "Connect Wallet" button
- Multiple wallet options are displayed (MetaMask, WalletConnect, etc.)
- Wallet connection status is displayed in the UI
- User's address is shown in shortened format (0x1234...5678)
- User can disconnect their wallet

#### US-2: View Account Balance
**As a** user
**I want to** see my native token balance and NFT count
**So that** I know what assets I have available

 
- Native token balance displayed (ETH, MATIC, etc.)
- Total NFT count shown
- Balance updates in real-time
- Multi-chain balances aggregated

#### US-3: Mint NFT
**As a** creator
**I want to** mint an NFT 
**So that** I can create and own a unique digital asset

 
- User can upload image/video/audio file
- User can enter name, description, and properties
- User can select blockchain network
- User can set royalty percentage (0-10%)
- Metadata is uploaded to IPFS
- Transaction confirmation displayed
- NFT appears in user's collection


#### US-4: Buy NFT 
**As a** buyer
**I want to** purchase an NFT at the listed price
**So that** I can own the NFT immediately

- User can view NFT details and price
- "Buy Now" button is clearly visible
- User confirms transaction in wallet
- Payment transferred to seller
- NFT transferred to buyer's wallet
- Listing removed from marketplace


#### US-5: View Cross-Chain Listings
**As a** buyer
**I want to** see NFT listings from multiple chains in one interface
**So that** I can browse all available NFTs regardless of chain

- Marketplace aggregates listings from all supported chains
- Chain indicator displayed on each NFT
- User can filter by chain
- Prices normalized to USD or preferred currency
- Cross-chain gas estimates shown

#### US-6: Purchase NFT Cross-Chain
**As a** buyer
**I want to** buy an NFT listed on a different chain
**So that** I don't need to bridge funds manually
 
- User can purchase NFT on chain A while on chain B
- Cross-chain bridge handles token transfer
- NFT transferred to buyer on destination chain
- Seller receives payment on their chain
- Single transaction flow from user perspective


#### US-7: Search NFTs
**As a** user
**I want to** search for specific NFTs or collections
**So that** I can quickly find what I'm looking for

- Search bar prominently displayed
- Search by NFT name, collection name, or address
- Real-time search suggestions
- Search results paginated
- Recent searches saved

#### US-8: Filter and Sort NFTs
**As a** user
**I want to** filter and sort NFT listings
**So that** I can find NFTs matching my criteria

 
- Filter by price range
- Filter by blockchain network
- Filter by listing type (buy now, auction)
- Filter by traits/attributes
- Sort by price, rarity, recently listed, ending soon
- Filters can be combined

#### US-9: View NFT Details
**As a** user
**I want to** view detailed information about an NFT
**So that** I can make informed purchase decisions
 
- High-resolution media displayed
- Metadata shown (name, description, properties)
- Current owner displayed
- Creator information shown
- Transaction history visible
- Traits and rarity scores displayed

