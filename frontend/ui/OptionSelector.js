import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { Fragment, useEffect, useState } from "react";

export default function OptionSelector({
  options,
  selectedIndex,
  setSelectedIndex,
  disabledIndex,
  disabled
}) {
  const [selected, setSelected] = useState(options[selectedIndex]);

  useEffect(() => {
    setSelectedIndex(options.findIndex((elem) => elem.id === selected?.id));
  }, [selected]);

  useEffect(() => {
    setSelected(options[selectedIndex]);
  }, [selectedIndex]);

  return (
    <Listbox value={selected} onChange={setSelected} disabled={disabled}>
      {({ open }) => (
        <>
          <div className="mt-1 relative min-w-[8rem]">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-9 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
              <span className="block truncate text-ellipsis">
                {!!selected?.name ? selected?.name : selected?.value}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                {!disabled && (
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-700"
                    aria-hidden="true"
                  />
                )}
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-sm ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {options.map((option, index) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-gray-900 bg-gray-100" : "text-gray-700",
                        "cursor-default text-left select-none relative py-2 pl-3 pr-9",
                        disabledIndex >= 0 &&
                          index === disabledIndex &&
                          "hidden"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold " : "font-normal ",
                            "block truncate "
                          )}
                        >
                          {!!option.name ? option.name : option.value}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-gray-900" : "text-gray-700",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
