import styled, { css } from "styled-components";

export const Button = styled.button`

  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    width: 30%;
    text-align: center;
    transition: 300ms ease-in-out;
    border: 0;
    border-radius: 1rem;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xsmall} 0;
    margin-bottom: ${theme.spacings.large};


    @media ${theme.media.desktop} {
      width: fit-content;
      padding: 9px 32px;
      height: 54px;

    }

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  `}
`;
