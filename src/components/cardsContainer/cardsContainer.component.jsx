import React from 'react'
import './cardsContainer.styles.scss'

import MutualFundCard from '../card/card.component'

const CardsContainer = ({list, selectedForComparision, bringInForComparision, removeFromComparision}) => {
    
    return (
        <div className='cards-container'>
            {
                list.map(mutualFund => (
                    <MutualFundCard 
                        key={mutualFund.id} 
                        {...mutualFund} 
                        selectedForComparision={selectedForComparision}
                        bringInForComparision={bringInForComparision}
                        removeFromComparision={removeFromComparision}/>
                ))
            }
        </div>
    )
}

export default CardsContainer
