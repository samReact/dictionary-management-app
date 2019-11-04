import React from 'react';
import styled from 'styled-components';
import { MdAdd, MdList, MdWarning } from 'react-icons/md';
import { Button, Navbar, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const theme = {
  primary: '#00b8eb',
  darkPrimary: '#0090ea',
  secondary: '#f2f6fa',
  white: '#fff',
  textSecondary: '#002e67',
  warning: '#fd7e14',
};

const mdAdd = props => <MdAdd className={props.className} />;
const mdList = props => <MdList className={props.className} />;
const mdWarning = props => <MdWarning className={props.className} />;
const button = props => <Button className={props.className} {...props} />;
const navBar = props => <Navbar className={props.className} {...props} />;
const link = props => <Link className={props.className} {...props} />;
const col = props => <Col className={props.className} {...props} />;

export const IconAdd = styled(mdAdd)`
  height: 30px;
  width: 30px;
`;

export const IconList = styled(mdList)`
  height: 30px;
  width: 30px;
`;

export const IconWarning = styled(mdWarning)`
  color: ${theme.warning};
`;

export const StyledLink = styled(link)`
  text-transform: uppercase;
  color: ${theme.primary};
  align-items: center;
  display: flex;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
    text-decoration: none;
    color: ${theme.primary};
  }
`;

export const StyledNavBar = styled(navBar)`
  background-color: ${theme.secondary};
  border-bottom: 1px solid lightgrey;
`;

export const VCenteredWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const VHCenteredWrapper = styled(VCenteredWrapper)`
  justify-content: center;
`;

export const StyledAddRowButton = styled(button)`
  border-color: ${theme.primary};
  color: ${theme.primary};
  :hover {
    background-color: ${theme.primary};
    border-color: ${theme.white};
  }
  :focus,
  :active {
    outline: none !important;
    box-shadow: none;
  }
`;

export const StyledAddButton = styled(button)`
  background-color: ${theme.primary};
  border-color: ${theme.white};
  :hover {
    border-color: ${theme.white};
  }
  :focus,
  :active {
    outline: none !important;
    box-shadow: none;
  }
`;

export const ComponentWrapper = styled.div`
  margin-top: 10vh;
`;
export const ContentWrapper = styled.div`
  margin-top: 20vh;
`;

export const ScrollWrapper = styled.div`
  height: 20vh;
  background-color: ${theme.secondary};
  border-radius: 6px;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid lightgrey;
  line-height: 1em;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar:vertical {
    width: 8px;
  }
  ::-webkit-scrollbar:horizontal {
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const NameWrapper = styled.div`
  height: 5vh;
  background-color: ${theme.secondary};
  border-radius: 6px;
  padding: 10px;
  border: 1px solid lightgrey;
  align-items: center;
  display: flex;
`;

export const ColWarning = styled(col)`
  display: flex;
  align-items: center;
`;
