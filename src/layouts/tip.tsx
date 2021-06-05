import styled from 'styled-components'
import Icon from 'components/icon'

export interface TipProps {
  close: () => void
}

const Tip = styled.header`
  background-color: #fff8f9;
  border-color: #ffeaef;
  color: #ff3465;
  height: 48px;
  font-size: 14px;
  padding: 0 24px;
  line-height: 48px;

  .tip-close {
    font-size: 14px;
    float: right;
    position: relative;
    top: 17px;
    cursor: pointer;
  }
`

export default ({close}: TipProps) => {
  return (
    <Tip>
      本站大部分空投需要科学上网，请将本站添加到浏览器书签。
      <Icon onClick={() => {close()}} className="tip-close" type="funder-guanbi" />
    </Tip>
  );
}