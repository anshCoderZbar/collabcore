import React, { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";

import { LiaCodeSolid } from "react-icons/lia";
import { HiPaperClip } from "react-icons/hi";
import { FiSmile } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { OfferContract } from "./OfferContract";

export const ChatInput = () => {
  const inputFile = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState([]);
  const [emoji, setEmoji] = useState(false);

  const [formInput, setFormInput] = useState("");

  const handleAddEmoji = (emojiData) => {
    setFormInput((inputValue) => inputValue + emojiData.emoji);
  };
  const handleChange = (e) => {
    setFile([...file, e.target.files[0]]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInput("");
    console.log(formInput);
  };
  return (
    <>
      <div className="chat-wrapper">
        <div className="message-wrapper">
          <textarea
            rows="4"
            className="w-100"
            placeholder="Write text here..."
            onChange={(e) => setFormInput(e?.target?.value)}
            value={formInput}
          ></textarea>
        </div>
        <div className="icocc">
          <div className="m_d-s">
            <ul>
              <li
                onClick={() => {
                  setIsOpen(true);
                  setEmoji(false);
                }}
              >
                <LiaCodeSolid />
              </li>
              <li
                onClick={() => {
                  inputFile?.current?.click();
                  setEmoji(false);
                }}
              >
                <input
                  type="file"
                  onChange={handleChange}
                  ref={inputFile}
                  id="attachments"
                />
                <HiPaperClip />
              </li>
              <li onClick={() => setEmoji(!emoji)}>
                <FiSmile />
              </li>
            </ul>
          </div>
          <div className="m_d-s">
            <button onClick={handleSubmit}>
              <BsSend />
            </button>
          </div>
        </div>
      </div>
      <OfferContract setIsOpen={setIsOpen} isOpen={isOpen} />
      {emoji && (
        <div className="emoji_picker">
          <EmojiPicker
            searchDisabled={true}
            skinTonesDisabled={true}
            onEmojiClick={handleAddEmoji}
          />
        </div>
      )}
    </>
  );
};
