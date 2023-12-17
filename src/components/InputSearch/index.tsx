import { IconLoupe } from "@/icons";
import {
  InputSearchWrapper,
  ContainerInputSearch,
  InputSearchStyle,
  ButtonLoupe,
} from "./styles";

const InputSearch: React.FC = ({}) => {
  return (
    <InputSearchWrapper>
      <ContainerInputSearch className="teste">
        <InputSearchStyle placeholder="teste" />
        <ButtonLoupe>
          <IconLoupe />
        </ButtonLoupe>
      </ContainerInputSearch>
    </InputSearchWrapper>
  );
};

export default InputSearch;
