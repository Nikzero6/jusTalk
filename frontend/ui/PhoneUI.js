import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChatIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRef } from "react";
import useAutosizeTextArea from "../hooks/useAutoSizeTextArea";

const PhoneUI = ({ imgUrl, text }) => {
  const textAreaRef = useRef(null);
  useAutosizeTextArea(textAreaRef.current, text);

  return (
    <>
      <div className="bg-white w-96 h-[45rem] rounded-[40px] border-8 border-gray-300 overflow-hidden relative mx-auto">
        <div className="bg-gray-100 w-full h-34 p-4">
          <div className="rounded-full bg-gray-200 h-14 w-14 flex justify-center items-center mx-auto">
            <ChatIcon className="h-8 w-8 text-white" />
          </div>
          <div className="rounded-md mx-auto w-56 text-center py-1.5 mt-4 text-sm text-gray-500 bg-white">
            Enter phone number
          </div>
          <ChevronLeftIcon className="absolute left-5 top-9 h-6 w-6 text-gray-300" />
        </div>
        <div className="absolute right-0 top-34 h-[464px] w-full overflow-y-auto py-8 px-6">
          {!!imgUrl && (
            <div className="ml-auto mb-3 w-48 h-48 border border-gray-300 rounded-md overflow-hidden">
              <Image src={imgUrl} width={192} height={192} alt="sms-img" />
            </div>
          )}
          <textarea
            name="msg-display"
            className="bg-gray-100 w-[90%] ml-[10%] border-none resize-none p-4 rounded-2xl rounded-br-none text-base text-gray-800 text-left"
            value={text}
            ref={textAreaRef}
            rows={6}
            disabled
          />
        </div>
        <div className="absolute bottom-0 h-24 w-full">
          <div className="flex space-x-2 mb-8 px-2 w-full">
            <div className="bg-gray-100 rounded-full w-1/5 h-8"></div>
            <div className="bg-gray-100 rounded-full w-1/5 h-8"></div>
            <div className="border border-gray-200 rounded-full w-3/5 h-8"></div>
          </div>
          <div className="rounded-md h-2 w-24 bg-gray-200 mx-auto"></div>
        </div>
      </div>
    </>
  );
};

export default PhoneUI;
