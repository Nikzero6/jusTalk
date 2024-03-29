import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  InformationCircleIcon,
  XIcon,
  CheckCircleIcon
} from "@heroicons/react/outline";
import { PrimaryButton, SecondaryButton } from "./Button";
import classnames from "classnames";

const ALERT_TYPE = {
  INFO: "info",
  CONFIRMATION: "confirmation",
  SUCCESS: "success"
};

export default function Alert({
  showModal: open,
  setShowModal: setOpen,
  heading,
  description,
  primaryCtaText,
  SecondaryCtaText,
  primaryCtaAction = () => {},
  secondaryCtaAction = () => {},
  variation = ALERT_TYPE.INFO,
  onClose = () => {}
}) {
  const renderIconOnTheBasisOfVariant = () => {
    if (variation === "info") {
      return (
        <InformationCircleIcon
          className="h-6 w-6 text-gray-500"
          aria-hidden="true"
        />
      );
    }
    if (variation === "success") {
      return (
        <CheckCircleIcon
          className="h-6 w-6 text-green-500"
          aria-hidden="true"
        />
      );
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  onClick={() => {
                    setOpen(false);
                    onClose();
                  }}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div
                  className={classnames(
                    "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10",
                    {
                      "bg-green-200": variation === "success"
                    },
                    { "bg-gray-200": variation === "info" }
                  )}
                >
                  {renderIconOnTheBasisOfVariant()}
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    {heading}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex space-x-2 sm:flex-row justify-end">
                {SecondaryCtaText ? (
                  <SecondaryButton
                    onClick={() => {
                      secondaryCtaAction();
                      setOpen(false);
                    }}
                  >
                    {SecondaryCtaText}
                  </SecondaryButton>
                ) : null}
                {primaryCtaText ? (
                  <PrimaryButton
                    onClick={() => {
                      primaryCtaAction();
                      setOpen(false);
                    }}
                  >
                    {primaryCtaText}
                  </PrimaryButton>
                ) : null}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
