import { IconLoupe } from "@/icons";
import {
  InputSearchWrapper,
  ContainerInputSearch,
  InputSearchStyle,
  ButtonLoupe,
} from "./styles";

const InputSearch: React.FC<IInputSearch> = ({
  styles,
  id,
  onChange,
  value,
}) => {
  return (
    <InputSearchWrapper id={id} style={styles?.wrapper}>
      <ContainerInputSearch style={styles?.container}>
        <InputSearchStyle
          value={value}
          onChange={onChange}
          style={styles?.input}
          placeholder="Buscar"
        />
        <ButtonLoupe>
          <IconLoupe />
        </ButtonLoupe>
      </ContainerInputSearch>
    </InputSearchWrapper>
  );
};

export default InputSearch;
