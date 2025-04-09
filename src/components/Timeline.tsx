import bsu from '../assets/images/bsu_logo.jpg'
import ceti from '../assets/images/ceti_logo.jpg'
import { useState, useEffect } from "react"


const Timeline = () => {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    type WorkExperienceProps = {
        imageSource: string,
        workPlaceName: string,
        fromMonth: string,
        fromYear: string,
        toMonth: string,
        toYear: string,
        role: string
    }
    type EducationProps = {
        imageSource: string,
        school: string,
        role: string,
        fromMonth: string,
        fromYear: string,
        toMonth?: string,
        toYear?: string,
    }
    const education: EducationProps[] = [
        {
            imageSource: bsu,
            school: 'Benguet State University - Secondary Laboratory School',
            role: 'Vocational Agriculture',
            fromMonth: 'Aug',
            fromYear: '2015',
            toMonth: 'May',
            toYear: '2019'

        },
        {
            imageSource: bsu,
            school: 'Benguet State University - Secondary Laboratory School',
            role: 'Science, Technology, Engineering, and Mathematics',
            fromMonth: 'Aug',
            fromYear: '2019',
            toMonth: 'Jul',
            toYear: '2021'

        },
        {
            imageSource: bsu,
            school: 'Benguet State University',
            role: 'Bachelor of Science Information Technology ',
            fromMonth: 'Aug',
            fromYear: '2021',

        }
    ]
    const workExperiences: WorkExperienceProps[] = [
        {
            imageSource: ceti,
            workPlaceName: "Center for Events and Training Innovation",
            fromMonth: "Dec",
            fromYear: "2020",
            toMonth: "Jun",
            toYear: "2021",
            role: "Video Editor"
        },
        {
            imageSource: bsu,
            workPlaceName: "Benguet State University",
            fromMonth: "Jan",
            fromYear: "2025",
            toMonth: "Apr",
            toYear: "2025",
            role: "Mobile Developer"
        }
    ]


    return(
    <>
    <div style={{ 
        marginBottom: 40,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(140px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
         }}> 
        <h2>Work Experiences</h2>
        {
            workExperiences.map((v) => (
            <div style={{display: 'flex', marginTop: 12, marginBottom: 12}}>

                <img style={{ width: 42, height: 42, }} src={v.imageSource}/>
                <div style={{ flex: 1, flexDirection: 'column', paddingLeft: 12 }}>
                    <h4>{v.workPlaceName}</h4>
                    <p style={{ fontSize: 12 }}>{v.role}</p>
                </div>
                <div style={{ display: "flex",flex: 1/2, paddingLeft: 12, justifyContent: 'end' }}>
                    <p>{`${v.fromMonth} ${v.fromYear} - ${v.toMonth} ${v.toYear}`}</p>
                </div>
            </div>

            ))
        }
    </div>  
    <div style={{ 
        marginBottom: 40,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(160px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
        
        }}> 
        <h2>Education</h2>
        {
            education.map((v) => (
            <div style={{display: 'flex', marginTop: 12, marginBottom: 12}}>
                <img style={{ width: 42, height: 42, }} src={v.imageSource}/>
                <div style={{ flex: 1, flexDirection: 'column', paddingLeft: 12 }}>
                    <h4>{v.school}</h4>
                    <p style={{ fontSize: 12 }}>{v.role}</p>
                </div>
                <div style={{ display: "flex", flex: 1/2, paddingLeft: 12, justifyContent: "end" }}>
                    <p>{`${v.fromMonth} ${v.fromYear} - ${v.toMonth === undefined && v.toYear === undefined ? 'Present' : `${v.toMonth} -  ${v.toYear}`}`}</p>
                </div>
            </div>

            ))
        }
    </div>  
    </>
    )
}



export default Timeline;