import { CustomForm } from "@/components/CustomForm";
import { WrapperFormTemplate } from "./styles";
import { IFormTemplate } from "./types";

export const FormTemplate: React.FC<IFormTemplate> = ({ height, options }) => {
  return (
    <WrapperFormTemplate $customHeight={height}>
      <CustomForm options={options} />
    </WrapperFormTemplate>
  );
};
