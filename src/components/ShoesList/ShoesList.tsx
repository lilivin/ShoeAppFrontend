import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Store } from "./../../types/Store";
import { ShoesState, SingleShoes } from '../../types/Shoes';
import './ShoesList.scss';
import ShoesListItem from '../ShoesListItem/ShoesListItem';
import { addShoesArray } from '../../store/actions/shoesActions';
 
 export default function ShoesList() {
    const state = useSelector((state: Store) => state);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      fetch(`http://localhost:3000/shoes/all-shoes`)
        .then((response) => {
          return response.json()
        })
        .then((actualData) => {
          dispatch(addShoesArray(actualData.shoes));
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

    return (
        <ul>
            {state.shoesReducer.shoes.map((shoe: SingleShoes, index: number) => {
                return <ShoesListItem key={index} shoe={shoe} />
            })}
        </ul>
    )
 }
 