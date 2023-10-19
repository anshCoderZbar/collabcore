import React, { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import { CustomModal } from "components/Modal";
import { Days } from "app/mock/chat";

export const OfferContract = ({ setIsOpen, isOpen }) => {
  const [amount, setAmount] = useState(0);
  const [timePeriod, setTimePeriod] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onOffer = (data) => {
    console.log(data);
    if (data?.amount) {
      setIsOpen(false);
      toast.success("Offer send");
      reset({ amount: "" });
    }
  };
  return (
    <CustomModal setIsOpen={setIsOpen} isOpen={isOpen}>
      <div className="offer_price_pop">
        <h2>My Extra</h2>
        <div className="offer_inputs ">
          <span>For an Extra</span>
          <input
            type="number"
            placeholder="amount"
            {...register("amount", {
              required: true,
              onChange: (e) => {
                setAmount(e?.target?.value);
              },
            })}
          />
          <span>and an additional</span>
          <select
            className="form-select"
            aria-label="Default select example"
            {...register("days", {
              onChange: (e) => {
                setTimePeriod(e?.target?.value);
              },
            })}
          >
            {Days?.map((day, i) => {
              return (
                <option key={i} value={day}>{`${day} ${
                  day === 1 ? "day" : "days"
                }`}</option>
              );
            })}
          </select>
        </div>
        <div className="offer_pop_bottom">
          <h3>
            Expected Days : <span>{timePeriod} DAYS</span>
          </h3>
          <h3>Total: ${amount}</h3>
        </div>
      </div>
      <div className="offerSendBtn">
        <button
          onClick={handleSubmit(onOffer)}
          type="button"
          className="btn btn-outline-success"
        >
          Send
        </button>
      </div>
    </CustomModal>
  );
};
