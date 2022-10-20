import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { loadSavedCards } from "../app/features/savedCards";
import useAuth from "../auth/useAuth";
import AddNewCardModal from "./AddNewCardModal";
import CardItem from "./CardItem";
import {openAddNewCardModal} from "../app/features/addNewCardModal"

const Cards = () => {
  const { fetchData } = useAuth();
  const dispatch = useDispatch();
  const { isLoading, allCards, isError } = useSelector(
    (state) => state.savedCards
  );

  useEffect(() => {
    dispatch(loadSavedCards(fetchData));
  }, []);
  return (
    <div>
      <div className="w-full flex justify-end mb-5">
        <div>
          <button
            type="button"
            className="flex items-center gap-[8px] text-[#3f8cfe] py-[10px] px-[15px] bg-[#ecf4ff] rounded-[8px] text-[15px] leading-6 font-bold font-nunito hover:bg-[#3f8cfe] hover:text-white transition duration-300 ease-in"
            onClick={()=>dispatch(openAddNewCardModal())}
          >
            <BsPlusLg />
            <span>Add new card</span>
          </button>
        </div>
      </div>

      {/* CARDS CONTAINER  */}
      <div className="grid grid-cols-12 gap-5">
        {allCards?.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>

      <AddNewCardModal/>
    </div>
  );
};

export default Cards;
