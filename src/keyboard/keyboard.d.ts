import { KeyProps } from './keys/key';
import { ToolbarTabIds } from './toolbar/toolbarTabs';
import { KeyId } from './keys/keyIds';
import { Langs } from './keys/keyGroup';
export type KeyboardProps = {
    numericToolbarKeys?: (KeyId | KeyProps)[];
    numericToolbarTabs?: ToolbarTabIds[];
    alphabeticToolbarKeys?: (KeyId | KeyProps)[];
    divisionFormat: 'fraction' | 'obelus';
    allowAlphabeticKeyboard: boolean;
    onHideKeyboard?: () => void;
    onShowKeyboard?: () => void;
    lang: Langs;
};
export declare const Keyboard: ({ numericToolbarKeys, numericToolbarTabs, alphabeticToolbarKeys, divisionFormat, allowAlphabeticKeyboard, onHideKeyboard, onShowKeyboard, lang }: KeyboardProps) => import("react/jsx-runtime").JSX.Element;
