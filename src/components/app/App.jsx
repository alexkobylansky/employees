import {useState} from "react";
import './app.scss';
import {Info} from "../info/Info";
import {SearchPanel} from "../search-panel/SearchPanel";
import {Filter} from "../filter/Filter";
import {EmployeesList} from "../employees-list/EmployeesList";
import {EmployeesAddForm} from "../employees-add-form/EmployeesAddForm";

const employeeArray =  [
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
];

export function App() {
  const [employees, setEmployees] = useState(employeeArray);
  const [maxId, setMaxId] = useState(() => employees[employees.length - 1].id + 1);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

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

  const searchEmployee = (data, value) => {
    if (value.length === 0) {
      return data
    } else {
      return data.filter(item => item.name.includes(value))
    }
  }
  
  const filterPost = (data, filter) => {
    switch (filter) {
      case 'rise':
        return data.filter(item => item.rise === true)
      case 'salary':
        return data.filter(item => item.salary > 1000)
      default:
        return data
    }
  }

  const visibleData = filterPost(searchEmployee(employees, term), filter);

  const count = employees.length;
  const increased = employees.filter(item => item.increase === true).length;

  return (
    <div className="App">
      <Info count={count}
            increased={increased}
      />
      <div className="search-panel">
        <SearchPanel term={term} setTerm={setTerm}/>
        <Filter filter={filter} setFilter={setFilter}/>
      </div>
      {employees && <EmployeesList employees={visibleData}
                                   onDelete={deleteItem}
                                   onToggleIncrease={onToggleIncrease}
                                   onToggleRise={onToggleRise}
      />}
      <EmployeesAddForm addItem={addItem}/>
    </div>
  );
}