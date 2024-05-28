import React from 'react'

export default function BatchButtons({toLearn, handleClick}) {

const batchEle = (count) => {
    count = 0;
    for (let i=0; i<{toLearn}.length; i++) {
        count+=1
        return (
            <div className='batch-btns'>
                <button onClick={()=>handleClick} className={`batch ${count}`}>{count}</button>
            </div>
           
        )
    }
       
}
    return(
        <div className='wrapper'>
            {batchEle}
        </div>
    )

    
}
