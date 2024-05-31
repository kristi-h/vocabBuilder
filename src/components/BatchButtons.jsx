import React from 'react'


export default function BatchButtons({toLearn, handleBatchClick, getRandWord}) {
    const batchEle = toLearn.map((_, i) => {
        return (<div key={`batch${i+1}`} className='grid-item batch-btns'>
                    <button type="button" onClick={handleBatchClick} className={`batch${i+1} num-btn`} value={i+1}>{i + 1}</button>
                </div>)   
                
})
    console.log(batchEle)


    return(
            <div>
                    <h3>Choose your deck to study:</h3>
                    <div className='grid-container wrapper'>
                    {batchEle}
                    </div>   

                    <button className="start-btn" onClick={getRandWord}>Start studying!</button>
            </div>
        
    )
}
