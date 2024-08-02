import React from 'react'
import styles from '../style'
import { aboutMe } from '../constants'

const Hero = () => (
    <div className={`${styles.flexStart} flex-col`}>
        <h1 className={`${styles.heading2} text-center`}>About me</h1>
        <p className={`${styles.paragraph} w-full text-center`}>{aboutMe}</p>
    </div>
  )

export default Hero