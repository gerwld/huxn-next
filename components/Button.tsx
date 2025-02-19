"use client";
import React, { FC } from "react";

interface IPrimaryButtonProps {
  type: "primary";
  label: string;
}

interface ISecondaryButtonProps {
  type: "secondary";
  label: string;
}

type IButtonProps = IPrimaryButtonProps | ISecondaryButtonProps;

// type predicate function to check if props are of type IPrimaryButtonProps
function isPrimaryBtn (props: IButtonProps): props is IPrimaryButtonProps {
    return props.type === 'primary';
}

export const primaryButtonProps: IPrimaryButtonProps = {
    type: 'primary',
    label: "Prima"
}


export const secondaryButtonProps: ISecondaryButtonProps = {
    type: 'secondary',
    label: "Prima 2"
}

const Button:FC<IButtonProps> = (props) => {
    if(isPrimaryBtn(props)) {
        return <button style={{backgroundColor: "green"}}>{props.label}</button>
    }
    return <button style={{backgroundColor: "purple"}}>{props.label}</button>
};

export default Button;
