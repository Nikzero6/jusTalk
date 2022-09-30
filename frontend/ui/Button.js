import classNames from "classnames";
import { CircleLoader } from "./Loader";

export const PrimaryButton = ({
  children,
  onClick,
  loading = false,
  variant = "medium",
  disabled,
  value,
  classes
}) => {
  return (
    <button
      type="button"
      className={classNames(
        variant === "small" ? "px-2.5 py-1.5 text-xs" : "px-4 py-2 text-sm",
        `text-center inline-flex items-center justify-center border border-transparent font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`,
        { "disabled:opacity-75": loading || disabled },
        classes
      )}
      disabled={loading || disabled}
      onClick={onClick}
      value={value}
    >
      {loading ? <CircleLoader classes={"h-5 w-5"} /> : children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  onClick,
  loading,
  variant = "medium",
  disabled,
  value,
  classes
}) => {
  return (
    <button
      type="button"
      className={classNames(
        variant === "small" ? "px-2.5 py-1.5 text-xs" : "px-4 py-2 text-sm",
        `text-center inline-flex items-center justify-center border border-transparent font-medium rounded-md shadow-sm text-black bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`,
        { "disabled:opacity-75": loading || disabled },
        classes
      )}
      disabled={loading || disabled}
      onClick={onClick}
      value={value}
    >
      {loading ? <CircleLoader classes={"h-5 w-5"} /> : children}
    </button>
  );
};

export const CustomButton = ({
  children,
  onClick,
  loading,
  variant = "medium",
  disabled,
  value,
  bgColor = "white",
  textColor = "gray-700",
  hoverColor,
  borderColor
}) => {
  return (
    <button
      type="button"
      className={classNames(
        variant === "small" ? "px-2.5 py-1.5 text-xs" : "px-4 py-2 text-sm",
        `text-center inline-flex items-center justify-center font-medium rounded-md shadow-sm text-${textColor} bg-${bgColor} hover:bg-${hoverColor}`,
        { "disabled:opacity-75": loading || disabled },
        !!borderColor && `border border-${borderColor}`
      )}
      disabled={loading || disabled}
      onClick={onClick}
      value={value}
    >
      {loading ? <CircleLoader classes={"h-5 w-5"} /> : children}
    </button>
  );
};
