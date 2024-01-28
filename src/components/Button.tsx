import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledButton = styled(Link)`
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;

type LinkProps = {
  pageLink: string;
  title: string;
  disableBorder?: boolean;
};

export const LinkButton = (props: LinkProps) => {
  const buttonBorder = !props.disableBorder ? 'hover:border-2 hover:border-hm-yellow' : '';
  const buttonClass = `text-hm-black90 bg-hm-yellow hover:bg-hm-black75 ${buttonBorder} hover:text-hm-yellow h-14 grid items-center text-center min-w-[150px]  md:w-[300px] font-bold uppercase`;

  return (
    <StyledButton className={buttonClass} to={props.pageLink}>
      {props.title}
    </StyledButton>
  );
};
