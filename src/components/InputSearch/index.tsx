import { IconLoupe } from "@/icons";
import {
  InputSearchWrapper,
  ContainerInputSearch,
  InputSearchStyle,
  ButtonLoupe,
} from "./styles";

const InputSearch: React.FC<IInputSearch> = ({ styles, id }) => {
  return (
    <InputSearchWrapper id={id} style={styles?.wrapper}>
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
