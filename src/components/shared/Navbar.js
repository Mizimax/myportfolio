import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu, Row, Col } from "antd";

import Logo from "./Logo";

const NavBar = styled.div``;
const CustomMenu = styled(Menu)`
  line-height: 60px !important;
`;
const LogoMenu = styled(Menu.Item)`
  cursor: pointer !important;
`;
const RightMenu = styled(Menu.Item)`
  float: right;
`;

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ location: nextProps.location });
  }

  render() {
    return (
      <NavBar>
        <Row type="flex" justify="center">
          <Col span={18}>
            <CustomMenu
              style={{ borderBottom: "none" }}
              mode="horizontal"
              selectedKeys={[this.state.location.pathname]}
            >
              <LogoMenu disabled>
                <Link to="/">
                  <Logo>Maxang.me</Logo>
                </Link>
              </LogoMenu>
              <RightMenu key="/exp">
                <Link to="/exp">Experience</Link>
              </RightMenu>
              <RightMenu key="/">
                <Link to="/">About</Link>
              </RightMenu>
            </CustomMenu>
          </Col>
        </Row>
      </NavBar>
    );
  }
}
