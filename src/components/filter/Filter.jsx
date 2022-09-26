import './filter.scss';
import {Button} from "../../ui/button/Button";

export const Filter = ({filter, setFilter}) => {
  const buttonData = [
    {
      type: "button",
      name: "all",
      label: "Все сотрудники",
    },
    {
      type: "button",
      name: "rise",
      label: "На повышение",
    },
    {
      type: "button",
      name: "salary",
      label: "З/П больше 1000$",
    }
  ]

  const buttons = buttonData.map(({type, name, label}) => {
      const active = filter === name;
      const clazz = active ? "btn-light" : "btn-outline-light"

      return <Button key={label}
                     type={type}
                     name={name}
                     classes={`btn ${clazz}`}
                     onClick={() => setFilter(name)}
                     children={label}/>
    }
  );

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
}