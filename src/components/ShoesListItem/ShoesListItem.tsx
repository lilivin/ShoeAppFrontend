import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import eventBus from '../../EventBut';
import { editModal } from '../../store/actions/modalActions';
import { removeShoes } from '../../store/actions/shoesActions';
import { SingleShoes } from '../../types/Shoes';
 import './ShoesListItem.scss';
 
 export default function ShoesListItem(props: { shoe: SingleShoes }) {
    const { shoe } = props;
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const onRemoveShoes = (id: string) => {
      fetch('http://localhost:3000/shoes/delete-shoe/' + id, {method: 'DELETE'})
        .then(() => dispatch(removeShoes(id)))
        // .then(() => eventBus.dispatch("removeShoes", shoe))
        .catch((err) => setError(err.message))
    }

    const onUpdateShoes = () => {
      dispatch(editModal())
      setTimeout(() => {
        eventBus.dispatch("couponApply", shoe);
      }, 0)
    }

    return <li><span>{shoe.product_code + " " + shoe.size}</span><button onClick={() => onRemoveShoes(shoe.id!)}>Delete</button><button onClick={() => onUpdateShoes()}>Update</button></li>;
 }
 