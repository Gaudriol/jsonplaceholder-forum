import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../state/users/actions";
import { userByIdSelector } from "../state/users/selectors";

export const User = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const user = useSelector(userByIdSelector(userId));

  useEffect(() => {
    if (!user) {
      dispatch(getUser(userId));
    }
  }, [dispatch, user]);

  if (!user) {
    return "loading...";
  }

  const {
    name,
    username,
    company: { name: companyName, catchPhrase, bs },
    address: { street, suite, city, zipcode },
    email,
    phone,
    website,
  } = user;

  return (
    <section>
      <h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <a href={website} target="_blank" rel="noopener noreferrer">
        {website}
      </a>
      <p>Company : {companyName}</p>
      <p>Location : {city}</p>
    </section>
  );
};
