import bsu from '../assets/images/bsu_logo.jpg'
import ceti from '../assets/images/ceti_logo.jpg'
import arrowLeft from '../assets/images/arrow.png'
import { useState, useEffect } from "react"


const Timeline = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [arrow, setArrow] = useState<number>()
    const [arrowWork, setArrowWork] = useState<number>()

    
    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100)
        return () => clearTimeout(timeout)
    }, []);






    type WorkExperienceProps = {
        imageSource: string,
        workPlaceName: string,
        fromMonth: string,
        fromYear: string,
        toMonth: string,
        toYear: string,
        role: string,
        description: string
    }
    type EducationProps = {
        imageSource: string,
        school: string,
        role: string,
        fromMonth: string,
        fromYear: string,
        toMonth?: string,
        toYear?: string,
        description: string
    }
    const education: EducationProps[] = [
        {
            imageSource: bsu,
            school: 'Benguet State University - Secondary Laboratory School',
            role: 'Vocational Agriculture',
            fromMonth: 'Aug',
            fromYear: '2015',
            toMonth: 'May',
            toYear: '2019',
            description: "Studied and developed skills in vocational agriculture at Benguet State University - Secondary Laboratory School from August 2015 to May 2019. "

        },
        {
            imageSource: bsu,
            school: 'Benguet State University - Secondary Laboratory School',
            role: 'Science, Technology, Engineering, and Mathematics',
            fromMonth: 'Aug',
            fromYear: '2019',
            toMonth: 'Jul',
            toYear: '2021',
            description: "Pursued Science, Technology, Engineering, and Mathematics (STEM) program at Benguet State University - Secondary Laboratory School. Learned a lot of math, it was nice"
        },        
        {
            imageSource: bsu,
            school: 'Benguet State University',
            role: 'Bachelor of Science in Information Technology',
            fromMonth: 'Aug',
            fromYear: '2021',
            description: "Pursuing a Bachelor of Science in Information Technology at Benguet State University, I acquired cool in-depth knowledge and practical skills in various areas of IT, including programming, systems analysis, database management, web development, and network security. This where I found my love for developing apps"
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
            role: "Video Editor",
            description: "Worked as a Video Editor at the Center for Events and Training Innovation, where I was responsible for creating and editing engaging video content for various training events and marketing materials. "
        },
        {
            imageSource: bsu,
            workPlaceName: "Benguet State University",
            fromMonth: "Jan",
            fromYear: "2025",
            toMonth: "Apr",
            toYear: "2025",
            role: "Mobile Developer",
            description: "Worked as a Mobile Developer at Benguet State University, where I contributed to the development of mobile applications aimed at enhancing the university’s digital services. "
        }
        
    ]

    const [workExperienceDesc, setWorkExperienceDesc] = useState<boolean[]>(new Array(workExperiences.length).fill(false))
    const [educExperienceDesc, setEducExperienceDesc] = useState<boolean[]>(new Array(workExperiences.length).fill(false))
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
            workExperiences.map((v,i) => (
            <>
            <div style={{cursor: 'pointer', 
            display: 'flex', 
            marginTop: 12, 
            marginBottom: 12}} 
            onClick={() => setWorkExperienceDesc(prev => {
                const newState = [...prev];
                newState[i] = newState[i] ? false : true
                return newState
            })} 
            onMouseEnter={() => setArrowWork(i)} 
            onMouseLeave={() => setArrowWork(-1)}>
                <img style={{ width: 42, height: 42, }} src={v.imageSource}/>
                <div style={{ flex: 1, paddingLeft: 12 }}>
                    <h4>{v.workPlaceName}</h4>
                    <p style={{ fontSize: 12 }}>{v.role}</p>
                </div>
                {   
                    workExperienceDesc[i] ? (
                        <img style={{ 
                            width: 19, 
                            height: 19, 
                            opacity: arrowWork === i ? 1 : 0,
                            transform: arrowWork === i ? 'translateX(0)' : 'translateX(-20px)',
                            transition: `opacity 0.6s ease 0.06s, transform 0.6s ease 0.06s`,
                            rotate: '-90deg'
                        }} src={arrowLeft}/>
                    ) : (
                        <img style={{ 
                            width: 19, 
                            height: 19, 
                            opacity: arrowWork === i ? 1 : 0,
                            transform: arrowWork === i ? 'translateX(0)' : 'translateX(-20px)',
                            transition: `opacity 0.6s ease 0.06s, transform 0.6s ease 0.06s`,
                        }} src={arrowLeft}/>
                    )

                }

                <div style={{ display: "flex",flex: 1/2, paddingLeft: 12, justifyContent: 'end' }}>
                    <p style={{ fontSize: 14 }}>{`${v.fromMonth} ${v.fromYear} - ${v.toMonth} ${v.toYear}`}</p>
                </div>
            </div>
            {
                workExperienceDesc[i] &&
                    (<div style={{ borderBottomRightRadius: 12, borderBottomLeftRadius: 12, paddingLeft: 20, paddingRight: 20 }}>
                        <p style={{color: 'black', fontSize: 14 }}>
                            {v.description}
                        </p>
                    </div>)
            }

            </>
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
            education.map((v,i) => (
            <>
            <div style={{
                cursor: 'pointer', 
                display: 'flex', 
                marginTop: 12, 
                marginBottom: 12 }}  
                onMouseEnter={() => setArrow(i)} 
                onMouseLeave={() => setArrow(-1)}
                onClick={() => setEducExperienceDesc(prev => {
                    const newState = [...prev];
                    newState[i] = newState[i] ? false : true
                    return newState
                })} >
                <img style={{ width: 42, height: 42, }} src={v.imageSource}/>
                <div style={{ flex: 1, paddingLeft: 12 }}>
                    <h4>{v.school}</h4>
                    <p style={{ fontSize: 12 }}>{v.role}</p>
                </div>

                
                {   
                    educExperienceDesc[i] ? (
                        <img style={{ 
                            width: 19, 
                            height: 19, 
                            opacity: arrow === i ? 1 : 0,
                            transform: arrow === i ? 'translateX(0)' : 'translateX(-20px)',
                            transition: `opacity 0.6s ease 0.06s, transform 0.6s ease 0.06s`,
                            rotate: '-90deg'
                        }} src={arrowLeft}/>
                    ) : (
                        <img style={{ 
                            width: 19, 
                            height: 19, 
                            opacity: arrow === i ? 1 : 0,
                            transform: arrow === i ? 'translateX(0)' : 'translateX(-20px)',
                            transition: `opacity 0.6s ease 0.06s, transform 0.6s ease 0.06s`,
                        }} src={arrowLeft}/>
                    )

                }
                <div style={{ display: "flex", flex: 1/2, paddingLeft: 12, justifyContent: "end" }}>
                    <p style={{ fontSize: 14 }}>{`${v.fromMonth} ${v.fromYear} - ${v.toMonth === undefined && v.toYear === undefined ? 'Present' : `${v.toMonth} -  ${v.toYear}`}`}</p>
                </div>
                
            </div>
                {
                    educExperienceDesc[i] &&
                        (<div style={{ borderBottomRightRadius: 12, borderBottomLeftRadius: 12, paddingLeft: 20, paddingRight: 20, }}>
                            <p style={{color: 'black', fontSize: 14, fontFamily: 'Arial' }}>
                                {v.description}
                            </p>
                        </div>)
                    }
                </>
            ))
            
        }
    </div>  
    </>
    )
}



export default Timeline;