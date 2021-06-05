import styled from 'styled-components'

const Logo = styled.div`
  font-size: 24px;
  color: #000;
  display: inline-block;
  position: relative;
  font-weight: 900;

  &::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #ff3465;
    top: 7px;
    left: 14.9px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #fff;
  }
`
export default () => <Logo>Airdrop List</Logo>