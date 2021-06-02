import styled from 'styled-components'
import Theme from './theme'
const Header = styled.header`
  border-bottom: 1px solid #ffeaef;
  background-color: #fff;
  height: 70px;
`
const HeaderBody = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 30px;
`
const Logo = styled.div`
  font-size: 24px;
  color: #000;
  line-height: 70px;
  display: inline-block;
  position: relative;
  font-weight: 900;

  &::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #ff3465;
    top: 22px;
    left: 15.4px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #fff;
  }
`

const ThemeC = styled(Theme)`
  float: right;
`

export default () => {
  return (
    <Header>
      <HeaderBody>
        <Logo>Airdrop List</Logo>
        <ThemeC />
      </HeaderBody>
    </Header>
  );
}