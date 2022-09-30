import classNames from "classnames";

const Checkbox = ({ id, name, classes, defaultChecked, onChange, checked }) => {
  return (
    <div className="flex items-center h-5">
      <input
        id={id}
        name={name}
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={onChange}
        checked={checked}
        className={classNames(
          "focus:ring-blue-500 h-4 w-4 text-blue-600 border-blue-300 rounded",
          classes
        )}
      />
    </div>
  );
};

export default Checkbox;
