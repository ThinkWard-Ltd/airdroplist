import styled from 'styled-components'
import Theme from './theme'
import Logo from 'components/logo'
import useTheme, { ThemeStyleProps } from 'hooks/useTheme'
import { useState } from 'react'
import Tip from './tip'

const Header = styled.header<ThemeStyleProps>`
  border-bottom: 1px solid ${props => props?.dark ? "#23252e" : "#fff8f9"};
  background-color: ${props => props?.dark ? "#171a23" : "#fff"};
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
  const { isDark } = useTheme()
  const [isShow, toggle] = useState<boolean>(true)
  return (
    <>
      {isShow && <Tip close={() => {
        toggle(false)
      }} />}
      <Header dark={isDark}>
        <HeaderBody>
          <Logo />
          <ThemeC />
        </HeaderBody>
      </Header>
    </>
  );
}