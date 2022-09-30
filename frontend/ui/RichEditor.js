import React from "react";
// import RichTextEditor, {
//         getTextAlignClassName,
//         getTextAlignStyles,
//         getTextAlignBlockMetadata,
//         EditorValue } from "react-rte";

import ClassicEditor from "ckeditor5-custom-build";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export const RichEditor = ({ defaultValue, getHTMLFromRTE }) => {
  const [value, setValue] = React.useState(
    defaultValue
    // ? RichTextEditor.createValueFromString(defaultValue, "html", {
    //   customBlockFn: getTextAlignBlockMetadata,
    // })
    // : RichTextEditor.createEmptyValue()
  );

  const getAllowedFontSizes = () => {
    const minSize = 9;
    const maxSize = 70;

    const sizes = ["default"];
    for (let index = minSize; index <= maxSize; index++) {
      sizes.push(index);
    }
    return sizes;
  };
  const editorConfiguration = {
    fontSize: {
      options: getAllowedFontSizes(),
      supportAllValues: true
    }
  };

  const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: [
      "INLINE_STYLE_BUTTONS",
      "BLOCK_TYPE_BUTTONS",
      "LINK_BUTTONS",
      "HISTORY_BUTTONS"
    ],
    BLOCK_ALIGNMENT_BUTTONS: [
      { label: "Align Left", style: "ALIGN_LEFT" },
      { label: "Align Center", style: "ALIGN_CENTER" },
      { label: "Align Right", style: "ALIGN_RIGHT" },
      { label: "Align Justify", style: "ALIGN_JUSTIFY" }
    ],
    INLINE_STYLE_BUTTONS: [
      { label: "Bold", style: "BOLD", className: "transparent" },
      { label: "Italic", style: "ITALIC" },
      { label: "Underline", style: "UNDERLINE" }
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: "UL", style: "unordered-list-item" },
      { label: "OL", style: "ordered-list-item" }
    ]
  };
  return (
    // <RichTextEditor
    //   onChange={(newValue) => {
    //     getHTMLFromRTE(newValue.toString("html",{
    //       blockStyleFn: getTextAlignStyles,
    //    }));
    //     setValue(newValue);
    //   }}
    //   value={value}
    //   toolbarConfig={toolbarConfig}
    //   blockStyleFn={getTextAlignClassName}
    //   className="min-h-[100px] rounded-lg font-inter"
    // />
    <CKEditor
      editor={ClassicEditor}
      config={editorConfiguration}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        getHTMLFromRTE(data);
        setValue(data);
        // console.log( { event, editor, data } );
      }}
      className="min-h-[100px] rounded-lg font-inter"
    />
  );
};

export default RichEditor;
