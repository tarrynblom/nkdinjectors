import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between" gutter={[0, 32]}>
            <Col lg={8} md={8} sm={24} xs={24}>
              <Language>{t("Contact")}</Language>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:sales@nkdinjectors.co.za">
                <Chat>{t(`Email Us`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
              <Language>{t("Address")}</Language>
              <Para>26 Fred Nicholson Street</Para>
              <Para>Wonderboom South</Para>
              <Para>Pretoria</Para>
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
              <Language>{t("Follow Us")}</Language>
              <Para style={{ marginBottom: '1em' }}>
                <SocialLink href="https://wa.me/27658610876" src="whatsapp.svg" />
                WhatsApp: +27 65 861 0876
              </Para>
              <Para>{t("Coming Soon")}</Para>
              <SocialLink href="#" src="facebook.svg" />
              <SocialLink href="#" src="instagram.svg" />
            </Col>
          </Row>
          {/* <Row justify="space-between">
            <Col lg={12} md={12} sm={12} xs={24}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
            <Col lg={12} md={12} sm={12} xs={24}>
              <Language>{t("Follow Us")}</Language>
              <SocialLink href="https://www.facebook.com/yourpage" src="facebook.svg" />
              <SocialLink href="https://wa.me/yourphonenumber" src="whatsapp.svg" />
            </Col>
          </Row> */}
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
