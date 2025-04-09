import byte from '../assets/images/byte_logo.jpg'
import bsu from '../assets/images/bsu_logo.jpg'
import masters from '../assets/images/masters.png'
import { useState, useEffect } from 'react'

type AchievementsProp = {
    title: string,
    org: string,
    dateIssued: string,
    imgSource: string,
    sec?: string
}
const Achievements = () => {
    const [visible, setVisible] = useState(false)
        useEffect(() => {
            let time = setTimeout(() => {
                setVisible(true)
            }, 100)
    
            return () => clearInterval(time)
        }, [])
    


    const achievements: AchievementsProp[] = [
        {
            title: "Programming Competition",
            org: "Body of Young Information Technology",
            dateIssued: "2024",
            imgSource: byte
        },
        {
            title: "Programming Competition",
            org: "Body of Young Information Technology",
            dateIssued: "2025",
            imgSource: byte
        },
        {
            title: "Video Editing Contest",
            org: "Benguet State University",
            dateIssued: "2019",
            imgSource: bsu
        },
        {
            title: "League of Legends",
            org: "Riot Games",
            dateIssued: "2020",
            imgSource: masters
        }
    ]

    return (
    <>
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginBottom: 40 }}>
        <h3 style={{ backgroundColor: 'black', color: "white", padding:"6px 8px 6px 8px", borderRadius: 6, margin: 30, background: 'linear-gradient(to right,rgb(119, 119, 119),rgb(14, 7, 3)',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.6s ease 0.03s, transform 0.6s ease 0.03s`,
        }}>Achievements</h3>
        <h1 style={{ fontSize: 48,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.6s ease 0.04s, transform 0.6s ease 0.04s`,  }}>Some of my achievements</h1>
        <p style = {{ fontSize: 18,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.6s ease 0.06s, transform 0.6s ease 0.06s`,
        }}>
            It ain't much but it's honest work, though looking forward to have more achievements
        </p>
    </div> 
    <div style={{display: 'flex',  borderRadius: 4,  flexWrap: 'wrap'}}>
        {
            achievements.map((v, i) => (
                
                <CardAchievements title={v.title} org={v.org} dateIssued={v.dateIssued} imgSource={v.imgSource} sec={`${i * 0.1}s`}/>
            ))
        }
    </div>
    </>

    )

}

const CardAchievements = ({title, org, dateIssued, imgSource, sec }: AchievementsProp ) => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        let time = setTimeout(() => {
            setVisible(true)
        }, 100)

        return () => clearInterval(time)
    }, [])


    return (
        <div style={{
            width: "calc(33% - 12px)", 
            borderRadius: 4, 
            margin: 6, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(50px)',
            transition: `opacity 0.6s ease ${sec}, transform 0.6s ease ${sec}`,
            }}>
            <img src={imgSource} alt={dateIssued} style={{ height: 180, width: 180, margin: 6 }}/>
            <h5 style={{ marginBottom: 9 }}>{title}</h5>
            <p style={{ fontSize: 12, marginBottom: 6 }}>{org}</p>
            <p style={{ fontSize: 12 }}>{dateIssued}</p>
        </div>
    )

}


export default Achievements;