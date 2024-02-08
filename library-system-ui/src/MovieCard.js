import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useCart } from './CartContext';

const CardContainer = styled.div`
  width: 30%;
  margin: 40px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`;

const SuccessMessage = styled.div`
  color: green;
`;

const Description = styled.div`
  text-align: center;
`;

const Genre = styled.div`
  text-align: center;
`;

const Director = styled.div`
  text-align: center;
`;

const Rating = styled.div`
  text-align: center;
`;

const MovieImage = styled.img`
  height: 50px;
  width: 98%;
  object-fit: cover;
`;

const AddToCart = styled.button`
  text-align: center;
  background-color: #f0f0f0;
  color: #333;
  border: 3px solid #15182e;
  padding: 8px 16px;
  border-radius: 5px;
`;

const MovieCard = ({ movie }) => {
  const { addToCart } = useCart(); 
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    try {
      const itemType = 'movie'; // Set the item type directly as 'movie'
      addToCart({ ...movie, type: itemType });
      setIsAdded(true);
    } catch (error) {
      setIsAdded(false);
    }
  };

  useEffect(() => {
    let timer;
    if (isAdded) {
      timer = setTimeout(() => {
        setIsAdded(false);
      }, 2000); 
    }
    return () => clearTimeout(timer);
  }, [isAdded]);

  return (
    <CardContainer>
      <MovieImage src={movie.imgUrl} alt={`Cover of ${movie.title}`} />
      <Description>Title: {movie.title}</Description>
      <Genre>Genre: {movie.genre}</Genre>
      <AddToCart onClick={handleAddToCart}>Add to cart</AddToCart>
      {isAdded && <SuccessMessage>Item added to cart successfully!</SuccessMessage>}
    </CardContainer>
  );
};


export default MovieCard;