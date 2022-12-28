import {useState} from "react";
import './employees-add-form.scss';
import {Input} from "../../ui/input/Input";
import {Button} from "../../ui/button/Button";

export const EmployeesAddForm = ({addItem}) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addItem(name, salary);
    setName("");
    setSalary("");
  }

  return (
    <div className="add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
        className="add-form d-flex"
        onSubmit={(event) => onSubmit(event)}
      >
        <Input type={"text"}
               classes={"form-control new-post-label"}
               id={"name-input"}
               name={"name"}
               placeholder={"Как его зовут?"}
               inputValue={name}
               setInputValue={setName}
               labelValue={""}
        />
        <Input type={"number"}
               classes={"form-control new-post-label"}
               id={"salary-input"}
               name={"salary"}
               placeholder={"З/П в $"}
               inputValue={salary}
               setInputValue={setSalary}
               labelValue={""}
        />
        <Button type={"submit"}
                classes={"btn btn-outline-light"}
                name={''}
                children={"Добавить"}
        />
      </form>
    </div>
  );
}