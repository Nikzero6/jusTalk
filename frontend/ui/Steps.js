import { CheckIcon } from "@heroicons/react/solid";
import classNames from "classnames";

export default function Steps({ steps, changeStep }) {
  return (
    <nav aria-label="Progress" className="pb-6 pt-2">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : "",
              "relative"
            )}
          >
            {step.status === "complete" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-green-400" />
                </div>
                <div
                  onClick={() => changeStep(step, stepIdx)}
                  className="cursor-pointer relative w-8 h-8 flex items-center justify-center bg-green-400 border border-green-400 rounded-full hover:bg-green-600"
                >
                  <CheckIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                  <div className="absolute top-8 whitespace-nowrap text-green-500 text-sm font-medium">
                    {step?.name}
                  </div>
                </div>
              </>
            ) : step.status === "current" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div
                  onClick={() => changeStep(step, stepIdx)}
                  className="cursor-pointer relative w-8 h-8 flex items-center justify-center bg-white border-2 border-green-400 rounded-full"
                  aria-current="step"
                >
                  <span
                    className="h-2.5 w-2.5 bg-green-400 rounded-full"
                    aria-hidden="true"
                  />
                  <div className="absolute top-8 whitespace-nowrap text-gray-800 text-sm font-medium">
                    {step?.name}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div
                  onClick={() => changeStep(step, stepIdx)}
                  className="cursor-pointer group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"
                >
                  <span
                    className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                  <div className="absolute top-8 whitespace-nowrap text-gray-400 text-sm font-medium">
                    {step?.name}
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
