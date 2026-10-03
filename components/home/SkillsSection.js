import RevealGroup from './RevealGroup';
import styles from './skills.module.scss';

const groups = [
  [
    { category: 'mobile', ratio: 5, label: 'Swift' },
    { category: 'front', ratio: 9, label: 'CSS' },
    { category: 'back', ratio: 6, label: 'PHP' },
    { category: 'front', ratio: 7, label: 'JS' }
  ],
  [
    { category: 'front', ratio: 6, label: 'React JS' },
    { category: 'back', ratio: 2, label: 'C#' },
    { category: 'design', ratio: 8, label: 'XD' }
  ],
  [
    { category: 'back', ratio: 3, label: 'Node.js' },
    { category: 'mobile', ratio: 2, label: 'Java' }
  ],
  [
    { category: 'front', ratio: 9, label: 'HTML' },
    { category: 'back', ratio: 5, label: 'MySQL' },
    { category: 'design', ratio: 5, label: 'AI' },
    { category: 'front', ratio: 7, label: 'TS' }
  ]
];

function Bubbles({ skills, start }) {
  return skills.map((skill, index) => (
    <div className={styles.bubbleSlot} key={skill.label}>
      <div
        className={styles.bubble}
        data-reveal
        data-category={skill.category}
        style={{ '--bubble-ratio': skill.ratio, '--bubble-index': start + index }}
      >
        <div className={styles.ball}><p>{skill.label}</p></div>
      </div>
    </div>
  ));
}

export default function SkillsSection({ title }) {
  return (
    <section aria-labelledby="skills-title">
      <RevealGroup className={styles.skills}>
        <div className={styles.left}><Bubbles skills={groups[0]} start={0} /></div>
        <div className={styles.center}>
          <div className={styles.upper}><Bubbles skills={groups[1]} start={4} /></div>
          <div className={styles.computer}><h2 id="skills-title">{title}</h2></div>
          <div className={styles.lower}><Bubbles skills={groups[2]} start={7} /></div>
        </div>
        <div className={styles.right}><Bubbles skills={groups[3]} start={9} /></div>
      </RevealGroup>
    </section>
  );
}
