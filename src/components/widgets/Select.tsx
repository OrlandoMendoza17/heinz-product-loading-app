import React, { SelectHTMLAttributes } from 'react';

type SelectOptionsValue = {
  name: string,
  value: string,
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  title?: string,
  titleStyle?: string,
  className?: string,
  options: SelectOptionsValue[],
  defaultOption: string,
}

const Select = (props: Props) => {

  const { title = "", titleStyle = "", className = "", options, name = "", defaultOption = "", required = true, ...rest } = props

  const selectsOptions = [...options]

  // Añade un elemento por defecto al inicio del select
  selectsOptions.unshift({ name: defaultOption, value: "" })

  return (
    <label htmlFor={name} className={`Input ${className}`}>
      {
        title &&
        <span className={titleStyle}>
          {title}
        </span>
      }
      <select name={name} id={name} required={required} {...rest}>
        {
          selectsOptions.map(({ name, value }, i) =>
            <option value={value} key={`name-${i}`}>
              {name}
            </option>
          )
        }
      </select>
    </label>
  );
};

export default Select;
