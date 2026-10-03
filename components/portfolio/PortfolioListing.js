import Link from 'next/link';
import PortfolioLayout from './PortfolioLayout';
import ProjectCard from './ProjectCard';
import { categories, portfolioHref, projects } from './projects';
import content from './content.fr.json';
import styles from './portfolio.module.scss';

export default function PortfolioListing({ category = 'all' }) {
  const filtered = projects.filter(project => category === 'all' || project.tags.includes(category));
  const groups = Array.from({ length: Math.ceil(filtered.length / 6) }, (_, index) => (
    filtered.slice(index * 6, index * 6 + 6)
  ));

  return (
    <PortfolioLayout>
      <div className={styles.listing}>
        <h1 className={styles.title}>{content['portfolio.title']}</h1>
        <nav className={styles.categories} aria-label="Catégories de projets">
          {categories.map(item => (
            <Link
              key={item.id}
              href={portfolioHref(item.id)}
              className={styles.category}
              aria-current={item.id === category ? 'page' : undefined}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        {groups.map((group, index) => (
          <div className={styles.grid} key={index}>
            {group.map(project => <ProjectCard project={project} category={category} key={project.id} />)}
          </div>
        ))}
      </div>
    </PortfolioLayout>
  );
}
