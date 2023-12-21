import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { ButtonStyles } from "./styles";
import { Loader } from "../Loader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  title: string;
  loadingText?: string;
  buttonType?: "primary" | "secondary" | "tertiary" | "invert" | "success";
  isLight?: boolean;
  isBlueSencondary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  loading,
  loadingText,
  title,
  buttonType = "primary",
  isBlueSencondary,
  ...rest
}) => {
  return loading ? (
    <>
      <Loader color={buttonType === "invert" ? "#48A4F9" : "#ffffff"} />
      <span>{loadingText ?? ""}</span>
    </>
  ) : (
    <ButtonStyles
      $buttonType={buttonType}
      type="button"
      disabled={loading}
      $isBlueSencondary={isBlueSencondary}
      {...rest}
    >
      {title}
    </ButtonStyles>
  );
};
