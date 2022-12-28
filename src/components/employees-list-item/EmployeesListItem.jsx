import './employees-list-item.scss';
import {Button} from "../../ui/button/Button";
import {Input} from "../../ui/input/Input";

export const EmployeesListItem = ({name, salary, increase, rise, onDelete, onToggleIncrease, onToggleRise}) => {

  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase"
  }
  if(rise) {
    classNames += " like"
  }

  return (
    <li className={classNames}>
      <span className="list-group-item-label"
            onClick={onToggleRise}
      >{name}</span>
      <Input type={"text"}
             classes={"list-group-item-input"}
             id={"item-input"}
             name={"salary"}
             inputValue={salary + "$"}
             placeholder={""}
             labelValue={""}
      />
      <div className="d-flex justify-content-center align-content-center">
        <Button type={"button"}
                classes={"btn-cookie btn-sm"}
                name={''}
                children={<i className="fa-solid fa-cookie"/>}
                onClick={onToggleIncrease}
        />
        <Button type={"button"}
                classes={"btn-trash btn-sm"}
                children={<i className="fa-solid fa-trash"/>}
                name={''}
                onClick={onDelete}
        />
        <i className="fa-solid fa-star"/>
      </div>
    </li>
  );
}