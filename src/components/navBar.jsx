import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav};
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  margin-bottom: 10px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  list-style-type: none;

  & > li:not(:last-child):not(:first-child):after {
    margin: 0.5rem;
    content: "|";
  }
`;

const Yspan = styled(Link)`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  color: white;
  border: 1px solid white;
  margin-right: 0.3rem;
  font-weight: 550;
  height: 19px;
  width: 19px;
`;

const BrandSpan = styled.span`
  margin-right: 0.7rem;
`;

const NavBar = () => {
  return (
    <Nav>
      <Ul>
        <li>
          <BrandSpan>
            <Yspan>
              <strong>Y</strong>
            </Yspan>
            <NavLink to="/news">
              <strong>Hacker News</strong>
            </NavLink>
          </BrandSpan>
        </li>
        <li>
          <NavLink to="/newst">new</NavLink>
        </li>
        <li>
          <NavLink to="/front">past</NavLink>
        </li>
        <li>
          <NavLink to="/newcomments">comments</NavLink>
        </li>
        <li>
          <NavLink to="/ask">ask</NavLink>
        </li>
        <li>
          <NavLink to="/show">show</NavLink>
        </li>
        <li>
          <NavLink to="/jobs">jobs</NavLink>
        </li>
        <li>
          <NavLink to="/submit">submit</NavLink>
        </li>
      </Ul>
    </Nav>
  );
};

export default NavBar;
