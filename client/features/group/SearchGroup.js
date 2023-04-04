import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroupsAsync, selectAllGroups } from "../group/groupSlice";
import { useEffect } from "react";

const SearchGroup = () => {
  const dispatch = useDispatch();
  const groups = useSelector(selectAllGroups);

  useEffect(() => {
    dispatch(fetchGroupsAsync(groups));
  }, [dispatch]);

  useEffect(() => {
    searchGroups(groupSearch)
  }, [groupSearch])

  // const filterGroups = (groups, query) => {
  //   if (!query) {
  //     console.log(groups, 'this is groups')
  //     return groups;
  //   }

  //   return groups.filter((groups) => {
  //     const groupName = groups.name;
  //     console.log(groups, 'second groups')
  //     return groupName.includes(query);
  //   });
  // };

    function searchGroups(searchValue) {
      if(searchValue.length) {
        const data = groups.filter((group) => {
          return group.name.toLowerCase().includes(searchValue.toLowerCase())
        })
        if(data.length > 0) {
          setGroupFilteredData(data)
        } else {
          setGroupFilteredData([])
        }
      }
    }
    // set state and call data
  
  // const search = window.location;
  // const query = new URLSearchParams(search).get("s");
  // const groupSearch = groups.filter(group => group.name);
  // const filteredGroups = filterGroups(groupSearch, query);


  return (
    <div>
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search Groups</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search for Groups"
          onChange={searchGroups}
          value={searchValue}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {filteredGroups.map((group) => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
    </div>
  );
};

// css for screen readers since placeholders aren't accessible
// .visually-hidden {
//     clip: rect(0 0 0 0);
//     clip-path: inset(50%);
//     height: 1px;
//     overflow: hidden;
//     position: absolute;
//     white-space: nowrap;
//     width: 1px;
// }

export default SearchGroup;
