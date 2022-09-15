import './employees-add-form.scss';
import {Input} from "../../ui/input/Input";
import {Button} from "../../ui/button/Button";
import {useState} from "react";

export const EmployeesAddForm = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState(null);

  return (
    <div className="add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
        className="add-form d-flex">
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
                children={"Добавить"}
        />
      </form>
    </div>
  );
}