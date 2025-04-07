import { useState } from "react"

const styles = {
    button: {
        cursor: 'pointer',
        display: 'flex',
        backgroundColor: 'white',
        flex: 1/2,
        height: "80%",
        margin: 5,
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'center'
    },
    notClicked: {
        cursor: 'pointer',
        display: 'flex',
        flex: 1/2,
        alignItems:'center',
        justifyContent: 'center',
        height: "100%",

    }

    
}


const MyProjects = () => {


    const [developed, setDeveloped] = useState<boolean>(true)


    return (
        <>
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginBottom: 40 }}>
            <h2>My projects</h2>
            <h1 style={{ fontSize: 48 }}>My latest projects</h1>
            <p style = {{ fontSize: 18}}>
                Coding projects I've made, also videos I've edited. Stuff like backend systems, mobile apps. 
                On the videos, some were commissions, and others were personal AMVs I made just for fun.
            </p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',height: 40, borderRadius: 8, backgroundColor: '#e3e3e3'}}>
            <div onClick={() => {
                setDeveloped(true)
            }} style={developed ? styles.button : styles.notClicked }>
                Developed
            </div>
            <div onClick={() => {
                setDeveloped(false)
            }} style={developed ? styles.notClicked : styles.button }>
                Videos
            </div>

            <div>
                
            </div>
        </div>


        </>
    )
}

export default MyProjects