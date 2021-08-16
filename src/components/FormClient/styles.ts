import styled, { css } from 'styled-components'

export const Form = styled.form`
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.large};
      margin: ${theme.spacings.medium} auto;
      width: fit-content;
    `}
`;


export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const Legend = styled.legend`
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.medium};
    `}
`;

export const InputBlock = styled.div`
    ${({ theme }) => css`
      width: 100%;
      position: relative;
      margin-bottom: 4rem;
    `}

`;

export const AddressBlock = styled.div`

`;

export const InputAddressDoubleBlock = styled.div`
    ${({ theme }) => css`
      display: flex;
      justify-content: space-between;

    `}
`;


export const InputAddressBlock = styled.div`
    ${({ theme }) => css`
      width: 100%;
      position: relative;
      margin-bottom: 4rem;

    `}
`;

export const InputAddressStreet = styled.div`
      ${({ theme }) => css`
      width: 75%;
      position: relative;
      margin-bottom: 4rem;

    `}
`;

export const InputAddressNumber = styled.div`
      ${({ theme }) => css`
      width: 20%;
      position: relative;
      margin-bottom: 4rem;

    `}
`;

export const InputAddressCity = styled.div`
      ${({ theme }) => css`
      width: 75%;
      position: relative;
      margin-bottom: 4rem;

    `}
`;

export const InputAddressUf = styled.div`
      ${({ theme }) => css`
      width: 20%;
      position: relative;
      margin-bottom: 4rem;

    `}
`;





export const Label = styled.label`
    ${({ theme }) => css`
      position: absolute;
      top: 1rem;
      left: 0.3rem;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray};
      transition: all 200ms ease-in-out;

    `}
`;

export const Input = styled.input`
  ${(props) => css`
    position: relative;
    z-index: 1;
    height: 3.5rem;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${props.theme.colors.gray};
    background-color: transparent;
    font-size: ${props.theme.font.sizes.small};


    &:focus {
      outline: none;
      border-width: 2px;
      border-color: ${props.theme.colors.primary};
      transition: all 200ms ease-in-out;

    }


    &:focus + label, &:not(:placeholder-shown) + label {
      top: -1.5rem;
      color: ${props.theme.colors.primary};
      font-size: ${props.theme.font.sizes.xsmall};
    }



  `}
`;

export const ErrorMessage = styled.p`
    ${({ theme }) => css`
      color: ${theme.colors.error};
      font-size: ${theme.font.sizes.xsmall};
  `}
`
