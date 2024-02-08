import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 30%;
  margin: 40px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  background-color: #15182e; /* Dark blue background */
  color: white; /* White text */
`;

const Description = styled.div`
  text-align: center;
`;

const Genre = styled.div`
  text-align: center;
`;

const PublicationDate = styled.div`
  text-align: center;
`;
const BookImage = styled.img`
  height: 100px;
  width: 98%;
  object-fit: cover;
`;

const ViewButton = styled.button`
text-align: center;
background-color: #f0f0f0;
color: #333;
border: none; /* Remove border or set it to transparent if preferred */
padding: 8px 16px;
border-radius: 5px;
cursor: pointer; /* Change cursor to pointer to indicate button */
transition: background-color 0.3s ease; /* Smooth transition for hover effect */
font-family: 'Raleway';
  font-style: normal;
&:hover {
  background-color: #1f4f96; /* Slightly lighter blue on hover */
  color: white; /* Text color remains white */
}
`;

const PeriodicalsCard = ({ periodical }) => {
  return (
    <CardContainer>
      <BookImage src={periodical.imgUrl} />
      <br></br>
      <Description>Title: {periodical.periodicalName}</Description>
      <Genre> Publication Type: {periodical.type}</Genre>
      <PublicationDate>
        Publication Date: {periodical.publicationDate}
      </PublicationDate>

      <br></br>
      <ViewButton>Click to View</ViewButton>
    </CardContainer>
  );
};
export default PeriodicalsCard;
