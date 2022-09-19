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
      rise: true,
      increase: true,
    },
    {
      id: 2,
      name: "Alex M.",
      salary: 3000,
      rise: false,
      increase: false,
    },
    {
      id: 3,
      name: "Carl W.",
      salary: 5000,
      rise: false,
      increase: false,
    },
  ]);

  const deleteItem = (id) => {
    setEmployees(employees.filter(item => item.id !== id));
  }

  const addItem = (name, salary) => {
    if (name && salary) {
      const newItem = {
        id: maxId,
        name: name,
        salary: salary,
        rise: false,
        increase: false,
      }
      setMaxId(maxId + 1);
      setEmployees([...employees, newItem]);
    }
  }

  const onToggleIncrease = (id) => {
    const toggleIncrease = (id) => {
      return employees.map(item => {
        if (item.id === id) {
          return {
            ...item,
            increase: !item.increase
          }
        }
        return item
      })
    }
    setEmployees(toggleIncrease(id));
  }

  const onToggleRise = (id) => {
    const toggleRise = (id) => {
      return employees.map(item => {
        if (item.id === id) {
          return {
            ...item,
            rise: !item.rise
          }
        }
        return item
      })
    }
    setEmployees(toggleRise(id));
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
                                   onToggleIncrease={onToggleIncrease}
                                   onToggleRise={onToggleRise}
      />}
      <EmployeesAddForm addItem={addItem}/>
    </div>
  );
}