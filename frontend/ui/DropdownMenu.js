import { Fragment } from "react";
import { Menu, Transition, Listbox } from "@headlessui/react";
import classNames from "classnames";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

export function DropdownMenu({
  items,
  handleClick,
  styles,
  title,
  variant = "dropdown"
}) {
  return (
    <Menu
      as="div"
      className={classNames("relative inline-block text-left", styles)}
    >
      <div>
        {variant === "dropdown" && (
          <Menu.Button className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            {title}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        )}
        {variant === "threedot" && (
          <Menu.Button className="inline-flex items-center text-gray-400">
            <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        )}
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-20 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer">
          <div className="py-1">
            {items.map((item) => (
              <Menu.Item key={item?.id}>
                {({ active }) => (
                  <a
                    onClick={() => handleClick(item)}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {item?.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export function MenuSelector({
  selected,
  setSelected,
  options,
  checkIcon = false
}) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">
            Change published status
          </Listbox.Label>
          <div className="relative">
            <div className="inline-flex shadow-sm rounded-md divide-x divide-gray-600">
              <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-gray-600">
                <div
                  onClick={selected?.handler ? selected.handler : () => {}}
                  className="cursor-pointer relative inline-flex items-center bg-gray-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white"
                >
                  {checkIcon && (
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                  <p className="ml-2.5 text-sm font-medium">
                    {selected?.title}
                  </p>
                </div>
                <Listbox.Button className="relative inline-flex items-center bg-gray-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500">
                  <span className="sr-only">Change published status</span>
                  <ChevronDownIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                {options.map((option) => (
                  <Listbox.Option
                    key={option?.title}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-gray-500" : "text-gray-900",
                        "cursor-pointer select-none relative p-4 text-sm"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div
                        className="flex flex-col"
                        onClick={option?.handler ? option.handler : () => {}}
                      >
                        <div className="flex justify-between">
                          <p
                            className={
                              selected ? "font-semibold" : "font-normal"
                            }
                          >
                            {option?.title}
                          </p>
                          {selected && checkIcon ? (
                            <span
                              className={
                                active ? "text-white" : "text-gray-500"
                              }
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                        <p
                          className={classNames(
                            active ? "text-gray-200" : "text-gray-500",
                            "mt-2"
                          )}
                        >
                          {option?.description}
                        </p>
                      </div>
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
