import './employees-list.scss';
import {EmployeesListItem} from "../employees-list-item/EmployeesListItem";

export const EmployeesList = ({employees, onDelete, onToggleRise, onToggleIncrease}) => {

  return (
    <ul className="list list-group">
      {employees.map(item => <EmployeesListItem key={item.name}
                                                {...item}
                                                onDelete={() => onDelete(item.id)}
                                                onToggleRise={() => onToggleRise(item.id)}
                                                onToggleIncrease={() => onToggleIncrease(item.id)}
      />)}
    </ul>
  );
}