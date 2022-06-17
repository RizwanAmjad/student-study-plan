import React from "react"

import { useFormikContext } from "formik"

import "./css/form-input.css"

function FormSelectMenuComponent({ valueKey, name, options, value, ...props }) {
  const { values, setValues, errors, touched, setTouched } = useFormikContext()

  return (
    <React.Fragment>
      {errors[name] && touched[name] && (
        <span className="input-error">{errors[name]}</span>
      )}
      <select
        name={name}
        className="form-input"
        onChange={({ target }) => {
          values[name] = target.value
          setValues(values)
        }}
        onBlur={() => {
          touched[name] = true
          setTouched(touched)
        }}
      >
        <option>Select a Category</option>
        {options &&
          options.map((optionItem) => (
            <option key={optionItem[valueKey]} value={optionItem[valueKey]}>
              {optionItem[value]}
            </option>
          ))}
      </select>
    </React.Fragment>
  )
}

export default FormSelectMenuComponent
