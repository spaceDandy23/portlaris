import byte from '../assets/images/byte_logo.jpg'
import bsu from '../assets/images/bsu_logo.jpg'
import masters from '../assets/images/masters.png'

type AchievementsProp = {
    title: string,
    org: string,
    dateIssued: string,
    imgSource: string
}
const Achievements = () => {



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
        <h3 style={{ backgroundColor: 'black', color: "white", padding:"6px 8px 6px 8px", borderRadius: 6, margin: 30, background: 'linear-gradient(to right,rgb(119, 119, 119),rgb(14, 7, 3)'}}>Achievements</h3>
        <h1 style={{ fontSize: 48,   }}>Some of my achievements</h1>
        <p style = {{ fontSize: 18}}>
            It ain't much but it's honest work, though looking forward to have more achievements
        </p>
    </div> 
    <div style={{display: 'flex',  borderRadius: 4,  flexWrap: 'wrap'}}>
        {
            achievements.map((v) => (
                <CardAchievements title={v.title} org={v.org} dateIssued={v.dateIssued} imgSource={v.imgSource}/>
            ))
        }
    </div>
    </>

    )

}

const CardAchievements = ({title, org, dateIssued, imgSource }: AchievementsProp ) => {
    return (
        <div style={{
            width: "calc(33% - 12px)", 
            borderRadius: 4, 
            margin: 6, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center'
            }}>
            <img src={imgSource} alt={dateIssued} style={{ height: 180, width: 180, margin: 6 }}/>
            <h5 style={{ marginBottom: 9 }}>{title}</h5>
            <p style={{ fontSize: 12, marginBottom: 6 }}>{org}</p>
            <p style={{ fontSize: 12 }}>{dateIssued}</p>
        </div>
    )

}


export default Achievements;