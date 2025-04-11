import github from '../assets/images/github_logo_black.png'
import instagram from '../assets/images/instagram_logo.png'
import linkedin from '../assets/images/linked_in_logo.png'
import leetcode from '../assets/images/leetcode_logo.png'
import { useState, useEffect } from 'react'


const Links = () => {
    const [left, setLeft] = useState('40%')
    const styles = {

        imageSize: {
            width: 20,
            height: 20
        }
    }
    




    //unfortnute for position sticky :(( HJAHAHAHA
    useEffect(() => {


        const handleResize = () => {
            if (window.innerWidth < 450) {
                setLeft('15%')
            } 
            else if (window.innerWidth < 650){
                setLeft('24%')
            }
            else if (window.innerWidth < 700){
                setLeft('27%')
            }
            else if (window.innerWidth < 730){
                setLeft('29%')
            }
            else if (window.innerWidth < 750){
                setLeft('29%')
            }
            else if (window.innerWidth < 900){
                setLeft('30%')
            }
            else if (window.innerWidth < 1200){
                setLeft('35%')
            }
            
            else {
                setLeft('40%')
            }
        }


        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })






    
    return (

        <div style={{ 
            position: 'fixed', 
            zIndex: 1, 
            backgroundColor: 'red', 
            width: 300, 
            height: 60, 
            display:'flex', 
            justifyContent: 'space-evenly', 
            alignItems: 'center',
            borderRadius: 24,
            background: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            bottom: 10,
            left: left,

            }}>
            <div className="socialIcon">
                <a href="https://github.com/spaceDandy23">
                    <img style={styles.imageSize} src={github} alt="Github" />
                </a>
            </div>
            <div className="socialIcon">
                <a href="https://www.instagram.com/star_kelp_man23">
                    <img style={styles.imageSize} src={instagram} alt="Instagram" />
                </a>
            </div>
            <div className="socialIcon">
                <a href="https://www.linkedin.com/in/lubrica-carlos-polaris-r-74aa9429a/">
                    <img style={styles.imageSize} src={linkedin} alt="Linkedin" />
                </a>
            </div>
            <div className="socialIcon">
                <a href="https://leetcode.com/u/space_dandy23">
                    <img style={styles.imageSize} src={leetcode} alt="Leetcode" />
                </a>
            </div>
        </div>
    )
}


export default Links