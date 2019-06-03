import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchBar.css';

class SearchBar extends Component {
    state = {
        value: ''
    }

    render() {
        return(
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <FontAwesomeIcon 
                        icon={faSearch} 
                        className="rmdb-searchbar-icon" 
                        name="search" 
                        size="2x" 
                    />
                    <input 
                        type="text"
                        className="rmdb-searchbar-input"
                        placeholder="Rechercher"
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;