import { notFound } from 'next/navigation';
import PortfolioListing from '../../../components/portfolio/PortfolioListing';
import { categories } from '../../../components/portfolio/projects';

export async function generateMetadata({ params }) {
  const { category } = await params;
  const selected = categories.find(item => item.id === category && item.id !== 'all');
  if (!selected) notFound();

  return {
    title: `${selected.label} | Mon portfolio | Anastasia Tanczak`,
    description: `Les projets ${selected.label} d’Anastasia Tanczak.`
  };
}

export default async function PortfolioCategoryPage({ params }) {
  const { category } = await params;
  if (!categories.some(item => item.id === category && item.id !== 'all')) notFound();

  return <PortfolioListing category={category} />;
}
