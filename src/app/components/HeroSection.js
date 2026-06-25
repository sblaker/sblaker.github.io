import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-[#1C1C1C] p-6 rounded-3xl shadow-lg relative">
      <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6">
        <Image
          src="/profile.jpg"
          alt="Antonino Trifirò"
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="flex flex-col space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#00C2E8]">
          Blue Team · SOC Analyst
        </span>
        <h1 className="text-4xl font-bold text-white">Antonino Trifirò</h1>
        <p className="text-gray-400 leading-relaxed">
          Ingegnere informatico specializzato in Cybersecurity. Laureando magistrale
          a luglio 2026 all&apos;Università di Palermo, con tesi su sistemi IDS
          per il rilevamento di attacchi zero-day tramite Machine Learning.
        </p>
      </div>
    </div>
  );
}
