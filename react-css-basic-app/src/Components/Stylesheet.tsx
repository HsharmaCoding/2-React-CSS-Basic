import * as React from 'react';
import '../myStyles.css'

interface ICSSPropertyProps{
    primary:boolean
}
export const Stylesheet=(props:ICSSPropertyProps)=>{
    let className=props.primary?'primary':'';

    return(
        <div>
            <h1 className='primary'>Stylesheet</h1>
            <h1 className={className}>Stylesheet Props</h1>
            <h1 className={`${className} font-xl`}>Multiple Class</h1>
        </div>
    )
}