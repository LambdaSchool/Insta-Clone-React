import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCompass, faUser } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './SearchBar.css';

library.add(fab, faHeart, faCompass, faUser, )

const SearchBar = (props) => {
    return (
        <div className="searchBar">
            <div className="brand">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
                <h1>Instagram</h1>
            </div>
            <input placeholder= "&#128269; Search" onKeyPress={props.search}/>
            <div className="searchNav">
                <FontAwesomeIcon icon="heart" />
                <FontAwesomeIcon icon="compass" />
                <FontAwesomeIcon icon="user" />
            </div>
        </div>
    )
}

export default SearchBar