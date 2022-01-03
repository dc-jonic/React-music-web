import { useEffect, useRef,useState } from 'react'
import './index.scss'

function loading({
    isLoading
}){
    let [isLoadingPage,setIsLoading]=useState(isLoading)
    const domRender=(renderDom,text)=>{
        const textArray=text.split('')
        console.log("textArray",textArray);
        let forgert=document.createElement('div')
        forgert.className='textAll'
        textArray.forEach(element => {
            let _dom=document.createElement('div')
            _dom.className='text-loading'
            _dom.innerText=element
            forgert.appendChild(_dom)
        });
        document.querySelector(renderDom).appendChild(forgert)
    }


    useEffect(()=>{
        window.addEventListener("load", function(event) {
          console.log("DOM文档已加载完成");
          setIsLoading(false)
        });


        if (isLoadingPage==true) {
            domRender('.textAll','Loading...')
            TweenMax.staggerTo(".text-loading", 1, {
                y:-20,
                repeat:-1,
                yoyo:true,
                color:'#0f73cc'
            }, 0.1);
        
            new TweenMax('.loadingImg',1.28,{
                rotation:15,
                yoyo:true,
                repeat:-1
            })
        }
    })


    return (
        isLoadingPage==true&&
        <div className='LoadingPage'>
            <div className='all'>
                <div className='loadingImg'>
                    <img src="../image/note.png" alt="" />
                </div>
                <div className='textAll'>

                </div>
            </div>
        </div>
    )
}

export default loading