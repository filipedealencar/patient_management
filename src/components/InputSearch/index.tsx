import { IconLoupe } from "@/icons";
import {
  InputSearchWrapper,
  ContainerInputSearch,
  InputSearchStyle,
  ButtonLoupe,
} from "./styles";

const InputSearch: React.FC<IInputSearch> = ({ styles }) => {
  return (
    <InputSearchWrapper style={styles?.wrapper}>
      <ContainerInputSearch style={styles?.container}>
        <InputSearchStyle style={styles?.input} placeholder="Buscar" />
        <ButtonLoupe>
          <IconLoupe />
        </ButtonLoupe>
      </ContainerInputSearch>
    </InputSearchWrapper>
  );
};

export default InputSearch;
