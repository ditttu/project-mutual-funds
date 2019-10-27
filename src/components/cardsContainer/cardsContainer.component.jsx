import React from 'react';

// import './cardsContainer.styles.scss';

import MutualFundCard from '../card/card.component';
import { CardColumns } from 'react-bootstrap';

const CardsContainer = ({list, selectedForComparision, bringInForComparision, removeFromComparision}) => {
    
    return (
        <CardColumns>
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
        </CardColumns>
    )
}

export default CardsContainer;
