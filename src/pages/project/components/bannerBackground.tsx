import styled from 'styled-components'

interface CircleProps {
  size: number;
}

const Circle = styled.div<CircleProps>`
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
  border-radius: 50%;
  border: 4px solid #fff;
  position: absolute;
  top: ${props => -(props.size - 48) / 2 + 'px'};
  left: ${props => -(props.size - 48) / 2 + 'px'};
`

export default () => {
  return <>
    <Circle size={1968} />
    <Circle size={1872} />
    <Circle size={1776} />
    <Circle size={1680} />
    <Circle size={1584} />
    <Circle size={1488} />
    <Circle size={1392} />
    <Circle size={1296} />
    <Circle size={1200} />
    <Circle size={1104} />
    <Circle size={1008} />
    <Circle size={912} />
    <Circle size={816} />
    <Circle size={720} />
    <Circle size={624} />
    <Circle size={528} />
    <Circle size={432} />
    <Circle size={336} />
    <Circle size={240} />
    <Circle size={144} />
  </>
}