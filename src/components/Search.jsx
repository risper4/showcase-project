export default function Search({search, setSearch}) {

    return (
        <>
        <input
         type="text" 
         placeholder="Search smoothie name"
         value={search || ''}
         onChange={(e) => setSearch(e.target.value)}
         className="search"
         />
        </>
    )
}