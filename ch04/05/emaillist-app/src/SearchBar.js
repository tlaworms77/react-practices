import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
    onInputChange(event){
        console.log('SearchBar:' + event.target.value);
        this.props['notifyChangeHandler'](event.target.value);
    }

    render() {
        return (
            <div className='EmaillistApp_Searchbar'>
                찾기: <input type='search' placeholder='search' value = { this.props.keyword } onChange={ this.onInputChange.bind(this) }/>
            </div>
        )
    }
}

SearchBar.propTypes = {
    keyword: PropTypes.string,
    notifyChangeHandler: PropTypes.func    
}