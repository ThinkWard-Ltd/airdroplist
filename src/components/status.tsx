import styled from 'styled-components'

const TokenStatus = styled.div`
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 8px;
  border-radius: 13px;
  background-color: #d1fae5;
  color: #10b981;
  font-size: 12px;

  .spot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #10b981;
    margin-right: 6px;
  }
`

export default () => {
  return <TokenStatus>
    <i className="spot" />
    进行中
  </TokenStatus>
}