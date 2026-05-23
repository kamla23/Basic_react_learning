import React, { useState } from "react"


function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search employees..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

function EmployeeList({ employees, search }) {
  return (
    <ul>
      {employees
        .filter((emp) =>
          emp.toLowerCase().includes(search.toLowerCase())
        )
        .map((emp, index) => (
          <li key={index}>{emp}</li>
        ))}
    </ul>
  );
}
function  App(){
      const employees = ["Alice", "Bob", "Charlie", "David", "Eve"];
       const [search, setSearch] = useState("");
       return(
        <div>
             <h1>Employee Directory</h1>
                <SearchBar setSearch={setSearch} />
                  <EmployeeList employees={employees} search={search} />
        </div>
       )

}

export default App