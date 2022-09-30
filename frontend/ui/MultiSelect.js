import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const customStyles = {
  option: (provided, state) => {
    return {
      ...provided,
      color: state.isSelected ? "#212121" : "#616161",
      backgroundColor: state.isFocused ? "#f5f5f5" : "#fff",
      fontSize: "0.875rem"
    };
  },
  control: (provided, state) => {
    return {
      ...provided,
      borderColor: state.isFocused
        ? "#6b7280 !important"
        : "#d1d5db !important",
      boxShadow: state.isFocused ? "0 0 0 1px #6b7280 !important" : "",
      color: "#212121",
      fontSize: "0.875rem"
    };
  },
  container: (provided, state) => {
    return {
      ...provided,
      boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 #0000000d"
    };
  }
};

const MultiSelect = ({
  options,
  placeholder,
  onChange,
  defaultValue,
  labelField = "label",
  valueField = "value",
  error
}) => {
  return (
    <Select
      isMulti
      options={options}
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      styles={customStyles}
      className="no-input-border"
      getOptionLabel={(option) => option[labelField]}
      getOptionValue={(option) => option[valueField]}
    />
  );
};

export default MultiSelect;
