import { useEffect } from 'react'
import './index.scss'



function singer(){
    useEffect(()=>{
        console.log("singer页面");
    })

    return(
        <div className='Allpart'>
            <div className='SingerList'>
                <div className='SingerItem'>
                    <div className='SingerImg'>
                        <img src="../image/singers/cyx.png" alt="" />
                    </div>

                    <div className='SingerName'>
                        Eason Chan
                    </div>

                    <div className='SingerDes'>
                        陈奕迅（Eason Chan），1974年7月27日出生于中国香港，祖籍广东省东莞市 [1]  ，华语流行乐男歌手、演员、作曲人，毕业于英国金斯顿大学。
                    </div>

                    <div className='btnMore'>
                        Learn More 
                    </div>
                </div>

                <div className='SingerItem'>
                    <div className='SingerImg'>
                        <img src="../image/singers/zjl.png" alt="" />
                    </div>

                    <div className='SingerName'>
                        Jay Chou
                    </div>

                    <div className='SingerDes'>
                        周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市，祖籍福建省泉州市永春县，中国台湾流行乐男歌手、音乐人、演员、导演、编剧，毕业于淡江中学。
                    </div>

                    <div className='btnMore'>
                        Learn More 
                    </div>
                </div>

                <div className='SingerItem'>
                    <div className='SingerImg'>
                        <img src="../image/singers/lyj.png" alt="" />
                    </div>

                    <div className='SingerName'>
                        Yoga Lin
                    </div>

                    <div className='SingerDes'>
                    林宥嘉（Yoga Lin），1987年7月1日出生于台湾省屏东县，中国台湾流行乐男歌手、音乐制作人、演员，毕业于国立东华大学运动与休闲学系。
                    </div>

                    <div className='btnMore'>
                        Learn More 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default singer