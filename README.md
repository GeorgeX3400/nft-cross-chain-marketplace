# Cross-Chain NFT Marketplace

A decentralized NFT marketplace built with Solidity and Next.js that enables users to mint, buy, sell, and trade NFTs across multiple blockchain networks.

## Tech Stack

- **Smart Contracts**: Solidity
- **Frontend**: Next.js
- **Web3 Integration**: ethers.js 
- **Cross-Chain**: LayerZero / Wormhole
- **Blockchain Networks**: Ethereum, Polygon, Arbitrum, Optimism, Base, etc.

## Features

- Multi-chain NFT minting and trading
- Cross-chain NFT transfers
- Fixed-price listings and auctions
- Royalty management
- Collection management
- User profiles and reputation system
- Gasless transactions (meta-transactions)

---

## User Stories

#### US-1: Connect Wallet
**As a** user
**I want to** connect my Web3 wallet (MetaMask, WalletConnect, Coinbase Wallet)
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
**I want to** mint a single NFT with metadata
**So that** I can create and own a unique digital asset

 
- User can upload image/video/audio file
- User can enter name, description, and properties
- User can select blockchain network
- User can set royalty percentage (0-10%)
- Metadata is uploaded to IPFS/Arweave
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

#### US-5: Transfer NFT Cross-Chain
**As an** NFT owner
**I want to** transfer my NFT to a different blockchain
**So that** I can access different ecosystems and marketplaces

 
- User selects NFT to transfer
- User selects destination chain
- User confirms cross-chain transaction
- NFT locked/burned on source chain
- NFT minted/unlocked on destination chain
- Cross-chain message verified
- User receives NFT on destination chain

#### US-6: View Cross-Chain Listings
**As a** buyer
**I want to** see NFT listings from multiple chains in one interface
**So that** I can browse all available NFTs regardless of chain

- Marketplace aggregates listings from all supported chains
- Chain indicator displayed on each NFT
- User can filter by chain
- Prices normalized to USD or preferred currency
- Cross-chain gas estimates shown

#### US-7: Purchase NFT Cross-Chain
**As a** buyer
**I want to** buy an NFT listed on a different chain
**So that** I don't need to bridge funds manually
 
- User can purchase NFT on chain A while on chain B
- Cross-chain bridge handles token transfer
- NFT transferred to buyer on destination chain
- Seller receives payment on their chain
- Single transaction flow from user perspective


#### US-8: Search NFTs
**As a** user
**I want to** search for specific NFTs or collections
**So that** I can quickly find what I'm looking for

- Search bar prominently displayed
- Search by NFT name, collection name, or address
- Real-time search suggestions
- Search results paginated
- Recent searches saved

#### US-9: Filter and Sort NFTs
**As a** user
**I want to** filter and sort NFT listings
**So that** I can find NFTs matching my criteria

 
- Filter by price range
- Filter by blockchain network
- Filter by listing type (buy now, auction)
- Filter by traits/attributes
- Sort by price, rarity, recently listed, ending soon
- Filters can be combined

#### US-10: View NFT Details
**As a** user
**I want to** view detailed information about an NFT
**So that** I can make informed purchase decisions
 
- High-resolution media displayed
- Metadata shown (name, description, properties)
- Current owner displayed
- Creator information shown
- Price history chart
- Transaction history visible
- Traits and rarity scores displayed

