import React, { Component } from 'react'
import './searchBox.styles.scss'

export class SearchBox extends Component {

    constructor(props){
        super(props);
        this.state={
            searchQuery: props.currentSearchInput
        }
    }

    setSearchQuery = (event) => {
        this.setState({
            searchQuery: event.target.value
        })
    }

    render() {
        const {onSubmitSearch} = this.props;
        const { searchQuery } = this.state;
        return (
            <div className='search-box'>
                <input
                    type='text'
                    name='search'
                    value={ searchQuery }
                    placeholder='Search Mutual Funds...'
                    onChange={ event => this.setSearchQuery(event) }
                />
                <button onClick={() => onSubmitSearch(searchQuery)}>
                    Search
                </button>
            </div>
        )
    }
}

export default SearchBox

