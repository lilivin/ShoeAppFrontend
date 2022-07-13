import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Store } from "../../types/Store";
import { ShoesState, SingleShoes } from '../../types/Shoes';
import './UserShoesList.scss';
import ShoesListItem from '../ShoesListItem/ShoesListItem';
import { addShoesArray } from '../../store/actions/shoesActions';
import eventBus from '../../EventBut';
 
 export default function UserShoesList() {
    const state = useSelector((state: Store) => state);
    const dispatch = useDispatch();
    let user = state.userReducer;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [shoes, setShoes] = useState([]);
    console.log(user)
    
    useEffect(() => {
      console.log(state)
      if(user.id){
      fetch(`http://localhost:3000/shoes/all-user-shoes/${user.id}`)
        .then((response) => {
          return response.json()
        })
        .then((actualData) => {
          dispatch(addShoesArray(actualData));
          // setShoes(actualData)
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
      }
    }, []);

    // const handleData = (data: SingleShoes) => {
    //   setShoes((prevState) => (
    //     prevState.filter((value: any) => value.id !== data.id)
    //   ))
    // }

    // useEffect(() => {
    //   eventBus.on("removeShoes", handleData)
    //   return () => {
    //     eventBus.remove("removeShoes", handleData);
    //   }
    // }, [])

    return (
        <ul>
            {state.shoesReducer.shoes.map((shoe: SingleShoes, index: number) => {
                return <ShoesListItem key={index} shoe={shoe} />
            })}
        </ul>
    )
 }
 