import styled from 'styled-components'
import Header from 'layouts/header'
import Banner from './components/banner'
import Token from './components/token'
import Footer from 'layouts/footer'

const Body = styled.div`
  width: 100%;
  padding: 80px 0 20px 0;
  background-color: #fff8f9;
`

const AirDrop = styled.div`
  width: 1100px;
  margin: 0 auto;
`

export default () => {
  return (
    <>
      <Header />
      <Banner />
      <Body>
        <AirDrop>
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
        </AirDrop>
      </Body>
      <Footer />
    </>
  );
}

