import { KeyProps } from '../keys/key';
import { ToolbarTabIds } from '../toolbar/toolbarTabs';
import { KeyId } from '../keys/keyIds';
import { Langs } from '../keys/keyGroup';
export type NumericLayoutProps = {
    toolbarKeys?: (KeyId | KeyProps)[];
    showTabs?: boolean;
    toolbarTabs?: ToolbarTabIds[];
    onSwitch?: () => void;
    onHideKeyboard?: () => void;
    divisionFormat: 'fraction' | 'obelus';
    allowAlphabeticKeyboard: boolean;
    lang: Langs;
};
export declare const NumericLayout: ({ toolbarKeys, toolbarTabs, onSwitch, divisionFormat, allowAlphabeticKeyboard, onHideKeyboard, lang }: NumericLayoutProps) => import("react/jsx-runtime").JSX.Element;
