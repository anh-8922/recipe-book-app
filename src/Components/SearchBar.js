
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// export default function  SearchBar (props) {

//     const [searchText, setSearchText] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (searchText.trim() !== '') {
    
//           navigate(`/search?q=${encodeURIComponent(searchText)}`);
//         } else {
//           alert('Please enter valid text.');
//         }
//       };

//     return (
//         <div className="SearchInput">
//             <input type='search'
          
//                    label="Enter your text"
//                    placeholder="Search..."
//                    value={searchText}
//                    onChange={(e) => setSearchText(e.target.value)}/>
//             <button className="btn-search" onClick={handleSearch}>Search</button>
//         </div>
//     )
// }

import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";
import { useNavigate } from 'react-router-dom';


export default function  SearchBar ({children}) {

    const {searchQuery, setSearchQuery} = useContext(SearchContext)
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '') {
          setSearchQuery(searchQuery);
          navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        } else {
          alert('Please enter valid text.');
        }
      };

    return (
        <div className="SearchInput">
            <input type='search'
          
                   label="Enter your text"
                   placeholder="Search..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}/>
            <button className="btn-search" onClick={handleSearch}>Search</button>
        </div>
    )
}