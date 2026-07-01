import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { myProjects, Project, ProjectSection } from "../../../data/projects";
import type { Metadata } from "next";

// ✅ Tipi aggiornati per Next.js 15
interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ✅ Generazione delle rotte statiche
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return myProjects.map((project) => ({
    slug: project.slug,
  }));
}

// ✅ Metadata dinamico con params asincroni
export async function generateMetadata(
  { params }: ProjectPageProps
): Promise<Metadata> {
  const { slug } = await params; // Aggiunto await
  const project = myProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Antonino Trifirò`,
    description: project.description,
    keywords: project.technologies,
    openGraph: {
      title: `${project.title} | Antonino Trifirò`,
      description: project.description,
      url: `https://sblaker.github.io/portfolio/${project.slug}`,
      type: "article",
      images: [
        {
          url: `https://sblaker.github.io${project.imageUrl}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [`https://sblaker.github.io${project.imageUrl}`],
    },
  };
}

// ✅ Pagina principale con params asincroni
export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params; // Aggiunto await
  const project: Project | undefined = myProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <p className="text-gray-400 mb-8">
          The project you are looking for does not exist.
        </p>
        <Link href="/portfolio" className="text-[#00C2E8] hover:underline">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white p-8">
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository link"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <IoLogoGithub size={32} />
            </a>
          )}
        </div>
        <Link
          href="/portfolio"
          className="text-[#00C2E8] hover:text-cyan-400 transition-colors duration-300"
        >
          ← Torna al Portfolio
        </Link>
      </header>

      <div className="bg-[#1C1C1C] p-8 rounded-3xl shadow-lg">
        {project.imageUrl && (
          <div className="relative w-full h-80 mb-6 rounded-xl overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={`Project image: ${project.title}`}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        )}

        <div className="mb-6 space-y-6">
          {project.sections.map((section: ProjectSection) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside space-y-1">
                  {section.content.map((item: string) => (
                    <li key={item} className="text-gray-400">{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">{section.content}</p>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-2">Tecnologie utilizzate:</h3>
        <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 text-gray-300 text-xs rounded-full px-3 py-1 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
