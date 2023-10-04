import React from "react";
import { CustomModal } from "components/Modal";

export const OfferContract = ({ setIsOpen, isOpen }) => {
  return (
    <CustomModal setIsOpen={setIsOpen} isOpen={isOpen}>
      <div className="offer_price_pop">
        <h2>My Extra</h2>
        <div className="offer_inputs ">
          <span>For an Extra</span>
          <input type="number" placeholder="$5" />
          <span>and an additional</span>
          <select className="form-select" aria-label="Default select example">
            <option value="0">0 days</option>
            <option value="1">1 days</option>
            <option value="2">2 days</option>
            <option value="3">3 days</option>
          </select>
        </div>
        <div className="offer_pop_bottom">
          <h3>
            Expected Days : <span>0 DAYS</span>
          </h3>
          <h3>Total: $5</h3>
        </div>
      </div>
      <div className="offerSendBtn">
        <button type="button" className="btn btn-outline-success">
          Send
        </button>
      </div>
    </CustomModal>
  );
};
