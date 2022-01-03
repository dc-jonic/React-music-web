import './index.scss'

function PopLayConfirm({
    confirm,
    isShow,
    cancel
}){
    console.log("isshow",isShow);
    return(
        isShow==true &&
        <div className="allPop" onClick={(e)=>cancel(e)}>
            <div className="center-pop">
                <div className="title">提示</div>
                <div className="msg">确定这么操作吗</div>
                <div className="btn-list">
                    <div className="btn canel" onClick={(e)=>cancel(e)}>取消</div>
                    <button className="btn ok" onClick={(e)=>confirm(e)}>确定</button>
                </div>
            </div>
        </div>
    )

}

export default PopLayConfirm