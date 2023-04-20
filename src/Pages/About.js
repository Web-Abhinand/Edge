import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import styles from './About.module.css'
import AboutUsImg from '../Assets/drawing282.jpg'
const About = () => {
  return (
    <>
        <Header></Header>
          <div className={styles.about_main_div}>
            <div className={styles.about_main_div_flex1}>
              <div className={styles.about_main_div_flex1_textdiv}>
                <h1 className='text-7xl font-medium leading-tight text-primary' style={{fontFamily: 'Source Sans Pro'}}>About Us</h1>
                <p className='text-slate-500' style={{fontFamily:'Montserrat',width:'90%',lineHeight:'1.8rem',textAlign:'justify'}}>
                The main focus of this integrated program - (JEE MAINS+KEAM+NEET) is to develop solid foundation of concepts & fundamentals, and to sharpen analytical thinking, reasoning and problem-solving skills of a student, which are essential ingredients for success in competitive examinations. Through this course, the students will be given proper guidance to help them take on the Board as well as competitive exams.  
                </p>
                <button variant="contained" className={styles.aboutRegister}>Register</button>
              </div>
            </div>
            <div className={styles.about_main_div_flex2}>
              <img src={AboutUsImg}></img>
            </div>
          </div>
        {/* <Footer /> */}
    </>
  )
}

export default About