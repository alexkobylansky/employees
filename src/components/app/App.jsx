import {useState} from "react";
import './app.scss';
import {Info} from "../info/Info";
import {SearchPanel} from "../search-panel/SearchPanel";
import {Filter} from "../filter/Filter";
import {EmployeesList} from "../employees-list/EmployeesList";
import {EmployeesAddForm} from "../employees-add-form/EmployeesAddForm";

export function App() {
  const [maxId, setMaxId] = useState(4)
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John C.",
      salary: 800,
      increase: true,
    },
    {
      id: 2,
      name: "Alex M.",
      salary: 3000,
      increase: false,
    },
    {
      id: 3,
      name: "Carl W.",
      salary: 5000,
      increase: false,
    },
  ]);

  const deleteItem = (id) => {
    setEmployees(employees.filter(item => item.id !== id));
  }

  const addItem = (name, salary) => {
    if(name && salary) {
      const newItem = {
        id: maxId,
        name: name,
        salary: salary,
        increase: false,
      }
      setMaxId(maxId + 1);
      setEmployees([...employees, newItem]);
    }
  }

  return (
    <div className="App">
      <Info/>

      <div className="search-panel">
        <SearchPanel/>
        <Filter/>
      </div>

      {employees && <EmployeesList employees={employees}
                                   onDelete={deleteItem}
      />}

      <EmployeesAddForm addItem={addItem}/>
    </div>
  );
}