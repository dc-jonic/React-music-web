import { useEffect,useRef, useState } from 'react';
import './index.scss'

function traPart({subText}){
    let _farget=document.createElement('div')
    const domAppend=useRef(null)



    _farget.className='lineBarList'
    

    const createElemetBar=(number,ownStyle)=>{
        for (let index = 0; index <number; index++) {
            let _style=ownStyle
            let _dombar=document.createElement('div'),
                _mask=document.createElement('div')
            _mask.className='mask'
            _dombar.className='lineBar'
            Object.keys(_style).forEach((key,index)=>{
                _dombar.style[key]=_style[key]
            })
            _mask.appendChild(_dombar)
            _farget.appendChild(_mask)
        }
        //渲染到lineBarBox
        domAppend.current.appendChild(_farget)
        
        

        //实现动画
        
        setInterval(() => {
            new TweenMax('.lineBar', 0.38, {
                top:()=>{
                    return Math.random()*20+1
                },
                yoyo:true,
                repeat:-1
            });
        }, 400);
    }


    useEffect(()=>{
        let a=false
        if (a==false) {
            a=true
            createElemetBar(10,{
                background:'linear-gradient(to top,#d73fd0,#207be0)',
                width:'3px',
                height: '20px'
            })
        }
        
    },[])

    return(
        <div className='AllPart'>
            <div className='lineBarBox' ref={domAppend}>
                
            </div>
            <div className='titleText'>
                DINGDAXIA MUSIC
            </div>

            <div className='subtitle'>
                {subText}
            </div>
        </div>
    )
}

export default traPart