import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #003049;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;

  a {
    color: white;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: #f77f00;
    }
  }
`;

const Footer = ({ socialLinks }) => {
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case "github":
        return <FaGithub />;
      case "linkedin":
        return <FaLinkedin />;
      default:
        return null;
    }
  };

  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Igor dos Santos Rosa</p>
      <SocialIcons>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {getIcon(link.name)}
          </a>
        ))}
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
