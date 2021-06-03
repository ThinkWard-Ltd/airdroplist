import styled from 'styled-components'
import Emit from 'components/emit'

const Banner = styled.div`
  height: 486px;
  position: relative;
  text-align: center;
  padding: 100px 0;
  overflow: hidden;

  &::after {
    content: " ";
    width: 694px;
    position: absolute;
    top: 0;
    bottom: 0;
    background-size: auto 100%;
    background-repeat: no-repeat;
    z-index: -1;
    background-image: url("/img/home-right_light.svg");
    right: 0;
  }

  &::before {
    content: " ";
    width: 694px;
    position: absolute;
    top: 0;
    bottom: 0;
    background-size: auto 100%;
    background-repeat: no-repeat;
    z-index: -1;
    background-image: url("/img/home-left_light.svg");
    left: 0;
  }
`

const Title = styled.div`
  font-size: 58px;
  line-height: 64px;
  font-weight: 800;
  max-width: 700px;
  margin: 0 auto 16px;
`

const H2 = styled.h2`
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  max-width: 540px;
  margin: 0 auto 24px;
  color: #a8a8b4;
`

export default () => {
  return (
    <Banner>
      <Title>
        <div style={{verticalAlign: 'inherit'}}>
          立即订阅，我们将为您提供最有价值的<span style={{color: '#ff3465'}}>空投</span>项目<span style={{color: '#ff3465'}}>。</span>
        </div>
      </Title>
      <H2>
        Airdrop List 是一个整合优质区块链项目空投，为用户提供最优质的，最有价值的区块链空投。Airdrop List 也是一个为优质的区块链项目提供媒体宣传的平台。
      </H2>
      <Emit />
    </Banner>
  );
}