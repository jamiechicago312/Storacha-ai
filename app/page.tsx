import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-dm-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={150} height={40} className="mr-8" />
          <div className="space-x-6">
            <Link href="https://google.com" className="text-blue-1 hover:text-blue-3 transition-colors">
              GitHub
            </Link>
            <Link href="https://google.com" className="text-blue-1 hover:text-blue-3 transition-colors">
              Docs
            </Link>
            <Link href="/" className="text-blue-1 hover:text-blue-3 transition-colors">
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-epilogue text-4xl md:text-5xl font-bold mb-4">
            Welcome to Storacha
          </h1>
          <h3 className="font-epilogue text-2xl md:text-3xl text-blue-1 mb-4">
            The Next Generation Storage Solution
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="/graphic.png"
            alt="Feature Graphic"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </section>

      {/* Code Block Section */}
      <section className="bg-[#08265F] py-16">
        <div className="container mx-auto px-8">
          <div className="bg-black rounded-lg p-6 font-mono">
            <pre className="overflow-x-auto">
              <code>git clone https://github.com/yourusername/storacha.git</code>
            </pre>
          </div>
          <div className="flex justify-center mt-8 space-x-6">
            <Link
              href="https://google.com"
              className="bg-blue-1 hover:bg-blue-3 text-white px-8 py-3 rounded-lg transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://google.com"
              className="bg-blue-1 hover:bg-blue-3 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Docs
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-8 py-16">
        <h1 className="font-epilogue text-4xl font-bold mb-6 text-center">About Storacha</h1>
        <p className="text-lg max-w-3xl mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#08265F] py-16">
        <div className="container mx-auto px-8 text-center">
          <Link
            href="https://google.com"
            className="bg-blue-1 hover:bg-blue-3 text-white px-8 py-3 rounded-lg inline-block mb-12 transition-colors"
          >
            Learn About Storacha
          </Link>
          <div className="flex justify-center space-x-8">
            <Link href="https://google.com" className="hover:opacity-80 transition-opacity">
              <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
            </Link>
            <Link href="https://google.com" className="hover:opacity-80 transition-opacity">
              <Image src="/reddit.svg" alt="Reddit" width={24} height={24} />
            </Link>
            <Link href="https://google.com" className="hover:opacity-80 transition-opacity">
              <Image src="/github.svg" alt="GitHub" width={24} height={24} />
            </Link>
            <Link href="https://google.com" className="hover:opacity-80 transition-opacity">
              <Image src="/medium.svg" alt="Medium" width={24} height={24} />
            </Link>
            <Link href="https://google.com" className="hover:opacity-80 transition-opacity">
              <Image src="/bluesky.svg" alt="BlueSky" width={24} height={24} />
            </Link>
            <Link href="https://google.com" className="hover:opacity-80 transition-opacity">
              <Image src="/discord.svg" alt="Discord" width={24} height={24} />
            </Link>
            <Link href="https://google.com" className="hover:opacity-80 transition-opacity">
              <Image src="/farcaster.svg" alt="Farcaster" width={24} height={24} />
            </Link>
            <Link href="https://google.com" className="hover:opacity-80 transition-opacity">
              <Image src="/x.svg" alt="X" width={24} height={24} />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
