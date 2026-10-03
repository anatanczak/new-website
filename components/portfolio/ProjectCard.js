import Link from 'next/link';
import content from './content.fr.json';
import styles from './project-card.module.scss';

export default function ProjectCard({ project, category }) {
  const actionLabel = content[project.details ? 'portfolio.project.seeProjectLink' : 'portfolio.project.seeCodeLink'];
  const actionClass = styles.action;
  const accessibleLabel = `${actionLabel} — ${project.name}`;

  return (
    <article className={styles.card} data-tone={project.tone}>
      <h2 className={styles.frontTitle}>{project.name}</h2>
      <img className={styles.thumbnail} src={project.thumbnail} alt={`Aperçu du projet ${project.name}`} loading="lazy" />
      <div className={styles.details}>
        <h2 className={styles.overlayTitle}>{project.name}</h2>
        <div className={styles.separator} />
        <ul className={styles.technologies} aria-label="Technologies">
          {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
        </ul>
        <p className={styles.description}>{project.description}</p>
        {project.details ? (
          <Link
            className={actionClass}
            href={`/portfolio/projects/${project.id}${category === 'all' ? '' : `?category=${category}`}`}
            aria-label={accessibleLabel}
          >
            {actionLabel}
          </Link>
        ) : (
          <a className={actionClass} href={project.github} aria-label={accessibleLabel}>{actionLabel}</a>
        )}
      </div>
    </article>
  );
}
