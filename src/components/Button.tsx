import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: $yellow;
  color: $black-90;
  display: grid;
  height: 38px;
  min-width: 150px;
  font-weight: $medium;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  place-content: center;
  text-align: center;
  width: 200px;

  &:hover {
    background-color: $black-75;
    color: $yellow;
    border: 2px solid $yellow;
  }

  &-xl {
    width: 100%;
    min-height: 50px;
    text-transform: uppercase;

    font-weight: $bolder;
    @include for-tablet-portrait-up {
      max-width: 250px;
    }
  }
`;

export const Button = () => {
  return <div>Btn</div>;
};
