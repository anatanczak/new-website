import content from './content.fr.json';

export const categories = [
  { id: 'all', label: content['portfolio.projectCategories.all'] },
  { id: 'web', label: content['portfolio.projectCategories.web'] },
  { id: 'ios', label: content['portfolio.projectCategories.ios'] },
  { id: 'uiux', label: content['portfolio.projectCategories.uiux'] }
];

export function portfolioHref(category = 'all') {
  return category === 'all' ? '/portfolio' : `/portfolio/${category}`;
}

export const projects = [
  {
    id: '1',
    name: 'Smart Life',
    tags: ['web', 'uiux'],
    tone: 'lilac',
    thumbnail: '/images/portfolio/smartlife/smartlife_thumbnail.webp',
    description: content['portfolio.project.smartLife.shortDescription'],
    github: 'https://github.com/anatanczak/SmartLife',
    technologies: ['PHP', 'JS', 'HTML', 'CSS', 'Symfony', 'Twig', 'Bootstrap']
  },
  {
    id: '2',
    name: 'New Portfolio',
    tags: ['web', 'uiux'],
    tone: 'mint',
    thumbnail: '/images/portfolio/newPortfolio/new_portfolio_thumbnail.webp',
    description: content['portfolio.project.newPortfolio.shortDescription'],
    github: 'https://github.com/anatanczak/my-website-v2',
    technologies: ['React JS', 'SASS', 'TypeScript'],
    details: {
      quote: content['portfolio.project.newPortfolio.quote'],
      description: content['portfolio.project.newPortfolio.longDescription'],
      images: [
        { src: '/images/portfolio/newPortfolio/new_portfolio_hero_img.webp', alt: 'Page d’accueil du portfolio React' }
      ],
      links: [
        {
          label: content['portfolio.project.newPortfolio.link1'],
          href: 'https://xd.adobe.com/view/3a93144a-c480-4316-91d9-a07e0e60b374-6fc0/grid'
        },
        { label: content['portfolio.project.newPortfolio.link2'], href: 'https://github.com/anatanczak/my-website-v2' }
      ],
      features: Array.from({ length: 6 }, (_, index) => ({
        title: content[`portfolio.project.newPortfolio.feature${index + 1}.title`],
        description: content[`portfolio.project.newPortfolio.feature${index + 1}.description`]
      }))
    }
  },
  {
    id: '3',
    name: 'Blue Snail',
    tags: ['ios'],
    tone: 'grey',
    thumbnail: '/images/portfolio/blueSnail/bluesnail_thumbnail.webp',
    description: content['portfolio.project.blueSnail.shortDescription'],
    github: 'https://github.com/anatanczak/BlueSnail',
    technologies: ['Swift', 'SwiftUI']
  },
  {
    id: '4',
    name: 'Meslistes',
    tags: ['ios'],
    tone: 'grey',
    thumbnail: '/images/portfolio/meslistes/meslistes_thumbnail.webp',
    description: content['portfolio.project.meslistes.shortDescription'],
    github: 'https://github.com/anatanczak/meslistes',
    technologies: ['Swift'],
    details: {
      quote: content['portfolio.project.meslistes.quote'],
      description: content['portfolio.project.meslistes.longDescription'],
      images: [
        { src: '/images/portfolio/meslistes/meslistes_vertical_iphones_light_mode.webp', alt: 'Meslistes — écrans en mode clair' },
        { src: '/images/portfolio/meslistes/meslistes_dark_mode_iphones.webp', alt: 'Meslistes — écrans en mode sombre' },
        { src: '/images/portfolio/meslistes/meslistes_vertical_iphones_dark_mode.webp', alt: 'Meslistes — listes en mode sombre' },
        { src: '/images/portfolio/meslistes/meslistes_hero_image.webp', alt: 'Présentation de l’application Meslistes' }
      ],
      links: [
        {
          label: content['portfolio.project.meslistes.link1'],
          href: 'https://apps.apple.com/us/app/meslistes-a-checklist-app/id1458475140'
        },
        { label: content['portfolio.project.meslistes.link2'], href: 'https://github.com/anatanczak/meslistes' }
      ]
    }
  },
  {
    id: '5',
    name: 'Old Portfolio',
    tags: ['web', 'uiux'],
    tone: 'navy',
    thumbnail: '/images/portfolio/oldPortfolio/old_portfolio_thumbnail.webp',
    description: content['portfolio.project.oldPortfolio.shortDescription'],
    github: 'https://github.com/anatanczak/myWebsite',
    technologies: ['PHP', 'HTML', 'CSS', 'JS']
  },
  {
    id: '6',
    name: 'Success Builder',
    tags: ['ios'],
    tone: 'lilac',
    thumbnail: '/images/portfolio/successBuilder/success_builder_thumbnail.webp',
    description: content['portfolio.project.successBuilder.shortDescription'],
    github: 'https://github.com/anatanczak/Success-Builder',
    technologies: ['Swift']
  }
];

export function getDetailedProject(id) {
  return projects.find(project => project.id === id && project.details);
}
