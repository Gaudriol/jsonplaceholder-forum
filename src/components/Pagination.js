import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const PaginationLink = styled("span")`
  font-weight: 500;
  cursor: pointer;

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.8;
          text-decoration: line-through;
          cursor: default;
        `
      : css`
          &:hover {
            color: ${({ theme }) => theme.colors.primary};
          }
        `}
  ${({ current }) =>
    current &&
    css`
      cursor: default;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
    `}
`;

export const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const hasPrevious = currentPage > 1 && totalPages !== 1;
  const hasNext = currentPage < totalPages;

  const pageItems = Array.from(Array(totalPages).keys()).map((index) => {
    return (
      <PaginationLink
        current={index + 1 === currentPage}
        key={index}
        onClick={() =>
          index + 1 !== currentPage ? setCurrentPage(index + 1) : null
        }
      >
        {index + 1}
      </PaginationLink>
    );
  });

  return (
    <Wrapper>
      <PaginationLink
        onClick={() =>
          hasPrevious ? setCurrentPage((prev) => prev - 1) : null
        }
        disabled={!hasPrevious}
      >
        {"< "}previous
      </PaginationLink>
      <div>{pageItems}</div>
      <PaginationLink
        onClick={() => (hasNext ? setCurrentPage((prev) => prev + 1) : null)}
        disabled={!hasNext}
      >
        next{" >"}
      </PaginationLink>
    </Wrapper>
  );
};
