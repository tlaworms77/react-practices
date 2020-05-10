import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default class EmaillistApp extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            keyword: ''
        }
    }

    shoudComponentUpdate() {
        console.log('EmaillistApp::shoudComponentUpdate()');
    }

    componentWillUpdate() {
        console.log('EmaillistApp::componentWillUpdate()');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('EmaillistApp::getSnapshotBeforeUpdate');
        return "test-snapshot";
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
                <Emaillist keyword={ this.state.keyword } emails={ this.props.emails } />
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('EmaillistApp::componentDidUpdate():' + prevProps + ":" + prevState + ":" + snapshot);
    }
}

EmaillistApp.propTypes = {
    emails: PropTypes.arrayOf(PropTypes.object)
}