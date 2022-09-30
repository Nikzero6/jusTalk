import classNames from "classnames";
function classJoin(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Pill = ({ text, variant = "success" }) => {
  return (
    <span
      className={classNames(
        "inline-flex items-center px-3 py-0.5 h-5 rounded-full text-xs font-medium mr-1 ",
        { "bg-green-100 text-green-800": variant === "success" },
        { "bg-green-100 text-green-800": variant === "sent" },
        { "bg-green-100 text-green-800": variant === "published" },
        { "bg-gray-100 text-gray-800": variant === "draft" },
        { "bg-pink-100 text-pink-800": variant === "strong" },
        { "bg-yellow-100 text-yellow-800": variant === "scheduled" },
        { "bg-blue-100 text-blue-800": variant === "info" }
      )}
    >
      {text}
    </span>
  );
};

export const DoublePill = ({ class1, class2, text1, text2 }) => {
  return (
    <div className="mr-1">
      <span
        className={classJoin(
          "inline-flex items-center h-5 px-2.5 py-0.5 rounded-l-full text-xs leading-4 font-medium",
          `${class1}`
        )}
      >
        {text1}
      </span>
      <span
        className={classJoin(
          "inline-flex items-center h-5 px-2.5 py-0.5 rounded-r-full text-xs leading-4 font-medium",
          `${class2}`
        )}
      >
        {text2}
      </span>
    </div>
  );
};
export default Pill;
