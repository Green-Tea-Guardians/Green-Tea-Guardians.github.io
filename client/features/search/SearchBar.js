import React from 'react';


const SearchBarKeyword = ({keyword, onChange}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};
    return (
      <input 
       style={BarStyle}
       key="search-bar-keyword"
       value={keyword}
       placeholder={"Search for Keywords"}
       onChange={(e) => onChange(e.target.value)}
      />
    );
}

const SearchBarLocation = ({keyword, onChange}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};
    return (
      <input 
       style={BarStyle}
       key="search-bar-location"
       value={keyword}
       placeholder={"Seattle, WA"}
       onChange={(e) => onChange(e.target.value)}
      />
    );
}

export default { SearchBarKeyword, SearchBarLocation };