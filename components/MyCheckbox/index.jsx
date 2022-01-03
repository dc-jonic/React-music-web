import './index.scss'

function MyCheckbox({
    checked,
    children,
    onChange
}){

    const createText=()=>{
        if (typeof children!=='string') {
            return ''
        }
        return <span>{children}</span>
    }
    

    return(
        <div>
            <input 
              type="checkbox" 
              checked={checked} 
              onChange={(e)=>onChange(e)} 
              className='my-checkbox'
            />
            {createText()}
        </div>
    )
}

export default MyCheckbox