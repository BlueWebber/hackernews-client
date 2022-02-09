import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const StyledUrl = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin: 5px 10px;
`;

const SecondaryLabel = styled.label`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 80%;
`;

const secondaryLinkBase = css`
  color: ${({ theme }) => theme.colors.text.secondary};

  &:hover {
    text-decoration: underline;
  }
`;

const SecondaryLink = styled(RouterLink)`
  ${secondaryLinkBase}
`;

const SecondaryAnchor = styled.a`
  ${secondaryLinkBase}
`;

const CaretIcon = styled(FontAwesomeIcon).attrs({
  icon: faCaretUp,
})`
  color: ${({ theme }) => theme.colors.text.mid};
`;

const UpvoteButton = styled.button.attrs({ children: <CaretIcon /> })`
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const PrimarySpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  & > * {
    margin: 0px 2px;
  }
`;

const SecondarySpan = styled.span`
  margin-left: 1.9rem;
`;

const Link = ({
  number,
  description,
  url: domain,
  points = 100,
  authorUsername = "boody",
  numberOfComments = 100,
  date = "3 hours ago",
  id,
}) => {
  return (
    <StyledUrl>
      <div>
        <PrimarySpan>
          <SecondaryLabel>{number + "."}</SecondaryLabel>
          <UpvoteButton />
          <a href={"https://" + domain}>{description}</a>
          <SecondaryLabel>
            (
            {
              <SecondaryAnchor href={"https://" + domain}>
                {domain}
              </SecondaryAnchor>
            }
            )
          </SecondaryLabel>
        </PrimarySpan>
        <SecondarySpan>
          <SecondaryLabel>
            {points} points by{" "}
            {
              <SecondaryLink to={`/u/${authorUsername}`}>
                {authorUsername}
              </SecondaryLink>
            }{" "}
            {date} | {<SecondaryLink to="#">hide</SecondaryLink>} |{"  "}
            <SecondaryLink to={`/links/${id}`}>
              {numberOfComments ? `${numberOfComments} comments` : "discuss"}
            </SecondaryLink>
          </SecondaryLabel>
        </SecondarySpan>
      </div>
    </StyledUrl>
  );
};

/*
const links = [
  {
    id: 1,
    url: "http://www.reactproject.com/hello/world",
    description:
      "This is a super awesome react project, you should visit it for sure",
    points: 100,
    date: "3 hours ago",
    postedBy: {
      username: "boody",
    },
  },
  {
    id: 2,
    url: "http://www.reactproject.com/hello/world",
    description:
      "This is a super awesome react project, you should visit it for sure",
    points: 100,
    date: "3 hours ago",
    postedBy: {
      username: "boody",
    },
  },
  {
    id: 3,
    url: "http://www.reactproject.com/hello/world",
    description:
      "This is a super awesome react project, you should visit it for sure",
    points: 100,
    date: "3 hours ago",
    postedBy: {
      username: "boody",
    },
  },
  {
    id: 4,
    url: "http://www.reactproject.com/hello/world",
    description:
      "This is a super awesome react project, you should visit it for sure",
    points: 100,
    date: "3 hours ago",
    postedBy: {
      username: "boody",
    },
  },
  {
    id: 5,
    url: "http://www.reactproject.com/hello/world",
    description:
      "This is a super awesome react project, you should visit it for sure",
    points: 100,
    date: "3 hours ago",
    postedBy: {
      username: "boody",
    },
  },
  {
    id: 6,
    url: "http://www.reactproject.com/hello/world",
    description:
      "This is a super awesome react project, you should visit it for sure",
    points: 100,
    date: "3 hours ago",
    postedBy: {
      username: "boody",
    },
  },
  {
    id: 7,
    url: "http://www.reactproject.com/hello/world",
    description:
      "This is a super awesome react project, you should visit it for sure",
    points: 100,
    date: "3 hours ago",
    postedBy: {
      username: "boody",
    },
  },
  {
    id: 8,
    url: "http://www.reactproject.com/hello/world",
    description:
      "This is a super awesome react project, you should visit it for sure",
    points: 100,
    date: "3 hours ago",
    postedBy: {
      username: "boody",
    },
  },
];
*/

const Links = ({ links }) => {
  return (
    <LinksContainer>
      {links.map((link, index) => (
        <Link
          number={index + 1}
          id={link.id}
          description={link.description}
          url={link.url}
          points={link.points}
          date={link.date}
          authorUsername={link?.postedBy?.name}
        />
      ))}
    </LinksContainer>
  );
};

export default Links;
