import React from 'react';

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className='EmaillistApp_Searchbar'>
                찾기: <input type='search' placeholder='search' value = { this.props.keyword } />
            </div>
        )
    }
}