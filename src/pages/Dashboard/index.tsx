import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ShoesForm from "../../components/ShoesForm/ShoesForm";
import { addModal } from "../../store/actions/modalActions";
import { Store } from "../../types/Store";

export default function Dashboard() {
    const modalState = useSelector((state: Store) => state.modalReducer.modal);
    const dispatch = useDispatch();
    const handleAddModal = () => {
        dispatch(addModal());
    }
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    return (
        <>
            { modalState !== 'HIDDEN' && <ShoesForm />}
            Dashboard
            <button onClick={handleAddModal}>Add Note</button>
        </>
    )
}
