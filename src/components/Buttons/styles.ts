import styled from "styled-components";

export interface ButtonProps {
  $isLight?: boolean;
  $buttonType?: string;
  $isBlueSencondary?: boolean;
  $isTerciaryButton?: boolean;
}

export const ButtonStyles = styled.button<ButtonProps>`
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 500;
  color: ${({ theme, $buttonType, disabled, $isBlueSencondary }) =>
    $buttonType === "secondary"
      ? disabled
        ? "rgb(234 235 236)"
        : $isBlueSencondary
        ? "#0144dd"
        : "#8F9194"
      : $buttonType === "invert"
      ? "#0144dd"
      : "#ffffff"};

  padding: ${({ $buttonType }) => ($buttonType === "tertiary" ? "0" : "8px")};

  pointer-events: ${({ disabled }) => (disabled ? "none" : "visible")};

  background-color: ${({ theme, $buttonType, disabled }) =>
    $buttonType === "secondary"
      ? "#ffffff"
      : $buttonType === "invert"
      ? "#eaebec"
      : $buttonType === "success"
      ? "green"
      : disabled
      ? "rgb(177 212 243)"
      : $buttonType === "tertiary"
      ? "none"
      : "#0144dd"};

  border-width: ${({ $buttonType }) =>
    $buttonType === "secondary"
      ? "1px"
      : $buttonType === "invert"
      ? "1px"
      : "0"};
  border-style: solid;
  border-color: ${({ theme, $buttonType, disabled, $isBlueSencondary }) =>
    $buttonType === "secondary"
      ? disabled
        ? "rgb(234 235 236);"
        : $isBlueSencondary
        ? "#0144dd"
        : "#D4D5D6"
      : $buttonType === "invert"
      ? "#0144dd"
      : $buttonType === "tertiary"
      ? "none"
      : "#0144dd"};
  border-radius: 10px;

  user-select: none;
  transition: filter 0.3s width 1s;

  &:hover {
    filter: brightness(0.9);
    /* background-color: ${(props) =>
      props.$isLight
        ? "rgba(212, 213, 214, 0.2)"
        : "rgba(72, 164, 249, 0.8)"}; */
  }

  span {
    margin-left: 8px;
  }
`;
