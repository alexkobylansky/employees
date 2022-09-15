import './app.scss';
import {Info} from "../info/Info";
import {SearchPanel} from "../search-panel/SearchPanel";
import {Filter} from "../filter/Filter";
import {EmployeesList} from "../employees-list/EmployeesList";
import {EmployeesAddForm} from "../employees-add-form/EmployeesAddForm";

export function App() {
  const employees =[
    {
      name: "John C.",
      salary: 800,
      increase: true,
    },
    {
      name: "Alex M.",
      salary: 3000,
      increase: false,
    },
    {
      name: "Carl W.",
      salary: 5000,
      increase: false,
    },
  ]

  return (
    <div className="App">
      <Info/>

      <div className="search-panel">
        <SearchPanel/>
        <Filter/>
      </div>

      {employees && <EmployeesList employees={employees}/>}

      <EmployeesAddForm/>
    </div>
  );
}