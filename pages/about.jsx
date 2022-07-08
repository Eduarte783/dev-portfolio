import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div>
            <h1>About</h1>

            <p className={[styles.extraGreen, styles.bigFont].join(" ")}>I am a great engineer</p>
            <div>
                <style jsx>{`
                    .orangeText{
                        color: orange;
                     }
                     p {
                        font-size:70px;
                     }
                `}</style>
            </div>
            
            {/* loading an image locally}*/}
                <Image 
                    src="/Joker.jpeg"
                    alt='my fav villain'
                    width={800}
                    height={500}
                />   
        </div>
    )
}