
import { useMemo } from "react";

function FilteredList() {

    const usersList = [
        {
            name: "Camilla",
            id: 1, 
            age: 28
        },
        {
            name: "Raffaele",
            id: 2, 
            age: 21
        },
        {
            name: "Luca",
            id: 1, 
            age: 15
        },
        {
            name: "Giulia",
            id: 1, 
            age: 35
        }
    ]

    function filterAge() {
        const adults = usersList.filter(user => user.age > 18);
        return adults.map(adult => adult.name)
    }

    const filtered = useMemo( () => filterAge(), [usersList])

    return (
        <div>The users with age higher than 18 are:
            {filtered.map(filteredData => (
                <li>{filteredData}</li>
            ))}
        </div>
    )
}
export default FilteredList;