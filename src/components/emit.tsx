import styled from 'styled-components'
import useTheme, { ThemeStyleProps } from 'hooks/useTheme'

const Emit = styled.div`
  height: 46px;
  margin: 0 auto;
`

const Input = styled.input<ThemeStyleProps>`
  width: 240px;
  height: 46px;
  line-height: 46px;
  border-radius: 23px;
  color: ${props => props?.dark ? "#76cbff" : "#ff3465"};
  outline: none;
  background: none;
  border: 1px solid ${props => props?.dark ? "#393c4b" : "#ffeaef"};
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`

const Button = styled.div<ThemeStyleProps>`
  display: inline-block;
  width: 120px;
  height: 46px;
  line-height: 46px;
  border-radius: 23px;
  border: 1px solid ${props => props?.dark ? "#393c4b" : "#ff3465"};
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-left: 20px;
  color: ${props => props?.dark ? "#212121" : "#fff"};
  background-color: ${props => props?.dark ? "#76cbff" : "#ff3465"};
  cursor: pointer;
`

export default () => {
  const { isDark } = useTheme()

  return (
    <Emit>
      <Input dark={isDark} type="text" placeholder="输入邮箱，订阅优质空投信息" />
      <Button dark={isDark} >立即订阅</Button>
    </Emit>
  );
}