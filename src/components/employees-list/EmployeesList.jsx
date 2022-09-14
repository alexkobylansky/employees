import './employees-list.scss';
import {EmployeesListItem} from "../employees-list-item/EmployeesListItem";

export const EmployeesList = () => {
  return (
    <ul className="list list-group">
      <EmployeesListItem/>
      <EmployeesListItem/>
      <EmployeesListItem/>
    </ul>
  );
}