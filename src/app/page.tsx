'use client';

import { useEffect } from 'react';
import HeroSection from "./components/HeroSection";
import ContentCard from "./components/ContentCard";
import BioSection from "./components/BioSection";
import {
  IoBriefcaseOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoDocumentTextOutline,
} from "react-icons/io5";
import Link from "next/link";

export default function Home() {

  useEffect(() => {
    const sendNotification = async () => {
      // Il token Telegram non è mai esposto nel bundle:
      // la chiamata passa per il Cloudflare Worker in cloudflare-worker/worker.js
      // Imposta NEXT_PUBLIC_NOTIFICATION_WORKER_URL nel tuo .env.local
      // e nei GitHub Actions secrets.
      const workerUrl = process.env.NEXT_PUBLIC_NOTIFICATION_WORKER_URL;

      if (!workerUrl) return;

      const hasNotified = sessionStorage.getItem('visit_notified');
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

      if (!hasNotified && !isLocal) {
        try {
          await fetch(workerUrl, { method: 'POST' });
          sessionStorage.setItem('visit_notified', 'true');
        } catch {
          // Notifica non critica: ignoriamo silenziosamente gli errori
        }
      }
    };

    sendNotification();
  }, []);

  return (
    <div className="text-gray-300 font-sans p-6">
      <div className="container mx-auto relative z-10">
        <main className="mt-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3">
              <HeroSection />
              <div id="bio" className="mt-8">
                <BioSection />
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <Link href="/portfolio" passHref>
                  <ContentCard
                    title="Portfolio"
                    description="My projects and works"
                    icon={<IoBriefcaseOutline size={48} className="text-[#00C2E8]" />}
                  />
                </Link>
                
                <ContentCard
                  id="cv"
                  title="Curriculum Vitae"
                  description="Download my CV"
                  icon={
                    <div className="flex space-x-4">
                      <a href="cv-antonino-trifiro.pdf" download>
                        <IoDocumentTextOutline
                          size={48}
                          className="text-[#00C2E8]"
                        />
                      </a>
                    </div>
                  }
                />
                <ContentCard
                  id="links"
                  title="Links"
                  description="Connect with me"
                  icon={
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/in/antonino-trifir%C3%B2-078869213/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IoLogoLinkedin size={48} className="text-[#00C2E8]" />
                      </a>
                      <a
                        href="https://github.com/sblaker"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IoLogoGithub size={48} className="text-[#00C2E8]" />
                      </a>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}