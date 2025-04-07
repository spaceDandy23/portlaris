import pfp from '../assets/images/pfp.jpg'
import { useEffect, useState } from 'react';

const Introduction = () => {
      const [visible, setVisible] = useState(false);
    
      useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timeout);
      }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'row', marginBottom: 40}}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ fontSize: 48,
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(40px)',
                            transition: 'opacity 0.6s ease, transform 0.6s ease'
                 }}>Hello, I'm Polaris ✨</h1>
                <p style = {{ fontSize: 22, color: 'black',
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(60px)',
                            transition: 'opacity 0.6s ease, transform 0.6s ease'
                 }}>
                    I enjoy doing frontend and backend development, 
                    though i lean more on backend development.
                    Does that make me a full stack developer still? Idk tbh.
                </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(50px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease'
             }}>
                <img style={{ width: 180, height: 180, borderRadius: '10%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} src={pfp}/>
            </div>  
        </div>
    )

}


export default Introduction