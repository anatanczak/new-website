import Link from 'next/link';
import PortfolioLayout from './PortfolioLayout';
import ProjectCarousel from './ProjectCarousel';
import { portfolioHref } from './projects';
import content from './content.fr.json';
import styles from './project-details.module.scss';

export default function ProjectDetails({ project, category }) {
  const details = project.details;

  return (
    <PortfolioLayout>
      <div className={styles.project}>
        <section className={styles.general} aria-labelledby="project-title">
          <Link
            className={styles.returnLink}
            href={portfolioHref(category)}
            aria-label={content['portfolio.fullProjectDetail.goBackButton']}
            title={content['portfolio.fullProjectDetail.goBackButton']}
          >
            <img src="/icons/back_to_projects_icon.svg" alt="" />
          </Link>
          <h1 id="project-title" className={styles.title}>{project.name}</h1>
          <ul className={styles.technologies} aria-label={content['portfolio.fullProjectDetail.technologies']}>
            {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
          </ul>
          <ProjectCarousel key={project.id} images={details.images} title={project.name} />
          <h2 className={styles.subtitle}>About project</h2>
          <blockquote className={styles.quote}>
            <img src="/icons/quotes-leftside-icon.svg" alt="" />
            <p>{details.quote}</p>
            <img src="/icons/quotes-rightside-icon.svg" alt="" />
          </blockquote>
          <div className={styles.description}>
            {details.description.split('\n').filter(paragraph => paragraph.trim()).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className={styles.links} aria-labelledby="project-links-title">
          <h2 id="project-links-title">{content['portfolio.fullProjectDetail.links']}</h2>
          <ol className={styles.linkList}>
            {details.links.map((link, index) => (
              <li key={link.href}>
                <span className={styles.linkNumber} aria-hidden="true">{index + 1}</span>
                <a href={link.href} className={styles.link}>
                  <span className={styles.highlight}><span>{link.label}</span></span>
                  <span className={styles.arrowCircle}><img src="/icons/darkblue_arrow.svg" alt="" /></span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {details.features && (
          <section className={styles.features} aria-labelledby="project-features-title">
            <h2 id="project-features-title">{content['portfolio.fullProjectDetail.features']}</h2>
            {details.features.map(feature => (
              <article className={styles.feature} key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </section>
        )}
      </div>
    </PortfolioLayout>
  );
}
