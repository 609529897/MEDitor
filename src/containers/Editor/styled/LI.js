import styled from 'styled-components'

const LI = styled.li`
  list-style: none;
  padding: 0px;
  font-size: 1.6rem;
  font-family: Roboto, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: #f5f5f5;
  }
  & span {
    cursor: pointer;
    flex-grow: 1;
    font-size: 16px;
    margin-right: 30px;
    width: 146px;
  }
  & svg {
    cursor: pointer;
    fill: #bdbdbd !important;
  }
  & svg:hover {
    fill: #607d8b !important;
  }
  & input {
    border: none!important;
  }
`

export default LI
