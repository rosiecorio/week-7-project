import { useSearchParams } from "react-router-dom"

export default function SortByMenu(gamesArray) {
    console.log(gamesArray)

    const [query, updateSearchParams] = useSearchParams()

    const sort = query.get('sort')

    if (sort === 'asc') {
        gamesArray.sort()
    } else if (sort === 'desc') {
        gamesArray.sort().reverse()
    }

    function handleSort() {
        updateSearchParams({sort: event.target.value})
    }
    
    return (
        <>
            <form>
                <select onChange={handleSort} value={query.get('sort') || ''}>
                    <option value="">Select..</option>
                    <option value="genre">Genre</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </form>
        </>
    )
}