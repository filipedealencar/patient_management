import {
  TTransformedValues,
  TFieldValues,
  TContext,
  UseFormWatch,
  UseFormGetValues,
  UseFormGetFieldState,
  UseFormSetError,
  UseFormClearErrors,
  UseFormSetValue,
  UseFormTrigger,
  FormState,
  UseFormResetField,
  UseFormReset,
  UseFormHandleSubmit,
  UseFormUnregister,
  Control,
  UseFormRegister,
  UseFormSetFocus,
} from "react-hook-form";

interface IFormTemplate {
  refFormTemplate?: LegacyRef<HTMLDivElement> | undefined;
  actionDismiss?: () => void;
  isModal: boolean;
  height: number;
  options: {
    titleSection: string;
    inputs: inputValue[];
    watch?: UseFormWatch<TFieldValues>;
    getValues?: UseFormGetValues<TFieldValues>;
    getFieldState?: UseFormGetFieldState<TFieldValues>;
    setError?: UseFormSetError<TFieldValues>;
    clearErrors?: UseFormClearErrors<TFieldValues>;
    setValue?: UseFormSetValue<TFieldValues>;
    trigger?: UseFormTrigger<TFieldValues>;
    formState?: FormState<TFieldValues>;
    resetField?: UseFormResetField<TFieldValues>;
    reset?: UseFormReset<TFieldValues>;
    handleSubmit?: UseFormHandleSubmit<TFieldValues, TTransformedValues>;
    unregister?: UseFormUnregister<TFieldValues>;
    control?: Control<TFieldValues, TContext>;
    register?: UseFormRegister<TFieldValues>;
    setFocus?: UseFormSetFocus<TFieldValues>;
  }[];
}

interface inputValue
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
}
