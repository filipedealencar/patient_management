interface IInputSearch {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[] | undefined;
  id?: string;
  styles?: {
    wrapper?: React.CSSProperties;
    container?: React.CSSProperties;
    input?: React.CSSProperties;
  };
}
