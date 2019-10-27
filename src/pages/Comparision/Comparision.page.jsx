import React from 'react';
import './Comparision.styles.scss';

import {ComparisonTable} from '../../components/comparison-table/comparison-table.component';


const ComparisonPage = ({fundsToBeCompared, clearFunds}) => {
    

    return (
        
        <div className='comparision-page'>
           { (fundsToBeCompared.length)
                ?   <ComparisonTable
                         fundsToBeCompared = {fundsToBeCompared}
                    />
                :  <div> <h1>No mutual funds selected :( </h1> </div>
        }
        <button onClick= {clearFunds}> CLEAR </button>
        </div>
    )
}

export default ComparisonPage;