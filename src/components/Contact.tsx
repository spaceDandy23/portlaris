import { useEffect, useState } from 'react';


const Contact = ({ isVisible }: { isVisible: boolean }) => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        if(isVisible){
            let time = setTimeout(() => {
                setVisible(true)
            }, 100)

            return () => clearInterval(time)
        }
        }
    )
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginBottom: 90 }}>
            <h3 style={{ backgroundColor: 'black', color: "white", padding:"6px 8px 6px 8px", borderRadius: 6, margin: 30, background: 'linear-gradient(to right,rgb(193, 193, 193),rgb(14, 7, 3)',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}>Contact</h3>
            <h1 style={{ fontSize: 48, 
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(60px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}>Get in Touch</h1>
            <p style = {{ fontSize: 18,                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(80px)',
                            transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
                If you have any projects in mind, whether it's an idea you're still brewing, a feature you need help building, or just something cool you want to collaborate on. Feel free to chat me in <span style={{ color: 'blue' }}><a style={{ textDecoration: 'none' }} href="https://www.instagram.com/star_kelp_man23/">Instagram </a></span>with a direct question, or email me at <span style={{ color: 'blue' }}>carlospolarislubrica@gmail.com</span>
            </p>
        </div> 
    )

}


export default Contact;