import './index.scss'
import {useEffect,useRef} from 'react'

function SwiperBanner(params) {
    const bigCirleRef=useRef(null)
    const smallCirleRef=useRef(null)
    let aearMsg={}
    let interGetheight=''

    const getDomMsg=(dom)=>{
        return new Promise((resolve,reject)=>{
            console.log("clientWidth",dom.clientWidth);
            console.log("clientHeight",dom.clientHeight);
            aearMsg.canMoveX=dom.clientWidth;
            aearMsg.canMoveY=dom.clientHeight
            interGetheight=setInterval(() => {
                console.log("clientHeight",dom.clientHeight);
                if (dom.clientHeight!=0) {
                    clearInterval(interGetheight)
                    //轨迹大小
                    resolve({
                        canMoveX:dom.clientWidth,
                        canMoveY:dom.clientHeight
                    })
                }
            }, 1000);
        })
    }


    


    const colorRandom=()=>{
        var r = Math.floor(Math.random() * 256); //随机生成256以内r值
        var g = Math.floor(Math.random() * 256); //随机生成256以内g值
        var b = Math.floor(Math.random() * 256); //随机生成256以内b值
        return `rgb(${r},${g},${b})`; //返回rgb(r,g,b)格式颜色
    }

    const domMove=(dom,areaX,areaY,width,height)=>{
        let doChange=()=>{
            dom.forEach((item,index)=>{
                let top=Math.floor(Math.random()*(areaY-item.clientHeight)+1)
                let left=Math.floor(Math.random()*(areaX-item.clientWidth)+1)
                if (top<0) {
                    top=0
                }
                if(left<0){
                    left=0
                }
                // console.log("zhix",top,left);
                item.style.top=top+'px'
                item.style.left=left+'px'
                item.style.backgroundColor=colorRandom()
                
            })
            
        }
        doChange()
        setInterval(() => {
            smallBarFollow()
        }, 1000);
        setInterval(() => {
            doChange()
        }, 3000);
    }

    const smallBarFollow=()=>{
        document.querySelectorAll('.smallcircle').forEach((smallItem,index)=>{
            document.querySelectorAll('.bigcircle').forEach((bigItem,index)=>{
                if ((bigItem.offsetTop-smallItem.offsetTop<25&&bigItem.offsetTop-smallItem.offsetTop>-25)&&(bigItem.offsetLeft-smallItem.offsetLeft<25&&bigItem.offsetLeft-smallItem.offsetLeft<-25)) {
                    let smallBarTop=Math.floor(Math.random()*bigItem.style.top.replace(/px/g,'')+1)+'px',
                        smallBarLeft=Math.floor(Math.random()*bigItem.style.left.replace(/px/g,'')+1)+'px'
                    smallItem.style.top=smallBarTop
                    smallItem.style.left=smallBarLeft
                    // console.log("小球跟着大球走",smallBarLeft,smallBarTop);
                }
            })
        })
    }
    
    const bigcircleRender=(num,renderDom,width,height,canMoveX,canMoveY)=>{
        const cirlceNumber=num
        let _fragment=document.createElement('div')
        for (let index = 0; index < cirlceNumber; index++) {
            let top=Math.floor(Math.random()*canMoveY+1)-150
            let left=Math.floor(Math.random()*canMoveY+1)-150
            if (top<0) {
                top=0
            }
            if(left<0){
                left=0
            }
            let _dom= document.createElement('div')
            _dom.setAttribute('class','bigcircle circle')
            _dom.setAttribute('style',`top:${top}px;left:${left}px;background-color:${colorRandom()};width:${width};height:${height}`)
            _dom.style.width=width
            _dom.style.height=height
            _fragment.appendChild(_dom)
        }
        // renderDom.innerHTML=_html
        renderDom.appendChild(_fragment)
        document.querySelectorAll('.bigcircle').forEach((domItem,index)=>{
            new TimelineMax({
                repeat:-1,
                yoyo:true,
            }).to(domItem,Math.random()+0.4,{
                width:domItem.clientWidth*1.25,
                height:domItem.clientWidth*1.25,
                ease: Circ.easeOut,
                glowFilter:'#fff'
            })
        })

        
        
        domMove(document.querySelectorAll('.bigcircle'),canMoveX,canMoveY,width,height)
        
    }

    const smallcircleRender=(num,renderDom,width,height,canMoveX,canMoveY)=>{
        const cirlceNumber=num
        let _fragment=document.createElement('div')
        for (let index = 0; index < cirlceNumber; index++) {
            let top=Math.floor(Math.random()*canMoveY+1)-150
            let left=Math.floor(Math.random()*canMoveX+1)-150
            if (top<0) {
                top=0
            }
            if(left<0){
                left=0
            }
            console.log(top,left);
            let _dom= document.createElement('div')
            _dom.setAttribute('class','smallcircle circle')
            _dom.setAttribute('style',`top:${top}px;left:${left}px;background-color:${colorRandom()};width:${width};height:${height}`)
            _dom.style.width=width
            _dom.style.height=height
            _fragment.appendChild(_dom)
        }
        // renderDom.innerHTML=_html
        renderDom.appendChild(_fragment)

        document.querySelectorAll('.smallcircle').forEach((domItem,index)=>{
            new TimelineMax({
                repeat:-1,
                yoyo:true,
            }).to(domItem,Math.random()+0.4,{
                width:domItem.clientWidth*1.25,
                height:domItem.clientWidth*1.25,
                
            })
        })
        domMove(document.querySelectorAll('.smallcircle'),canMoveX,canMoveY,width,height)
    }

    
    const render=(dom)=>{
        console.log("ranmgeee");
        getDomMsg(dom).then(res=>{
            let {canMoveX,canMoveY}=res
            bigcircleRender(3,bigCirleRef.current,'15rem','15rem',canMoveX,canMoveY)
            smallcircleRender(3,smallCirleRef.current,'6rem','6rem',canMoveX,canMoveY)
            smallcircleRender(2,smallCirleRef.current,'4rem','4rem',canMoveX,canMoveY)
        })
    }

    useEffect(()=>{
        render(document.querySelector('.allcircle'))
        console.log("document.querySelector('.allcircle').clientHeight",document.querySelector('.allcircle').clientHeight);
    },[])


    return(
        <div className='Allpart'>
            <div className='bigimg'>
                <img className='widthFixImg' src="../image/banner-img.png" alt="" />
                <div className='allcircle'>
                    <div className='bigcircleList circle' ref={bigCirleRef}>
                        {/* <div className='bigcircle'></div> */}
                    </div>
                    <div className='smallcircleList circle' ref={smallCirleRef}>

                    </div>
                </div>
                
                <div className='center'>
                    <div className='center-img-box'>
                        <img className='center-text-img' src="../image/musicText.png" alt="" />
                        
                    </div>
                    <div className='text'>
                        Share & Music Online & Love Dj
                    </div>
                    <div className='btn'>
                        LET LISTEN NOW
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwiperBanner