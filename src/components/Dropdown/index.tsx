import { ChangeEventHandler } from "react";

interface IDropdown {
  label: string;
  id: string;
  defaultValue: string;
  options: string[];
  onChange: ChangeEventHandler<HTMLSelectElement>
}

const Dropdown = ({ label, id, defaultValue, options, onChange }: IDropdown) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} onChange={onChange}>
        <option value={defaultValue}>{defaultValue}</option>
        {
          options.map((language) => (
            language && <option key={language} value={language}>{language}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Dropdown;