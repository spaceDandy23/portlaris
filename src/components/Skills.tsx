
const Skills = () => {

    const skills = ["HTML", "CSS", "Javascript", "React", "React Native", 
        "PHP", "Python", "Bootstrap", "Github","Laravel 11", "Adobe After Effects", "Animation"]

    return (
        <div>
            <h2 style={{ marginBottom: 12 }}>Skills</h2>
            <div style={{ marginBottom: 40 }}>
                {   
                skills.map((v) => (
                <div style={{ display: 'inline-block', backgroundColor: 'black', padding:"6px 8px 6px 8px", borderRadius: 6, margin: 2}}>
                    <h5 style={{ color: 'white' }}>{v}</h5>
                </div>
                ))             

                }

            </div>
        </div>
    )
}

export default Skills