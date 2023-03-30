import { KeyboardProps } from "../keyboard/keyboard";
import "mathquill4keyboard/build/mathquill.css";
type Props = {
    keyboardProps?: KeyboardProps;
    setValue?: (s: string) => void;
};
export declare const MathInput: ({ keyboardProps, setValue }: Props) => JSX.Element;
export {};