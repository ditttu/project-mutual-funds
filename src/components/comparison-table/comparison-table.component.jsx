import React from 'react';

import './comparison-table.styles.scss';

import { Table } from 'react-bootstrap';

export const ComparisonTable = ( {fundsToBeCompared} ) => {
     console.log(fundsToBeCompared)
    return (
        <div className= 'comparision-table'>
            <Table striped bordered hover responsive>
            
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>3 yr return</th>
                        <th>5 yr return</th>
                    </tr>
                </thead>
                <tbody>
                    {fundsToBeCompared.map(
                        ({ id, name, category, rating, return_3yr, return_5yr }) =>
                            (<tr key={id}>
                                <td className='name'> {name} </td>
                                <td> {category} </td>
                                <td> {rating} </td>
                                <td> {return_3yr} </td>
                                <td> {return_5yr} </td>
                            </tr>)
                    )}
                </tbody>
                
            </Table>
            
        </div>
    );
}