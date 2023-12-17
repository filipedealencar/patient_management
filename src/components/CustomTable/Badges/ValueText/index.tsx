import { ContainerBadgeText } from "./styles";

export const BadgeText: React.FC<PropsBadgeText> = ({ name }) => {
  return <ContainerBadgeText>{name}</ContainerBadgeText>;
};
