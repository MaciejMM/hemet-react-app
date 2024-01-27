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
  color?: string;
  disablePaddingTop?: boolean;
};

export const PageTitle = (props: PageTitleProps) => {
  const color = props.color === undefined ? 'hm-black90' : props.color;
  const disablePadding = !props.disablePaddingTop ? 'py-12 xl:py-18' : 'pb-12 xl:pb-18';

  const classStyle = `text-${color} text-3xl xl:text-hm-title font-bolder ${disablePadding} `;
  return <PageTitleDiv className={classStyle}>{props.title}</PageTitleDiv>;
};
