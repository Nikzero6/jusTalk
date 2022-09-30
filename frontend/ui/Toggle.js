import { Switch } from "@headlessui/react";
import classNames from "classnames";
import { CircleLoader } from "./Loader";

export default function Toggle({
  enabledColor = "teal",
  enabled,
  setEnabled,
  loading
}) {
  const colorMap = {
    teal: "bg-teal-600"
  };
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      disabled={loading}
      className={classNames(
        "bg-gray-200",
        { [colorMap[enabledColor]]: enabled },
        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
      )}
    >
      <span className="sr-only">Use setting</span>
      {loading ? (
        <span className="text-center w-full -mt-1">
          <CircleLoader classes={"h-4 w-4 text-center"} />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className={classNames(
            { "translate-x-5": enabled },
            "translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
          )}
        />
      )}
    </Switch>
  );
}
