import Image from "next/image";
// 'Link' import has been removed because it was not being used.

export default function HeroSection() {
  return (
    <div className="bg-[#1C1C1C] p-6 rounded-3xl shadow-lg relative">
      <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6">
        <Image
          src="/profile.jpg"
          alt="Antonino Trifirò"
          fill // Modern Next.js syntax for filling the parent container
          className="object-cover rounded-2xl" // Replaces the old 'objectFit' prop
        />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2 text-gray-400">
          <span className="text-sm font-semibold uppercase">
            Cybersecurity Enthusiast
          </span>
        </div>
        <h1 className="text-4xl font-bold text-white">Antonino Trifirò</h1>
        <p className="text-lg text-gray-400">
          Computer Engineering student specializing in cybersecurity, currently
          working on my master&apos;s thesis.
        </p>
      </div>
    </div>
  );
}