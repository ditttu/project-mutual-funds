import React, { Component } from 'react'
// import './card.styles.scss'

import {Card,Table} from 'react-bootstrap';

export class MutualFundCard extends Component {

    constructor(props){
        super(props);
        this.state={
            selected:false
        }
    }

    componentDidMount(){
        if(this.props.selectedForComparision.filter(fund => fund.id === this.props.id).length === 1){
            this.setState({
                selected:true
            })
        }
        else{
            this.setState({
                selected:false
            })
        }
    }

    selectForComparision = () => {

        if(this.state.selected){
            this.setState((prevState) => ({selected: false}));
            this.props.removeFromComparision(this.props);
        }
        else if(this.props.selectedForComparision.length<5){
            this.setState((prevState) => ({selected: true}));
            this.props.bringInForComparision(this.props);
        }
        else {
            alert('5 funds already selected!')
        }
    }

    render() {
        
        const { name, rating, category, return_1yr, return_3yr, return_5yr, minimum_investment, riskometer} = this.props;
        
        

        return (
//             <div className='mutual-fund-card'>
//                 <div className='header'>
//                     <div className='name'>
//                         <h4>{name}</h4>
//                         <span>Rating: {rating}/5</span>
//                     </div>
//                     <div className='select'>
//                         <div 
//                             className='radio' 
//                             style={{background:(this.state.selected?'blue':'#fff')}}
//                             onClick={this.selectForComparision}>

//                         </div>
//                     </div>
//                 </div>
                // <div className='content'>
                //     <span>Scheme</span>
                //     <span>1yr</span>
                //     <span>3yr</span>
                //     <span>5yr</span>
                //     <span>{category}</span>
                //     {(return_1yr)? <span style={{color:'green'}}>{return_1yr}</span>: <span style={{color:'red'}}>'N/A'</span>}
                //     {(return_3yr)? <span style={{color:'green'}}>{return_3yr}</span>: <span style={{color:'red'}}>'N/A'</span>}
                //     {(return_5yr)? <span style={{color:'green'}}>{return_5yr}</span>: <span style={{color:'red'}}>'N/A'</span>}
                // </div>
                // <div className='footer'>
                //     <div className='min-subscription'>
                //         <h5>&#8377;{minimum_investment}</h5>
                //         <p>Min Subscription</p>
                //     </div>
                //     <div className='risk'>
                //         <p>Risk</p>
                //         <p>{riskometer}</p>
                //     </div>
                // </div>
//             </div>

         <Card style={{width: '15 rem'}} className="text-center">
             <Card.Header style={{background:(this.state.selected?'#9999ff':'#eee')}} onClick={this.selectForComparision}>
                        <div className='name'>
                            <h4>{name}</h4>
                            <span>Rating: {rating}/5</span>
                        </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <Table>
                        <thead>
                            <tr>
                                <th> Scheme </th>
                                <th> 1 yr </th>
                                <th> 3 yr </th>
                                <th> 5 yr </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {category}
                                </td>
                                <td>
                                {(return_1yr)? 
                                    <span style={{color:'green'}}>{return_1yr}</span>
                                    : <span style={{color:'red'}}>'N/A'</span>}
                                </td>
                                <td>
                                {(return_3yr)? 
                                    <span style={{color:'green'}}>{return_3yr}</span>
                                    : <span style={{color:'red'}}>'N/A'</span>}
                                </td>
                                <td>
                                {(return_5yr)? 
                                    <span style={{color:'green'}}>{return_5yr}</span>
                                    : <span style={{color:'red'}}>'N/A'</span>}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className='footer'>
                    <div className='min-subscription'>
                        <h5>&#8377;{minimum_investment}</h5>
                        <p>Min Subscription</p>
                    </div>
                    <div className='risk'>
                        <p>Risk</p>
                        <p>{riskometer}</p>
                    </div>
                </div>
            </Card.Footer>
         </Card>   
        )
    }
}

export default MutualFundCard;
