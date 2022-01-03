import './index.scss';


function BannerOne(){
    return(
        <div className='allBanner'>
            <div className='banner'>
                <div className='left'>
                    <div className='title'>
                        YOUR LOVE
                    </div>
                    <div className='subtitle'>
                        WECOME TO MY LOVE MUSIC
                    </div>
                    <div className='musicText'>
                    Can no longer find a reason to hug, lovers will inevitably become friends in the end
                    </div>

                    <div className='btnList'>
                        <div className='btn-Ok btn'>
                            I   DO
                        </div>
                        <div className='btn-cancel btn'>
                            CANCEL
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <img src="../image/banner-cyx.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default BannerOne