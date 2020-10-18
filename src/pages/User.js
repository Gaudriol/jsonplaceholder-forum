import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getUser } from "../state/users/actions";
import { userByIdSelector } from "../state/users/selectors";

import { PageTitle } from "../components/PageTitle";
import { Text } from "../components/Text";

import mailIcon from "../icons/mail.svg";
import locationIcon from "../icons/location.svg";
import webIcon from "../icons/international.svg";
import officeIcon from "../icons/office.svg";

const Title = styled(PageTitle)`
  margin: 0;
`;

const InfoWrapper = styled("div")`
  margin-top: 16px;
`;

const Info = styled("div")`
  display: flex;

  & > img {
    width: 16px;
  }

  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

export const User = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const user = useSelector(userByIdSelector(userId));

  useEffect(() => {
    if (!user) {
      dispatch(getUser(userId));
    }
  }, [dispatch, user, userId]);

  if (!user) {
    return "loading...";
  }

  const {
    name,
    username,
    company: { name: companyName },
    address: { city },
    email,
    website,
  } = user;

  return (
    <section>
      <Title>{name}</Title>
      <Text fontSize="1.2rem" color="gray" fontWeight="600">
        {username}
      </Text>
      <InfoWrapper>
        <Info title="company">
          <img src={officeIcon} alt="office icon" />
          <p>{companyName}</p>
        </Info>
        <Info title="location">
          <img src={locationIcon} alt="mail icon" />
          <p>{city}</p>
        </Info>
        <Info>
          <img src={mailIcon} alt="mail icon" />
          <a href={`mailto:${email}`}>{email}</a>
        </Info>
        <Info>
          <img src={webIcon} alt="web icon" />
          <a as="a" href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </Info>
      </InfoWrapper>
    </section>
  );
};
