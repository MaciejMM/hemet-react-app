import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.a`
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
  const buttonClass = `text-hm-black90 bg-yellow-hm hover:bg-black-75 ${buttonBorder} hover:text-hm-yellow h-14 grid items-center
  justify-center min-w-[150px] md:w-[300px] font-bold rounded-md uppercase`;

  return (
    <StyledButton className={buttonClass} href={props.pageLink}>
      {props.title}
    </StyledButton>
  );
};
