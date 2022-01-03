import { useCallback, useEffect, useState } from 'react'
import './index.scss'
import APlayer from 'APlayer';
import 'APlayer/dist/APlayer.min.css';



function music(){
    const [musicData,setMusicData]=useState([
        {
            id:0,
            url:'../assest/music/陈奕迅 - 你给我听好.mp3',
            name:'你给我听好',
            time:'04:10',
            artist:'陈奕迅',
            cover:'../image/singers/cyx.png'
        },
        {
            id:1,
            url:'../assest/music/陈奕迅 - 爱情转移.mp3',
            name:'爱情转移',
            time:'03:10',
            artist:'陈奕迅',
            cover:'../image/singers/cyx.png'
        },
        {
            id:2,
            url:'../assest/music/陈奕迅 - Shall We Talk.mp3',
            name:'Shall We Talk',
            time:'04:10',
            artist:'陈奕迅',
            cover:'../image/singers/cyx.png'
        },
        {
            id:3,
            url:'../assest/music/陈奕迅 - 不要说话.mp3',
            name:'不要说话',
            time:'04:10',
            artist:'陈奕迅',
            cover:'../image/singers/cyx.png'
        },
        {
            id:4,
            url:'../assest/music/陈奕迅 - 陀飞轮.mp3',
            name:' 陀飞轮',
            time:'04:00',
            artist:'陈奕迅',
            cover:'../image/singers/cyx.png'
        }
    ])
    const [checkIndex,setCheckIndex]=useState(0)

    const [audioPlayer,setAudioPlayer]=useState('')


    let ap=''

    const createDom=(musicMsg)=>{
        console.log("进入");
        ap=new APlayer({
            container: document.querySelector('.playMusic'),
            fixed: true,
            audio: [
                {
                    ...musicMsg,
                    fixed: true,
                }
            ]
        })
        setAudioPlayer(ap)
        ap.play()
        console.log(audioPlayer,'1111111111111111');
    }

    // setTimeout(() => {
    //     const changeMusicPlay=(music)=>{
    //         createDom(music)
    //     }
    // }, 1000);

    // const changeMusicPlay=(music,index)=>{
    //     setCheckIndex(index)
    //     if (ap=='') {
    //         console.log(ap);
    //         createDom(music)
    //         ap.play()
    //         return
    //     }
    //     ap.list.add(music)
    //     // ap.skipForward()
    //     ap.play()
    // }

    const changeMusicPlay=(music,index)=>{
        setCheckIndex(index)
        document.querySelector('.musicName').innerText=music.name
        document.querySelector('.singer').innerText=music.artist
        if (audioPlayer=='') {
            console.log("playplayplayplayplay");
            createDom(music)
            return
        }
        audioPlayer.list.add(music)
        audioPlayer.skipForward()
        audioPlayer.play()
    }


    useEffect(()=>{
        console.log("页面刷新了",audioPlayer);
        new TweenMax('.rightSinger',8,{
            rotation:360,
            repeat:-1,
            ease:Power0.easeInOut
        })
    },[])

    return(
        <div className='allPart'>
            <div className='playMusic'></div>
            <div className='centerPart'>
                <div className='leftMusicList'>
                    <div className='isPlayMusic'>
                        <div className='musicName'>你给我听好</div>
                        <div className='singer'>陈奕迅</div>
                    </div>
                    <div className='musicList'>
                        {
                            musicData.map((item,index)=>(
                                <div onClick={()=>changeMusicPlay(item,index)} className={['all',index==checkIndex?'isPlay':''].join(' ')} key={index}>
                                    <div className='left'>
                                        <span className='index'>{index+1}.</span><span>{item.name}</span>
                                    </div>
                                    <div className='right'>
                                        <span>{item.time}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='rightSinger'>
                    <div className='diez'>
                        <img className='die' src="../image/diez.png" alt="" />
                        <div className='floorImgBox'>
                            <img src="../image/dieheard.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default music