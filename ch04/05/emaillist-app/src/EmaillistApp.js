import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default class EmaillistApp extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            keyword: '',
            emails: null
        }
    }

    onNotifyKeywordChange(keyword) {
        this.setState({
            keyword: keyword
        })
    }

    render() {
        return (
            <div className='EmaillistApp'>
                <SearchBar keyword={ this.state.keyword } notifyChangeHandler={ this.onNotifyKeywordChange.bind(this) }/>
                <Emaillist keyword={ this.state.keyword } emails={ this.state.emails } />
            </div>
        )
    }

    componentDidMount() {
        fetch('http://localhost:9090/data.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    emails: data
                });
            })
            .catch((error) => {
                console.error('Error: fetch abd parsing data', error);
            });
    }    
}

EmaillistApp.propTypes = {
    emails: PropTypes.arrayOf(PropTypes.object)
}