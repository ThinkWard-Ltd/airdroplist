import styled from 'styled-components'
import useTheme, { ThemeStyleProps } from 'hooks/useTheme'

const Logo = styled.div<ThemeStyleProps>`
  font-size: 24px;
  color: ${props => props?.dark ? "#fff" : "#000"};
  display: inline-block;
  position: relative;
  font-weight: 900;

  &::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: ${props => props?.dark ? "#76cbff" : "#ff3465"};
    top: 7px;
    left: 14.9px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid ${props => props?.dark ? "#171a23" : "#fff"};
  }
`
export default () => {
  const { isDark } = useTheme()

  return <Logo dark={isDark}>Airdrop List</Logo>
}