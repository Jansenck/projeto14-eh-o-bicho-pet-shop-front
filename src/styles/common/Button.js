const Button = styled.button`
  margin-top: 10px;
  height: 46px;
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.lightgreen};
  color: ${(props) => props.theme.white};
  font-family: "Arial";
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &&:hover {
    filter: brightness(1.1);
  }
`;
