import classNames from "classnames";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { useEffect } from "react";

export const TextInput = ({
  id,
  label,
  htmlFor,
  autoComplete,
  required,
  placeholder,
  inlineLabel = true,
  ariaDescribedby,
  onChange,
  error,
  value,
  defaultValue
}) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          onChange={onChange}
          aria-describedby={ariaDescribedby}
          type="text"
          name={htmlFor}
          placeholder={placeholder}
          id={id}
          required={required}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          className={classNames(
            "mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",
            { block: !inlineLabel }
          )}
          value={value}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </>
  );
};

export const TextInputWithButton = ({
  id,
  label,
  htmlFor,
  autoComplete,
  required,
  placeholder,
  inlineLabel = true,
  buttonText,
  defaultValue,
  value,
  onBtnClick,
  btnPosition = "end",
  onChange,
  width,
  InputIcon,
  ButtonIcon
}) => {
  return (
    <>
      {!!label && (
        <label
          htmlFor={htmlFor}
          className="block text-md font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div
        className={classNames(
          "mt-1 flex rounded-md shadow-sm",
          width ? width : "w-full",
          {
            "flex-row-reverse": btnPosition === "start"
          }
        )}
      >
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          {InputIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <InputIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          )}
          <input
            type="text"
            onChange={onChange}
            name={htmlFor}
            placeholder={placeholder}
            id={id}
            required={required}
            autoComplete={autoComplete}
            defaultValue={defaultValue}
            value={value}
            className={classNames(
              "focus:ring-gray-500 focus:border-gray-500 inline-flex flex-1 w-full sm:text-sm border-gray-300",
              { block: !inlineLabel },
              { "pl-10": InputIcon },
              {
                "rounded-r-md border-r-1": btnPosition === "start",
                "rounded-l-md": btnPosition === "end",
                "rounded-r-md": !buttonText
              }
            )}
          />
        </div>
        {buttonText && (
          <button
            type="button"
            className={classNames(
              "-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-500 border-gray-300",
              {
                "rounded-l-md": btnPosition === "start",
                "rounded-r-md": btnPosition === "end"
              }
            )}
            onClick={(e, id) => {
              onBtnClick(e, id);
            }}
          >
            {ButtonIcon && (
              <ButtonIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            )}
            <span>{buttonText}</span>
          </button>
        )}
      </div>
    </>
  );
};
