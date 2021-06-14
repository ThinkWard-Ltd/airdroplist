import styled from 'styled-components'
import Logo from 'components/logo'
import Emit from 'components/emit'
import useTheme, { ThemeStyleProps } from 'hooks/useTheme'

const Footer = styled.footer<ThemeStyleProps>`
  background-color: ${props => props?.dark ? "#171a23" : "#fff"};
  padding: 40px 0;
`
const FooterBody = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

const Copyright = styled.div<ThemeStyleProps>`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${props => props?.dark ? "#fff" : "#212121"};
  margin-top: 10px;
`

const FooterItem = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 200px;
`

const FooterItemTitle = styled.div<ThemeStyleProps>`
  font-size: 14px;
  line-height: 20px;
  color: ${props => props?.dark ? "#fff" : "#212121"};
  font-weight: 800;
`

const Link = styled.a<ThemeStyleProps>`
  font-size: 12px;
  line-height: 20px;
  color: ${props => props?.dark ? "#fff" : "#212121"};
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
  text-align: right;
`

const Banner = styled.div<ThemeStyleProps>`
  height: 366px;
  position: relative;
  text-align: center;
  padding: 80px 200px;
  border-radius: 16px;
  margin: 40px 0 100px 0;
  background-color: ${props => props?.dark ? "#000" : "#212121"};

  &::after {
    content: " ";
    width: 400px;
    position: absolute;
    top: 0;
    bottom: 0;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-image: url(${props => props?.dark ? "/img/subscribe-right_dark.svg" : "/img/subscribe-right_light.svg"});
    right: 0;
    background-position: 100%;
  }

  &::before {
    content: " ";
    width: 400px;
    position: absolute;
    top: 0;
    bottom: 0;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-image: url(${props => props?.dark ? "/img/subscribe-left_dark.svg" : "/img/subscribe-left_light.svg"});
    left: 0;
  }
`

const BannerTitle = styled.div`
  font-size: 58px;
  line-height: 64px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 32px;
`

const BannerEmit = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 32px;
`

export default () => {
  const { isDark } = useTheme()

  return (
    <Footer dark={isDark}>
      <FooterBody>
        <Banner dark={isDark}>
          <BannerTitle>获取新的空投</BannerTitle>
          <BannerEmit>订阅可获取新的空投和重要的通知。</BannerEmit>
          <Emit />
        </Banner>
        <div style={{height: '160px'}}>
          <FooterItem>
            <Logo />
            <Copyright dark={isDark}>© AirdropList 2021</Copyright>
          </FooterItem>
          <ContactUs>
            <FooterItem>
              <FooterItemTitle dark={isDark}>商务合作</FooterItemTitle>
              <Link dark={isDark}>申请空投</Link>
              <Link dark={isDark}>邮箱</Link>
            </FooterItem>
            <FooterItem>
              <FooterItemTitle dark={isDark}>社交</FooterItemTitle>
              <Link dark={isDark}>电报群</Link>
              <Link dark={isDark}>推特</Link>
              <Link dark={isDark}>博客</Link>
            </FooterItem>
          </ContactUs>
        </div>
      </FooterBody>
    </Footer>
  );
}