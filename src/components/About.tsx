import { useEffect, useState } from 'react';

const styles = {
  boldUnderline: {
    textDecoration: 'underline',
    color: 'black',
    fontWeight: 'bold'
  }
};

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'white',
        marginBottom: 40,
      }}
    >
      <h2 style={{ 
        marginBottom: 12,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(80px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
        }}>About me</h2>
      <p style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(100px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}>
        I go to school at{' '}
        <span style={styles.boldUnderline}>Benguet State University</span>,&nbsp;
        currently taking a Bachelor of Science and Technology degree program. I
        specialize in web development.&nbsp;
        <span style={styles.boldUnderline}>
          I like coding, especially when it's about, Web Development, UI design, Data Structures and
          Algorithms. Learning DSA has led me to participate in programming
          competitions.
        </span>
        &nbsp;In 2024, I proudly secured 1st place in the programming
        competition held in our school, but in 2025, I got outclassed by stronger competitors.
        Despite that, I continue to challenge myself by solving{' '}
        <span style={styles.boldUnderline}>LeetCode problems</span> in my spare
        time, while Im still not good at DSA, im still tryna hone my skills and now currently trying to master backtracking algorithm.
      </p>
    </div>
  );
};

export default About;
