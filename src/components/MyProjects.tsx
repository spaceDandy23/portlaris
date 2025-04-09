import { useState } from "react"
import github from '../assets/images/github_logo.png'
import instagram from '../assets/images/instagram_logo.png'
import simonAndBetty from '../assets/images/simon_and_betty.jpg'
import hatsuneMiku from '../assets/images/miku.jpg'
import whiplash from '../assets/images/whiplash.jpg'
import fallenAngels from '../assets/images/fallen_angels.jpg'
import bsu from '../assets/images/bsu_logo_white_bg.jpg'
import eabono from '../assets/images/eabono_logo.png'


const styles = {

    button: { 
        margin: 4,
        backgroundColor: 'white', 
        width: "50%", 
        height: 40, 
        borderRadius: 4,
        borderWidth: 0,
        display: "flex", 
        justifyContent: 'center', 
        alignItems: 'center',
        cursor: "pointer",
    },
    notClicked: { 
        margin: 4,
        width: "50%", 
        height: 40, 
        borderWidth: 0,
        display: "flex", 
        justifyContent: 'center', 
        alignItems: 'center',
        cursor: "pointer",
        backgroundColor: '#e3e3e3'
    }
    
}
type CardProp = {

    imgSource?: string,
    title: string,
    yearMade: string,
    techStack?: string[],
    sourceLink?: string,
    imgLink: string,
    description: string

}



const MyProjects = () => {


    const [developed, setDeveloped] = useState<boolean>(true)

    const cardsDeveloped: CardProp[] = [
        {
            imgSource: eabono,
            title: "Eabono",
            yearMade: "2025",
            techStack: ["React Native", "TypeScript", "Expo Go", "SQLite", "Styled-Components"],
            sourceLink: "https://github.com/spaceDandy23/Eabono.git",
            imgLink: github,
            description: "Mobile application for a special project in Benguet State University, it involves making the use of AI for tracking nitrogen level of a cabbage or potato, cool stuff"
        },
        {
            imgSource: bsu,
            title: "Alw@d Always",
            yearMade: "2025",
            techStack: ["Laravel 11", "Javascript", "Blade", "Bootstrap", "HTML", "CSS", "SQL"],
            sourceLink: "https://github.com/spaceDandy23/alw-d-always.git",
            imgLink: github,
            description: "Attendance monitoring system that makes use of RFID technology for Benguet State University, Making use of laravel 11 a very famous php framework"
        }
    ]

    const cardsVideos: CardProp[] = [
        
        {
            imgSource: hatsuneMiku,
            title: "Hatsune Miku",
            yearMade: "2025",
            sourceLink: "https://www.instagram.com/p/DG97cfHPKnp/",
            imgLink: instagram,
            description: "A randomized Hatsune Miku AMV-style edit showcasing vibrant visuals, quick transitions, and synced beats to highlight her most iconic moments. Just something I put together for fun, mixing rhythm and aesthetic"
        },
        {
            imgSource: simonAndBetty,
            title: "Simon and Betty",
            yearMade: "2024",
            sourceLink: "https://www.instagram.com/p/Cyak_kRSgTB/?img_index=1",
            imgLink: instagram,
            description: "Simon and Betty, back when things were still somewhat normal before Simon completely lost it. They had their fair share of wild moments, they were quirky, they were genuinely happy. But then, things started to change :(("
        },
        {
            imgSource: whiplash,
            title: "Obsession",
            yearMade: "2024",
            sourceLink: "https://www.instagram.com/p/CtTVP1TyH6_/?img_index=1",
            imgLink: instagram,
            description: "This is a whiplash edit I put together, combining cool stuff, high-energy cuts with a bit of typography. I aimed to capture that raw, adrenaline-pumping feeling you get from the film, but with my own twist "
        },
        {
            imgSource: fallenAngels,
            title: "Fallen Angels",
            yearMade: "2023",
            sourceLink: "https://www.instagram.com/p/CvEYgaiybn4/?img_index=1",
            imgLink: instagram,
            description: "Best wong kar wai film I've ever watched"
        },


    ]

    return (
        <>
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginBottom: 40 }}>
            <h3 style={{ backgroundColor: 'black', color: "white", padding:"6px 8px 6px 8px", borderRadius: 6, margin: 30, background: 'linear-gradient(to right,rgb(119, 119, 119),rgb(14, 7, 3)'}}>My projects</h3>
            <h1 style={{ fontSize: 48,  }}>My latest projects</h1>
            <p style = {{ fontSize: 18}}>
                Coding projects I've made, also videos I've edited. Stuff like backend systems, mobile apps. 
                On the videos, some were commissions, and others were personal AMVs I made just for fun.
            </p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 4, backgroundColor: '#e3e3e3', marginBottom: 40}}>
            <button onClick={() => {
                setDeveloped(true)
            }} style={developed ? styles.button : styles.notClicked}>
                <h3>Developed</h3>
            </button>
            <button onClick={() => {
                setDeveloped(false)
            }} style={developed ? styles.notClicked : styles.button}>
                <h3>Videos</h3>
            </button>
        </div>
        {
            developed ? (
                <div style={{display: 'flex',  borderRadius: 4, backgroundColor: '#e3e3e3', flexWrap: 'wrap'}}>
                {

                    cardsDeveloped.map((v) => (
                        
                        <CardComponent imgSource={v.imgSource} title={v.title} yearMade={v.yearMade} techStack={v.techStack} sourceLink={v.sourceLink} description={v.description} imgLink={v.imgLink}/>
                    ))
                }
                </div>
            ) : (
                <div style={{display: 'flex',borderRadius: 4, backgroundColor: '#e3e3e3', flexWrap: 'wrap'}}>
                {
                        cardsVideos.map((v) => (
                        <CardComponent imgSource={v.imgSource} title={v.title} yearMade={v.yearMade} sourceLink={v.sourceLink} description={v.description} imgLink={v.imgLink}/>
                    ))
                }
                </div>
            )
        }

        </>
    )
}

