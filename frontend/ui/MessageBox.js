import { EmojiHappyIcon } from "@heroicons/react/outline";
import { PhotographIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { useState } from "react";
import UploadMedia from "../components/MediaLibrary/UploadMedia";
import { DropdownMenu } from "../ui/DropdownMenu";
const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const MessageBox = ({
  text,
  setText,
  setImgUrl,
  mergeTags,
  showMergeTags,
  showAddMedia,
  textAreaDisabled,
  showEmoji
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [showUploadMediaPopup, setShowUploadMediaPopup] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const addMergeTag = (item) => {
    setText(text + item.expression);
  };

  return (
    <div className="relative">
      <textarea
        name="msg-box"
        rows={10}
        className="shadow-sm focus:ring-transparent  resize-none focus:border-gray-300 mt-1 block w-full sm:text-sm border border-gray-300 rounded-t-md border-b-0"
        placeholder="sms text goes here..."
        value={text}
        maxLength={160}
        onChange={(e) => setText(e.target.value)}
        disabled={textAreaDisabled}
      />

      <div
        className={classNames(
          "rounded-b-md  border border-gray-300 flex w-full bg-white relative space-x-2",
          showAddMedia || showMergeTags ? "p-3" : "p-0.5 border-t-0"
        )}
      >
        {showAddMedia && (
          <div className="w-2/5">
            <div
              onClick={() => setShowUploadMediaPopup(true)}
              className="text-gray-700 bg-gray-50 rounded-md p-2 text-sm font-medium text-center border cursor-pointer border-gray-300"
            >
              <PhotographIcon className="inline-block w-4 h-4 mr-2 text-gray-500" />
              <span className="align-middle">Add Media</span>
            </div>
          </div>
        )}
        {showMergeTags && mergeTags?.length > 0 && (
          <div className="w-3/5">
            <DropdownMenu
              items={mergeTags}
              handleClick={addMergeTag}
              styles={"w-full"}
              title={"Merge Tags"}
            />
          </div>
        )}
        <div className="absolute -top-12 items-center pr-4 pl-2 py-2 flex justify-between left-0 w-full">
          <div className="text-gray-500">
            <span className="text-gray-600 font-bold">{text.length}</span> / 160
          </div>
          {showEmoji && (
            <div className="text-gray-400">
              <EmojiHappyIcon
                className="h-8 w-8 cursor-pointer"
                onClick={() => setShowPicker(!showPicker)}
              />
            </div>
          )}
        </div>
      </div>
      {showPicker && (
        <>
          <div
            className="fixed inset-0"
            onClick={() => setShowPicker(false)}
          ></div>
          <Picker
            onEmojiClick={onEmojiClick}
            pickerStyle={{
              position: "absolute",
              right: 0,
              top: "76%",
              zIndex: 10000
            }}
          />
        </>
      )}
      {showUploadMediaPopup && (
        <UploadMedia
          setLink={(link) => {
            setImgUrl(link);
            setShowUploadMediaPopup(false);
          }}
          setShowUploadMediaPopup={setShowUploadMediaPopup}
        />
      )}
    </div>
  );
};

export default MessageBox;
