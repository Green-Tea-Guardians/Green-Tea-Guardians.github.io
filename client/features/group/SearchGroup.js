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

  console.log(groups, "these are the groups");

  const groupSearch = groups.filter((group) => group.name);

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
          name="s"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {groupSearch.map((group) => (
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
