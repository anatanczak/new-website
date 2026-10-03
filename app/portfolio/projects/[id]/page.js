import { notFound } from 'next/navigation';
import ProjectDetails from '../../../../components/portfolio/ProjectDetails';
import { categories, getDetailedProject } from '../../../../components/portfolio/projects';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getDetailedProject(id);
  if (!project) notFound();

  return {
    title: `${project.name} | Mon portfolio | Anastasia Tanczak`,
    description: project.description
  };
}

export default async function ProjectPage({ params, searchParams }) {
  const { id } = await params;
  const project = getDetailedProject(id);
  if (!project) notFound();

  const query = await searchParams;
  const category = categories.some(item => item.id === query.category) ? query.category : 'all';
  return <ProjectDetails project={project} category={category} />;
}
