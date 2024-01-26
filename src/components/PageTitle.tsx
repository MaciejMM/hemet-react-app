import React from 'react';
import styled from '@emotion/styled';

const PageTitleDiv = styled.div`
  position: relative;

  &::before {
    background-color: #fed50a;
    bottom: 32px;
    content: '';
    height: 4px;
    left: 0;
    position: absolute;
    width: 48px;
  }
`;

type PageTitleProps = {
  title: string;
};

export const PageTitle = (props: PageTitleProps) => {
  return (
    <PageTitleDiv className="text-hm-black90 text-3xl xl:text-hm-title font-bolder py-12 xl:py-18">
      {props.title}
    </PageTitleDiv>
  );
};
