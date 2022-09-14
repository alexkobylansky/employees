import './app.scss';
import {Info} from "../info/Info";
import {SearchPanel} from "../search-panel/SearchPanel";
import {Filter} from "../filter/Filter";
import {EmployeesList} from "../employees-list/EmployeesList";
import {EmployeesAddForm} from "../employees-add-form/EmployeesAddForm";

export function App() {
  return (
    <div className="App">
      <Info/>

      <div className="search-panel">
        <SearchPanel/>
        <Filter/>
      </div>

      <EmployeesList/>

      <EmployeesAddForm/>
    </div>
  );
}