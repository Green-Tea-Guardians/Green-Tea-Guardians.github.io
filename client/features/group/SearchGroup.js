import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroupsAsync, selectAllGroups } from "../group/groupSlice";
import { useEffect } from "react";

const SearchGroup = () => {
  const [searchValue, setGroupFilteredData] = useState('')
  const dispatch = useDispatch();
  const groups = useSelector(selectAllGroups);

  useEffect(() => {
    dispatch(fetchGroupsAsync(groups));
  }, [dispatch]);

  // useEffect(() => {
  //   searchGroups(groupSearch)
  // }, [groupSearch])

  //   function searchGroups(searchValue) {
  //     if(searchValue.length) {
  //       const data = groups.filter((group) => {
  //         console.log(group, 'this is the group')
  //         return group.name.toLowerCase().includes(searchValue.toLowerCase())
  //       })
  //       if(data.length > 0) {
  //         setGroupFilteredData(data)
  //       } else {
  //         setGroupFilteredData([])
  //       }
  //     }
  //   }
    // set state and call data
  
    const searchGroups= (e) => {
      e.preventDefault();
      setGroupFilteredData(e.target.value);
    };
    
    if (searchValue.length > 0) {
        groups.filter((group) => {
          return group.name.match(searchValue);
    });
    }
    
  // const groupSearch = groups.filter(group => group.name);

  return (
    <div>
      {/* <form action="/" method="get">*/}
        <input
          type="text"
          id="header-search"
          placeholder="Search for Groups"
          onChange={searchGroups}
          value={searchValue}
        />
        <button type="submit">Search</button>
      {/* </form> */}
    </div>
  );
};

export default SearchGroup;
