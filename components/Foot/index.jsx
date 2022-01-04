import { useEffect, useState } from 'react'
import './index.scss'

function foot(){
    const [movice,setMovice]=useState('')


    useEffect(()=>{
    },[])

    return(
        <div className='FootAll'>
            {/* <div className='bk-img'>
                <img src="" alt="" />
            </div> */}
            <div className='container'>
                <div className='logo-img'>
                    <img src="../image/logo.png" alt="" />
                </div>
                <div className='iconList'>
                    <div className='iconfont icon-csdn'></div>
                    <div className='iconfont icon-github-fill'></div>
                    <div className='iconfont icon-hongbao'></div>
                    <div className='iconfont icon-QQ-circle-fill'></div>
                </div>
                <div className='depart'>
                <span className='desinger'>design with by ❤ dingdaxia</span>

                </div>
            </div>
        </div>
    )
}

export default foot