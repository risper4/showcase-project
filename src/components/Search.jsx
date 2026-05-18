export default function Search({search, setSearch}) {

    return (
        <div>
        <input
         id="search"
         type="text" 
         placeholder="Search smoothie name"
         value={search || ''}
         onChange={(e) => setSearch(e.target.value)}
         />
        </div>
    )
}