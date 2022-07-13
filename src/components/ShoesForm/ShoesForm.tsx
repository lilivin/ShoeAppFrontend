 import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getConstantValue } from 'typescript';
import eventBus from '../../EventBut';
import { editModal, hideModal } from '../../store/actions/modalActions';
import { addShoes, updateShoes } from '../../store/actions/shoesActions';
import { SingleShoes } from '../../types/Shoes';
import { Store } from "./../../types/Store";
 import './ShoesForm.scss';
 
 export default function ShoesForm() {
    const modalState = useSelector((state: Store) => state.modalReducer.modal);
    const currentUser = useSelector((state: Store) => state.userReducer);
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const formDefaultData = {
        id: null,
        createdAt: null,
        updatedAt: null,
        product_code: 0,
        size: 0,
        site: "L",
        owner_id: currentUser.id,
        requester_id: ""
    }
    const [formData, setFormData] = useState<SingleShoes>(formDefaultData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = event.target.value;
        setFormData({
            ...formData,
            [event.target.name]: value
        })
    }

    const submitData = () => {
      const processedData = {
        product_code: formData.product_code,
        size: formData.size,
        site: formData.site,
        owner_id: formData.owner_id,
        requester_id: formData.requester_id
      }
      console.log(processedData)
      fetch('http://localhost:3000/shoes/create-shoe',{
          method: 'POST',
          body: JSON.stringify(processedData),
          headers: {"Content-Type": "application/json"}
        })
        .then((response) => {
          return response.json()
        })
        .then(() => {
          dispatch(addShoes(formData));
          setFormData(formDefaultData)
        })
        .catch((err) => {
          setError(err.message);
        })
    }

    const modifyData = () => {
      fetch('http://localhost:3000/shoes/update-shoe/' + formData.id, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {"Content-Type": "application/json"}
      })
      .then(() => {
        dispatch(updateShoes(formData));
      })
      .catch((err) => {
        setError(err.message)
      })
    }

    const handleData = (data: SingleShoes) => {
      setFormData(data)
    }

    const handleCloseModal = () => {
      dispatch(hideModal());
    }

    useEffect(() => {
      eventBus.on("couponApply", handleData)
      return () => {
        eventBus.remove("couponApply", handleData);
      }
    }, [])

    return (
        <div className='shoes-form'>
            <button onClick={handleCloseModal} className='shoes-form__close-button'>X</button>
            <input className='shoes-form__input' onChange={handleChange} value={formData.product_code > 0 ? formData.product_code : ""} type="text" name="product_code" placeholder='Product Code' />
            <input className='shoes-form__input' onChange={handleChange} value={formData.size > 0 ? formData.size : ""} type="number" name="size" placeholder="Size" />
            <select className='shoes-form__input' onChange={handleChange} value={formData.site} name="site">
                <option value="L">Left</option>
                <option value="R">Right</option>
            </select>
            <button className='shoes-form__button' onClick={modalState === "MODIFY" ? modifyData : submitData}>{modalState === "MODIFY" ? "Save changes" : "Add shoe" }</button>
        </div>
    )
 }
 