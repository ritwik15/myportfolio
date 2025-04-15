import React from 'react';
import { SiAngular, SiReact, SiNodedotjs, SiPostgresql, SiMongodb, SiAmazonaws,SiAwslambda,SiAwsamplify } from 'react-icons/si';
import { FaCloud, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about"  style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.paragraph}>
        I have over 10 years of experience in building and leading teams in full-stack JavaScript development.
        My primary expertise lies in:
      </p>
      
      {/* Categories Row */}
      <div style={styles.categoriesRow}>
        {/* Frontend Skills */}
        <div style={styles.category}>
          <h3 style={styles.subheading}>
            <SiAngular size={20} style={styles.icon} />
            Frontend
          </h3>
          <ul style={styles.list}>
            <li><SiAngular size={20} style={styles.icon} /> Angular</li>
            <li><SiReact size={20} style={styles.icon} /> React.js</li>
          </ul>
        </div>
        
        {/* Backend Skills */}
        <div style={styles.category}>
          <h3 style={styles.subheading}>
            <SiNodedotjs size={20} style={styles.icon} />
            Backend
          </h3>
          <ul style={styles.list}>
            <li><SiNodedotjs size={20} style={styles.icon} /> Node.js</li>
            <li><FaCode size={20} style={styles.icon} /> API Development</li>
          </ul>
        </div>

        {/* Database Skills */}
        <div style={styles.category}>
          <h3 style={styles.subheading}>
            <SiPostgresql size={20} style={styles.icon} />
            Database
          </h3>
          <ul style={styles.list}>
            <li><SiPostgresql size={20} style={styles.icon} /> PostgreSQL</li>
            <li><SiMongodb size={20} style={styles.icon} /> MongoDB</li>
          </ul>
        </div>

        {/* Cloud Skills */}
        <div style={styles.category}>
          <h3 style={styles.subheading}>
            <SiAwsamplify size={20} style={styles.icon} />
            Cloud
          </h3>
          <ul style={styles.list}>
            <li><SiAwslambda size={20} style={styles.icon} /> AWS (EC2, Lambda, S3)</li>
          </ul>
        </div>
      </div>

      <p style={styles.paragraph}>
        Currently, I am focusing on mastering React.js, improving JavaScript/Node.js coding challenge skills,
        and preparing for interviews.
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px 20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    margin: '0 auto 40px auto',
  },
  heading: {
    fontSize: '28px',
    color: '#0070f3',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '22px',
    color: '#0070f3',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#333',
  },
  categoriesRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px', // Space between categories
    marginTop: '20px',
  },
  category: {
    flex: '1 1 220px', // Flex grow, shrink, and basis
    maxWidth: '220px', // Set max width to maintain consistency
    marginBottom: '40px',
  },
  list: {
    paddingLeft: '20px',
    marginBottom: '20px',
    color: '#444',
  },
  icon: {
    marginRight: '10px',
    color: '#0070f3',
  },
};

export default About;
