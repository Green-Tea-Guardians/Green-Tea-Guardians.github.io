import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroupsAsync, selectAllGroups } from '../group/groupSlice';

const SearchApp = () => {
    const dispatch = useDispatch()
    const groups = useSelector(selectAllGroups)

    useEffect(() => {
        dispatch(fetchGroupsAsync(groups))
    }, [dispatch])

    console.log(groups, 'these are the groups')

    const groupSearch = groups.filter(group => group.title.toLowerCase())

    return (
        <div>
            <Search />
            <ul>
                {groupSearch.map((group) => (
                    <li key={group.id}>{group.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchApp