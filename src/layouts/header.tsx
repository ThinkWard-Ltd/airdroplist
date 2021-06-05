import styled from 'styled-components'
import Theme from './theme'
import Logo from 'components/logo'
import {useState} from 'react'
import Tip from './tip'

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

const ThemeC = styled(Theme)`
  float: right;
`

export default () => {
  const [isShow, toggle] = useState<boolean>(true)
  return (
    <>
      {isShow && <Tip close={() => {
        toggle(false)
      }} />}
      <Header>
        <HeaderBody>
          <Logo />
          <ThemeC />
        </HeaderBody>
      </Header>
    </>
  );
}