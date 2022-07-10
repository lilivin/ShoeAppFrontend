import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import ShoesForm from "../../components/ShoesForm/ShoesForm";
import ShoesList from "../../components/ShoesList/ShoesList";
import { addModal } from "../../store/actions/modalActions";
import { Store } from "../../types/Store";

export default function Dashboard() {
    const modalState = useSelector((state: Store) => state.modalReducer.modal);
    const dispatch = useDispatch();
    const handleAddModal = () => {
        dispatch(addModal());
    }
    return (
        <>
            { modalState !== 'HIDDEN' && <ShoesForm />}
            <ShoesList />
            <button onClick={handleAddModal}>Add Note</button>
        </>
    )
}
