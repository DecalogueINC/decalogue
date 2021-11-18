import styled from "styled-components";

const Item = styled.div`
  transition: transform 200ms ease;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding: 15px;
  margin: 5px;
  border: 1px solid
    ${({ active }) => (active ? "rgba(0,0,0,.8)" : "rgba(0,0,0,.08")};
  color: #fff;
  background-color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

export default Item;