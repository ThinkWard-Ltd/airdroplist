import styled from 'styled-components'
import Icon from 'components/icon'

const Token = styled.div`
  width: 346px;
  height: 314px;
  background-color: #fff;
  border: 1px solid #ffeaef;
  border-radius: 24px;
  padding: 24px;
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  margin-right: 31px;
  margin-bottom: 31px;

  &:nth-child(3n) {
    margin-right: 0px;
  }
  
  &:hover {
    border: 1px solid #ff3465;
  }

  .spot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #10b981;
    margin-right: 6px;
  }


`

const TokenTitle = styled.div`
  height: 48px;
  line-height: 48px;
  margin-bottom: 16px;
`

const TokenStatusBox = styled.div`
  height: 48px;
  line-height: 48px;
  float: right;
`

const TokenStatus = styled.div`
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 8px;
  border-radius: 13px;
  background-color: #d1fae5;
  color: #10b981;
  font-size: 12px;
`

const Platform = styled.svg`
  position: relative;
  top: 12px;
  vertical-align: top;
  margin-right: 10px;
`

const TokenName = styled.div`
  font-size: 28px;
  line-height: 34px;
  font-weight: 600;
  color: #212121;
  margin-bottom: 16px;

  p {
    line-height: 1;
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    color: #727480;
  }
`

const EachAmount = styled.div`
  font-size: 28px;
  line-height: 34px;
  font-weight: 600;
  color: #ff3465;
  margin-bottom: 16px;

  p {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: #212121;
  }
`

const Claim = styled.div`
  p {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: #212121;
  }
`

const ClaimIcon = styled(Icon)`
  font-size: 40px;
  margin-right: 10px;
  color: #ff3465;
  position: relative;
  left: -2px;
`

export default () => {
  return (
    <Token>
      <TokenTitle>
        <img src="data:image/png;base64,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" alt="" />
        <TokenStatusBox>
          <Platform xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F3BA2F"></path>
            <path d="M9.087 10.803L12 7.89L14.9145 10.8045L16.6095 9.1095L12 4.5L7.392 9.108L9.087 10.803ZM4.5 12L6.195 10.305L7.89 12L6.195 13.695L4.5 12ZM9.087 13.197L12 16.11L14.9145 13.1955L16.6095 14.8898L12 19.5L7.392 14.892L7.38975 14.8898L9.087 13.197ZM16.11 12L17.805 10.305L19.5 12L17.805 13.695L16.11 12ZM13.719 11.9985H13.7205V12L12 13.7205L10.2817 12.003L10.2787 12L10.2817 11.9977L10.5825 11.6963L10.7288 11.55L12 10.2795L13.7197 11.9992L13.719 11.9985Z" fill="white"></path>
          </Platform>
          <TokenStatus>
            <i className="spot" />
            进行中
          </TokenStatus>
        </TokenStatusBox>
      </TokenTitle>
      <TokenName>
        Single Dog Coin
        <p>空投总额 10,000,000,000 DSG</p>
      </TokenName>
      <EachAmount>
        <p>每人可领取</p>
        1000,000 DSG
      </EachAmount>
      <Claim>
        <p>要求</p>
        <ClaimIcon type="funder-dianbao" />
        <ClaimIcon style={{fontSize: '35px', top: '-2px'}} type="funder-discord" />
        <ClaimIcon type="funder-twitter-circle-fill" />
      </Claim>
    </Token>
  );
}