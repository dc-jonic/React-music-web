import './icon.scss'

function Icon({
    className,
    style
}) {
    const IconClassName=()=>{
        let _className=['iconfont']
        if (typeof className=="string"){
            _className.push(className)
        }else{
            console.warn("iconfont只能为string类型");
        }

        return _className.join(' ')
    }

    return (
        

        <div>
            <i className={IconClassName()} style={style}></i>
        </div>
    )
}

export default Icon