const CardComponent = ({ imgSource, title, yearMade,techStack,sourceLink,description, imgLink} : CardProp) => {



    return  (
        
        <div style={{height: 480,width: "calc(50% - 12px)", backgroundColor: 'white', borderRadius: 4, margin: 6}}>
            {
                imgSource ? (
                    <>
                    {
                        !techStack ? (
                            <a href={sourceLink}><img src={imgSource} alt={description} style={{ height: 240, width: "100%", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}/></a>
                        ) : (
                            <img src={imgSource} alt={description} style={{ height: 240, width: "100%", borderTopLeftRadius: 4, borderTopRightRadius: 4}}/>
                        )
                    }
                    </>
                ) : (
                    <div style={{ backgroundColor: 'grey', height: 240, borderTopLeftRadius: 4, borderTopRightRadius: 4}}></div>
                )
            }
            <div style={{ padding: 4 }}>
                <h4 style={{ margin: 6 }}>{title}</h4>
                <h5 style={{ margin: 6 }}>{yearMade}</h5>
                <p style={{ fontSize: 14, margin: 6, height: 60}}>{description}</p>
                {
                    techStack ? ( 
                    <>
                    <div style={{ height: 70}}>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {
                                techStack?.map((v) => (
                                    <h4 style={{ fontSize: 12, display: 'inline-block', color: 'black', backgroundColor: '#e3e3e3', padding: 6, margin: 3, borderRadius: 4, textWrap: 'pretty' }}>{v}</h4>
                                ))
                            }
                        </div>
                    </div>
                    <a href={sourceLink} 
                        style={{    
                            margin: 3, 
                            padding: 6, 
                            width: 60, 
                            height: 15, 
                            display:'flex', 
                            background: 'black', 
                            alignItems: 'center', 
                            justifyContent: 'space-between', 
                            borderRadius: 4,
                            marginTop: 'auto',
                            textDecoration: 'none'}}>
                        <img src={imgLink} alt="Icon"  style={{ width: 15, height: 15 }}/>
                        <h4 style={{ fontSize: 12, color: 'white' }}>Source</h4>
                    </a> 
                    </>
                    ) : (
                    <div/>
                    )
                }
            </div>
        </div>

    )
}

export default MyProjects