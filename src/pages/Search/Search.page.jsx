import React, { Component } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import './Search.styles.scss'

import SearchBox from '../../components/search-box/searchBox.component';
import CardsContainer from '../../components/cardsContainer/cardsContainer.component';

export class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageList: [...this.props.mutualFundsList]
        }
        console.log(this.props);
        console.log(this.state);
    }

    setPageList(pg) {
        this.setState({pageList: pg})
    }
    // const [pageList, setPageList] = React.useState(mutualFundsList);
    // const { mutualFundsList, currentSearchInput, getSearchInput, selectedForComparision, bringInForComparision, removeFromComparision } = this.props;
    

 
    render() {
        return (
            <div className='search-page'>
                {/* <SearchBox currentSearchInput={this.props.currentSearchInput} onSubmitSearch={this.props.getSearchInput}/>
                <h3>Mutual Funds selected for comparision: {this.props.selectedForComparision.length}</h3>
                <h4>{this.props.mutualFundsList.length?`Here are your mutual fund results`:`No Result Found`}</h4> */}
                <CardsContainer 
                    list = {this.state.pageList}
                    selectedForComparision={this.props.selectedForComparision} 
                    bringInForComparision={this.props.bringInForComparision}
                    removeFromComparision={this.props.removeFromComparision}/>
            </div>
        )
    }
}

// function SearchPage (props) {
//     const { mutualFundsList, currentSearchInput, getSearchInput, selectedForComparision, bringInForComparision, removeFromComparision } = props;
//     const a = React.useState([...mutualFundsList]);
//     console.log(a);
//     // console.log(mutualFundsList);
//     // console.log(pageList);
 
//     // render() {
//         return (
//             <div className='search-page'>
//                 {/* <SearchBox currentSearchInput={currentSearchInput} onSubmitSearch={getSearchInput}/>
//                 <h3>Mutual Funds selected for comparision: {selectedForComparision.length}</h3>
//                 <h4>{mutualFundsList.length?`Here are your mutual fund results`:`No Result Found`}</h4>
//                 <CardsContainer 
//                     list = {pageList}
//                     selectedForComparision={selectedForComparision} 
//                     bringInForComparision={bringInForComparision}
//                     removeFromComparision={removeFromComparision}/> */}
//             </div>
//         )
//     // }
// }

export default SearchPage
