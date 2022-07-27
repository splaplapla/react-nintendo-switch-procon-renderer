/// <reference types="react" />
export declare const buttons: readonly ["a", "b", "x", "y", "up", "right", "down", "left", "r", "l", "zr", "zl", "plus", "minus", "home", "cap"];
export declare type Button = typeof buttons[number];
declare type Props = {
    pressedButtons: Array<Button>;
};
export declare const Procon: ({ pressedButtons }: Props) => JSX.Element;
export {};
