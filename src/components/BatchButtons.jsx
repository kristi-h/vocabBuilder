import React from 'react'


export default function BatchButtons({toLearn, handleBatchClick, startBtn}) {
    const batchEle = toLearn.map((_, i) => {
        return (<div key={`batch${i+1}`} className='grid-item batch-btns'>
                    <button type="button" onClick={handleBatchClick} className={`batch${i+1} num-btn`} value={i+1}>{i + 1}</button>
                </div>)   
                
})
    console.log(batchEle)


    return(
            <div>
                    <div className='grid-container wrapper'>
                    {batchEle}
                    </div>   

                    <button className="start-btn" onClick={startBtn}>Start studying!</button>
            </div>
        
    )
}
