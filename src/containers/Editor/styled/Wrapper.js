import styled from 'styled-components'

const Wrapper = styled.div`
  flex-basis: 55vw;
  padding-top: 15vh;
  box-sizing: border-box;
  & .hidden-toggle {
    display: none;
  }
  & .markdown {
    min-height: 500px;
    width: 100%;
    padding: 0;
    font-size: 20px;
    background-color: transparent;
    color: #424242;
    font-family: 'Inconsolata', monospace;
    line-height: 1.5;
    overflow-x: hidden;
    background: white;
  }
`

export default Wrapper
