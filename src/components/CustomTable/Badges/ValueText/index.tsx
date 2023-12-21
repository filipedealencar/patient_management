import { ContainerBadgeText } from "./styles";

export const BadgeText: React.FC<PropsBadgeText> = ({ name, callBack }) => {
  return <ContainerBadgeText onClick={callBack}>{name}</ContainerBadgeText>;
};
