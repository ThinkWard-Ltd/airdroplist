import styled from 'styled-components'
import Logo from 'components/logo'

const Footer = styled.header`
  background-color: #fff;
  padding: 40px 0 80px 0;
`
const FooterBody = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

const Copyright = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #212121;
  margin-top: 10px;
`

const FooterItem = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 200px;
`

const FooterItemTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #212121;
  font-weight: 800;
`

const Link = styled.a`
  font-size: 12px;
  line-height: 20px;
  color: #212121;
  font-weight: 400;
  margin-top: 10px;
  display: block;
`

const ContactUs = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;
  top: 12px;
  float: right;
`

export default () => {
  return (
    <Footer>
      <FooterBody>
        <FooterItem>
          <Logo />
          <Copyright>© AirdropList 2021</Copyright>
        </FooterItem>
        <ContactUs>
          <FooterItem>
            <FooterItemTitle>商务合作</FooterItemTitle>
            <Link>申请空投</Link>
            <Link>邮箱</Link>
          </FooterItem>
          <FooterItem>
            <FooterItemTitle>社交</FooterItemTitle>
            <Link>电报群</Link>
            <Link>推特</Link>
            <Link>博客</Link>
          </FooterItem>
        </ContactUs>
      </FooterBody>
    </Footer>
  );
}