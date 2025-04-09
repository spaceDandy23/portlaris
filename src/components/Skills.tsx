import { useState, useEffect } from "react";

const Skills = ({ isVisible }: { isVisible: boolean }) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (isVisible) {
            const timeout = setTimeout(() => setVisible(true), 100);
            return () => clearTimeout(timeout);
        }
    }, [isVisible])

    const skills = [
        "HTML", "CSS", "Javascript", "React", "React Native",
        "PHP", "Python", "Bootstrap", "Github", "Laravel 11",
        "Adobe After Effects", "Animation"
    ];

    return (

            <div>
            <h2 style={{ 
                marginBottom: 12,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease' }}>Skills</h2>
            <div style={{ marginBottom: 40 }}>
                {skills.map((v, i) => (
                    <div
                        key={i}
                        style={{
                            display: 'inline-block',
                            backgroundColor: 'black',
                            padding: "6px 8px",
                            borderRadius: 6,
                            margin: 2,
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(20px)',
                            transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                        }}
                        >
                        <h5 style={{ color: 'white' }}>{v}</h5>
                    </div>
                ))}
            </div>
        </div>


    )
};

export default Skills;
