

// special SSR image component
import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div>
            <h1>About</h1>

            <p className={[styles.extraGreen, styles.bigFont].join(" ")}>I am a super cool software engineer now. I make super cool stuff with the codes.</p>
            <div>
                <style jsx>{`
                    .orangeText {
                        color: orange;
                    }
                    p {
                        font-size: 70px;
                    }
                `}</style>
                <p className="orangeText">I love to code and would love to code for your company!</p>
            </div>
            
            {/* loading an image locally}*/}
                <Image 
                    src="/Joker.jpeg"
                    alt='my fav villain'
                    width={800}
                    height={500}
                />  
                            {/* this works too! */}
            {/* <img src='/killer-bunny.jpg' alt='villan' /> */}
                <Image 
                    src='https://placekitten.com/300/300'
                    alt="a magnigicent creature"
                    width={300}
                    height={300}
                />
        </div>
    )
} 
        