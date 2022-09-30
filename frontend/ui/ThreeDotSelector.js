import { Listbox, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useState } from "react";

export default function ThreeDotSelector({
  options,
  selectedIndex,
  setSelectedIndex,
  disabledIndex,
  disabled,
  choices
}) {
  const [selected, setSelected] = useState(options[selectedIndex]);
  const [oper, setOper] = useState();

  useEffect(() => {
    if (oper !== undefined) {
      oper.func();
    }
    setOper();
  }, [oper]);

  useEffect(() => {
    setSelectedIndex(options.findIndex((elem) => elem.id === selected.id));
  }, [selected]);

  useEffect(() => {
    setSelected(options[selectedIndex]);
  }, [selectedIndex]);

  return (
    <Listbox value={oper} onChange={setOper} disabled={disabled}>
      {({ open }) => (
        <>
          <div className="pt-[1px]">
            <Listbox.Button className="bg-white rounded-md p-[1px] ml-2 hover:border-[1px] hover:border-gray-300 sm:text-sm">
              <span className="">
                {!disabled && (
                  <DotsVerticalIcon
                    className="h-5 w-5 text-gray-300"
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
              <Listbox.Options className="absolute bg-white right-10 z-10 mt-1 w-1/2 bg-white shadow-lg max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {choices.map((choice) => (
                  <Listbox.Option
                    className="p-4 text-sm leading-5 font-normal font-inter hover:bg-gray-100 text-gray-700"
                    value={choice}
                    key={choice}
                  >
                    <span className="font-semibold font-normal">
                      {choice.name}
                    </span>
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
