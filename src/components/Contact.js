import React from 'react'

import '../styles/contact.css'

export const Contact = () => {
    return (
        <aside className="contact__bar">
            <a 
                id="contact__linkedin"
                href="https://www.linkedin.com/in/jesusgonzalezalvarez/" 
                target="_blank" 
                rel="noreferrer"
                className="contact__icon fa fa-linkedin"
            > </a>
            <a 
                id="contact__github"
                href="https://github.com/JesusGonzalezA" 
                target="_blank" 
                rel="noreferrer"
                className="contact__icon fab fa-github"
            > </a>
            <a 
                id="contact__google"
                href="mailto:jesusgranada99@gmail.com?Subject=Hi%20Jesús!" 
                className="contact__icon fab fa-google"
            > </a>
            <a 
                id="contact__twitter"
                href="https://twitter.com/JesusGonADev" 
                target="_blank" 
                rel="noreferrer"
                className="contact__icon fa fa-twitter"
            > </a>
    </aside>
    )
}
