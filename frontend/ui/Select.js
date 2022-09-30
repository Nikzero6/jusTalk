import classNames from "classnames";

const Select = ({
  label,
  options = [],
  defaultValue,
  id,
  disabled,
  className,
  value,
  onChange,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={label || id}
          className="block text-sm font-medium text-gray-700"
        >
          Location
        </label>
      )}
      <select
        id={id || label}
        name={id || label}
        className={classNames(
          "mt-1 block pl-1 lg:pl-3 lg:pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md",
          { "disabled:opacity-75": disabled },
          className
        )}
        defaultValue={defaultValue}
        disabled={disabled}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
