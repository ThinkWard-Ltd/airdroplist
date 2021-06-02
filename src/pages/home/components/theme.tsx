import styled from 'styled-components'
import Icon from 'components/icon'
import useTheme from '../../../hooks/useTheme'

interface StyleProps {
  dark: boolean
}

const Theme = styled.div`
  display: inline-block;
  height: 36px;
  float: right;
  position: relative;
  top: 17px;
`

const Dark = styled.div<StyleProps>`
  display: inline-block;
  width: 38px;
  height: 36px;
  text-align: center;
  color: #171a23;
  font-size: 24px;
  cursor: pointer;
  background-color: ${props => props?.dark ? "#76cbff" : "#fff"};
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  border: 1px solid ${props => props?.dark ? "#393c4b" : "#ffeaef"};
  margin-right: -1px;
`

const Light = styled.div<StyleProps>`
  background-color: ${props => props?.dark ? "#171a23" : "#ff3465"};
  color: #fff;
  display: inline-block;
  width: 38px;
  height: 36px;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  border: 1px solid ${props => props?.dark ? "#393c4b" : "#ffeaef"};
`
export default () => {
  const { toggleTheme, isDark } = useTheme()

  return (
    <Theme>
      <Dark dark={isDark} onClick={() => toggleTheme(true)}>
        <Icon type="funder-yueliang" />
      </Dark>
      <Light dark={isDark} onClick={() => toggleTheme(false)}>
        <Icon type="funder-taiyang" />
      </Light>
    </Theme>
  );
}


// background-color: ${({ theme }) => theme.themeC.active};