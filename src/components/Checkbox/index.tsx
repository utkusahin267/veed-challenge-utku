import { ChangeEventHandler } from "react";

interface ICheckbox {
  label: string;
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Checkbox = ({ label, id, onChange }: ICheckbox) => {
  return (
    <div>
      <input type="checkbox" id={id} name={id} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox;