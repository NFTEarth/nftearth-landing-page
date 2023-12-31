import Image from "next/image";
import React from 'react';

/*const data = [
  { label: 'Arbitrum', address: '0x51B902f19a56F0c8E409a34a215AD2673EDF3284' },
  { label: 'Optimism', address: '0x8637725aDa78db0674a679CeA2A5e0A0869EF4A1' },
  { label: 'Polygon', address: '0x492Fa53b88614923937B7197C87E0F7F8EEb7B20' },
  { label: 'Avalanche', address: '0xD47E4F1ef1AA4090bc27420BDD5cB379Ced81440' },
  { label: 'BNB Chain', address: '0x1912A3504E59d1C1B060bf2d371DEB00b70E8796' },
  { label: 'Linea', address: '0x2140Ea50bc3B6Ac3971F9e9Ea93A1442665670e4' },
  { label: 'Mantle', address: '0x3E173b825ADEeF9661920B91A8d50B075Ad51bA5' },
  { label: 'Ethereum', address: '0x8c223a82e07fecb49d602150d7c2b3a4c9630310' },
  { label: 'Base', address: '0xc2106ca72996e49bBADcB836eeC52B765977fd20' },
  ];*/


/*const AddressItem: React.FC<{ label: string; address: string }> = ({ label, address }) => (
  <>
    <strong>{label}:</strong> {address}
    <br />
  </>
);*/

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Omnichain NFT Hub
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://app.nftearth.exchange"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by NFTΞarth{" "}
            <Image
              src="/vercel.svg"
              alt="NFTEarth Logo"
              className="dark"
              width={80}
              height={22}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark"
          src="/next.svg"
          alt="NFTEarth Logo"
          width={350}
          height={200}
          priority
        />
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
      <a
          href="https://nftearth.exchange"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            App{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Head straight to the NFTEarth Application to explore top NFT collections, bridge NFTE cross-chain, and play onchain games.
          </p>
        </a>
        <a
          href="https://www.sushi.com/swap?fromChainId=42161&fromCurrency=NATIVE&toChainId=42161&toCurrency=0x51B902f19a56F0c8E409a34a215AD2673EDF3284"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
           Swap NFTE{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Get some Omnichain NFTE tokens to begin your journey in the NFTEarth ecosystem.
          </p>
        </a>
          <a
          href="https://docs.nftearth.exchange"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about our vision for NFTs or get in touch with us on X at @NFTEarth_L2 or via email at team@nftearth.exchange
          </p>
        </a>
      </div>
    </main>
  );
}
