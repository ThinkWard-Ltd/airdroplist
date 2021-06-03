import styled from 'styled-components'
import {useState} from 'react'
import Header from 'layouts/header'
import Tip from './components/tip'
import Banner from './components/banner'
import Token from './components/token'
import Footer from 'layouts/footer'

const Body = styled.div`
  width: 100%;
  padding: 80px 0;
  background-color: #fff8f9;
`

const AirDrop = styled.div`
  width: 1100px;
  margin: 0 auto;
`

export default () => {
  const [isShow, toggle] = useState<boolean>(true)
  return (
    <>
      {isShow && <Tip close={() => {
        toggle(false)
      }} />}
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

