import styled from 'styled-components'
import Header from 'layouts/header'
import Banner from './components/banner'
import Token from './components/token'
import Footer from 'layouts/footer'
import useTheme, { ThemeStyleProps } from 'hooks/useTheme'

const Body = styled.div<ThemeStyleProps>`
  width: 100%;
  padding: 80px 0 60px 0;
  background-color: ${props => props?.dark ? "#000" : "#fff8f9"};
`

const AirDrop = styled.div`
  width: 1100px;
  margin: 0 auto;
`

export default () => {
  const { isDark } = useTheme()

  return (
    <>
      <Header />
      <Banner />
      <Body dark={isDark}>
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

