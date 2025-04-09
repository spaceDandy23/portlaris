





const Contact = () => {

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginBottom: 40 }}>
            <h3 style={{ backgroundColor: 'black', color: "white", padding:"6px 8px 6px 8px", borderRadius: 6, margin: 30, background: 'linear-gradient(to right,rgb(193, 193, 193),rgb(14, 7, 3)'}}>Contact</h3>
            <h1 style={{ fontSize: 48,   }}>Get in Touch</h1>
            <p style = {{ fontSize: 18}}>
                If you have any projects in mind, whether it's an idea you're still brewing, a feature you need help building, or just something cool you want to collaborate on. Feel free to chat me in <span style={{ color: 'blue' }}><a style={{ textDecoration: 'none' }} href="https://www.instagram.com/star_kelp_man23/">Instagram </a></span>with a direct question, or email me at <span style={{ color: 'blue' }}>carlospolarislubrica@gmail.com</span>
            </p>
        </div> 
    )

}


export default Contact;