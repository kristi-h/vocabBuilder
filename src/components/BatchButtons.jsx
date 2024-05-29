import React from 'react'


export default function BatchButtons({toLearn, handleClick}) {
    const batchEle = toLearn.map((_, i) => {
        return (<div key={`batch${i+1}`} className='grid-item batch-btns'>
                    <button type="button" onClick={()=>handleClick} className={`batch${i+1} num-btn`}>{i + 1}</button>
                </div>)   
})
    console.log(batchEle)

    return(
        <div>
            <h3>Choose your batch of vocabulary words</h3>
            <div className='grid-container wrapper'>
            {batchEle}
            </div>
        </div>
        
    )

    
}
