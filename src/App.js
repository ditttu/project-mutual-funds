import React from 'react';
import './pages/Search/Search.styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigatebar from './components/navbar/navbar.component';
import SearchBox from './components/search-box/searchBox.component';
import SearchPage from './pages/Search/Search.page';
import ComparisonPage from './pages/Comparision/Comparision.page';
import CardsContainer from './components/cardsContainer/cardsContainer.component';
// import Pagination from 'react-bootstrap/Pagination';
import { DropdownButton, Dropdown, Pagination } from 'react-bootstrap';

const pageCards = [6, 9, 12, 15];

class App extends React.Component {

        constructor() {
            super();
            this.state = {
                mutualFunds: [],
                currentRoute: 'search',
                selectedForComparision: [],
                currentSearchInput: '',
                numOfPages: 1,
                currentPage: 1,
                cardsOnPage: pageCards[0]
            }
        }

        changeRoute = (route) => {

            this.setState({
                currentRoute: route
            })
        }

        changeCardsOnPage = (n) => {
            const funds = this.state.mutualFunds;
            let numOfPages = Math.ceil(funds.length / n);
            if (numOfPages === 0) numOfPages = 1;
            this.setState({
                cardsOnPage: parseInt(n),
                currentPage: 1,
                numOfPages: numOfPages
            })
        }

        changePage = (e) => {
            const pg = parseInt(e.target.text)
            if (pg <= this.state.numOfPages) this.setState({ currentPage: pg });
        }


        renderPageCards(funds) {
            const { currentPage, cardsOnPage } = this.state;
            const start = cardsOnPage * (currentPage - 1);
            const end = cardsOnPage * currentPage;
            return funds.slice(start, end);
        }

        componentDidMount = () => {
            fetch('https://api.piggy.co.in/v2/mf/search/', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        search: '',
                        rows: 2,
                        offset: 0
                    })
                })
                .then(response => response.json())
                .then(queryResult => queryResult.data.search_results)
                .then(funds => {
                    let numOfPages = Math.ceil(funds.length / this.state.cardsOnPage);
                    if (numOfPages === 0) numOfPages = 1;
                    this.setState({
                        mutualFunds: funds,
                        numOfPages: numOfPages,
                        currentPage: 1
                    })
                })
                .catch(err => console.error('Something went wrong!'))
        }


        getSearchInput = (text) => {
            fetch('https://api.piggy.co.in/v2/mf/search/', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        search: text,
                        rows: 0,
                        offset: 0
                    })
                })
                .then(response => response.json())
                .then(queryResult => queryResult.data.search_results)
                .then(funds => {
                    let numOfPages = Math.ceil(funds.length / this.state.cardsOnPage);
                    if (numOfPages === 0) numOfPages = 1;
                    this.setState({
                        mutualFunds: funds,
                        currentSearchInput: text,
                        numOfPages: numOfPages,
                        currentPage: 1
                    })
                })
                .catch(err => console.error('Something went wrong!'))
        }

        bringInForComparision = (mutualFund) => {

            let array = this.state.selectedForComparision;
            if (array.length < 5) {
                array.push(mutualFund);

            }

            this.setState({
                selectedForComparision: array
            })
        }

        removeFromComparision = (mutualFund) => {
            let array = this.state.selectedForComparision.filter(fund => (
                fund.id !== mutualFund.id
            ))

            this.setState({
                selectedForComparision: array
            })
        }
        clear = () => {

            this.setState({ selectedForComparision: [] });
        }

        render() {
            const { mutualFunds, currentRoute, selectedForComparision, currentSearchInput } = this.state;

            let currentPage = null;

            if (currentRoute === 'search') {
                currentPage = ( <
                    div className = "search-page" >


                    <
                    SearchBox currentSearchInput = { currentSearchInput }
                    onSubmitSearch = { this.getSearchInput }
                    /> <
                    h4 >
                    Mutual Funds selected
                    for comparision: { selectedForComparision.length } <
                    /h4> <
                    h4 > {
                        mutualFunds.length ?
                        `Here are your mutual fund results` : `No Result Found`
                    } <
                    /h4>

                    <
                    DropdownButton id = "dropdown-basic-button"
                    title = "Cards On Page" > {
                        pageCards.map(n => ( <
                            Dropdown.Item active = { this.state.cardsOnPage === n }
                            key = { n }
                            eventKey = { n }
                            onSelect = { this.changeCardsOnPage } > { n } <
                            /Dropdown.Item>
                        ))
                    } <
                    /DropdownButton>

                    <
                    Pagination > {
                        new Array(this.state.numOfPages).fill(1).map((a, i) => ( <
                            Pagination.Item key = { i }
                            active = { i + 1 === this.state.currentPage }
                            onClick = { this.changePage } > { i + 1 } <
                            /Pagination.Item>
                        ))
                    } <
                    /Pagination>

                    {
                        mutualFunds.length !== 0 &&
                            <
                            CardsContainer
                        list = { this.renderPageCards(mutualFunds) }
                        selectedForComparision = { selectedForComparision }
                        bringInForComparision = { this.bringInForComparision }
                        removeFromComparision = { this.removeFromComparision }
                        />}


                        <
                        /div>
                    )
                }
                else if (currentRoute === 'compare') {
                    currentPage = <
                        ComparisonPage
                    fundsToBeCompared = { this.state.selectedForComparision }
                    clearFunds = { this.clear }
                    />
                }

                return ( < div className = "App" >
                    <
                    Navigatebar changeRoute = { this.changeRoute }
                    />   { currentPage } </div >

                );
            }
        }



        export default App;