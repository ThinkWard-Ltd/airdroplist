import styled from 'styled-components'
import useTheme, { ThemeStyleProps } from 'hooks/useTheme'

interface CircleProps extends ThemeStyleProps {
  size: number;
}

const Circle = styled.div<CircleProps>`
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
  border-radius: 50%;
  border: 4px solid ${props => props?.dark ? "#171A23" : "#fff"};
  position: absolute;
  top: ${props => -(props.size - 48) / 2 + 'px'};
  left: ${props => -(props.size - 48) / 2 + 'px'};
`

export default () => {
  const { isDark } = useTheme()

  return <>
    <Circle size={1968} dark={isDark} />
    <Circle size={1872} dark={isDark} />
    <Circle size={1776} dark={isDark} />
    <Circle size={1680} dark={isDark} />
    <Circle size={1584} dark={isDark} />
    <Circle size={1488} dark={isDark} />
    <Circle size={1392} dark={isDark} />
    <Circle size={1296} dark={isDark} />
    <Circle size={1200} dark={isDark} />
    <Circle size={1104} dark={isDark} />
    <Circle size={1008} dark={isDark} />
    <Circle size={912} dark={isDark} />
    <Circle size={816} dark={isDark} />
    <Circle size={720} dark={isDark} />
    <Circle size={624} dark={isDark} />
    <Circle size={528} dark={isDark} />
    <Circle size={432} dark={isDark} />
    <Circle size={336} dark={isDark} />
    <Circle size={240} dark={isDark} />
    <Circle size={144} dark={isDark} />
  </>
}