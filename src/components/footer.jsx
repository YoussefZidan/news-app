import React from "react";
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Nav,
  NavItem,
  Row,
} from "reactstrap";
import * as Icon from "react-feather";

const Footer = () => {
  const footerStyles = {};
  return (
    <div style={footerStyles} className="bg-light-gray p-5">
      <Container fluid className="p-lg-5">
        <Row>
          <Col lg={3} className="mb-3">
            <Nav vertical>
              <NavItem>
                <p className="pointer">News</p>
              </NavItem>
              <NavItem>
                <p className="pointer">Events</p>
              </NavItem>
              <NavItem>
                <p className="pointer">About</p>
              </NavItem>
              <NavItem>
                <p className="pointer">FAQs</p>
              </NavItem>
            </Nav>
          </Col>
          <Col lg={3} className="mb-3">
            <Nav vertical>
              <NavItem>
                <p className="pointer">Privacy Policy</p>
              </NavItem>
              <NavItem>
                <p className="pointer">Contact Us</p>
              </NavItem>
              <NavItem>
                <p className="pointer">Complains</p>
              </NavItem>
            </Nav>
          </Col>
          <Col lg={3} className="mb-3">
            <p>Subscribe to Newsletter</p>
            <InputGroup>
              <Input placeholder="Email Address..." />
              <InputGroupAddon addonType="append">
                <Button color="success">Subscribe</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col lg={3} className="pl-5">
            <p>Follow Us On</p>
            <div>
              <Icon.Instagram className="text-muted mr-3 mb-2 pointer" size={28} />
              <Icon.Youtube className="text-muted mr-3 mb-2 pointer" size={28} />
              <Icon.Linkedin className="text-muted mr-3 mb-2 pointer" size={28} />
              <Icon.Facebook className="text-muted mr-3 mb-2 pointer" size={28} />
              <Icon.Twitter className="text-muted" size={28} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
