import React from 'react';
import styled from '@emotion/styled';

type BreadcrumbProps = {
  title: string;
};

const StyledBreadcrumb = styled.ul`
  li {
    display: inline-block;

    &:not(:last-of-type)::after {
      content: '>';
      color: $black-50;
      margin: 0 4px;
    }
  }
`;

export const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <div className="container">
      <StyledBreadcrumb className="pt-26 lg:pt-36">
        <li className="">
          <a className="text-hm-black50" href="/">
            Strona główna
          </a>
        </li>
        <li className="font-semibold">{props.title}</li>
      </StyledBreadcrumb>
    </div>
  );
};
