import styled from 'styled-components'
import Icon from 'components/icon'
import useTheme from '../../../hooks/useTheme'

interface StyleProps {
  isTheme: boolean
}

const Theme = styled.div`
  display: inline-block;
  height: 36px;
`

const Dark = styled.div<StyleProps>`
  display: inline-block;
  width: 38px;
  height: 36px;
  vertical-align: top;
  text-align: center;
  color: #171a23;
  font-size: 24px;
  cursor: pointer;
  background-color: ${props => props?.isTheme ? "#76cbff" : "#fff"};
`

const Light = styled(Dark)<StyleProps>`
  background-color: ${props => props?.isTheme ? "#171a23" : "#ff3465"};
  color: #fff;
`
export default () => {
  const { toggleTheme, isDark } = useTheme()

  return (
    <Theme>
      <Dark isTheme={isDark} onClick={() => toggleTheme(true)}>
        <Icon type="funder-yueliang" />
      </Dark>
      <Light isTheme={isDark} onClick={() => toggleTheme(false)}>
        <Icon type="funder-taiyang" />
      </Light>
    </Theme>
  );
}


// background-color: ${({ theme }) => theme.themeC.active};