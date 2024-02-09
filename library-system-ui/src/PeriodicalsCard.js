import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 35%;
  margin: 40px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
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
  border: 3px solid #15182e;
  padding: 8px 16px;
  border-radius: 5px;
`;

const PeriodicalsCard = ({ periodical }) => {
  const navigate = useNavigate();

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
      <ViewButton
        onClick={() =>
          navigate(`/pdfViewer`, {
            state: { pdfUrl: periodical.pdfUrl },
          })
        }
      >
        ViewButton
      </ViewButton>
    </CardContainer>
  );
};
export default PeriodicalsCard;
