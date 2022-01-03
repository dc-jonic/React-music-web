import './index.scss'
import {useEffect,useRef, useState} from 'react'
import SwiperBanner from '../../components/SwiperBanner/index.jsx'
import TraPart from '../../components/TraPart/index.jsx'
import Singer from '../../components/Singer/index.jsx'
import Music from '../../components/Music/index.jsx'
import BannerOne from '../../components/BannerOne/index.jsx'


function Home(){
    const [subText,setSubText]=useState("LOVE SINGERS")

    

    useEffect(()=>{
        
        
    })

    return(
        <div>
            <SwiperBanner></SwiperBanner>

            {/* 过渡part */}

            <TraPart subText={subText}></TraPart>

            {/* 歌手部分 */}

            <Singer></Singer>

            {/* banner */}
            <BannerOne></BannerOne>

            {/* 过渡part */}

            <TraPart subText="Listen Music"></TraPart>
            
            {/* Music */}
            <Music></Music>

            {/* banner */}
            <BannerOne></BannerOne>
        </div>
    )
}

export default Home
