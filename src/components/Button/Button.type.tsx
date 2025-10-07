import { UIActionnable, UILevel, UISize } from "@/core/types/ui.types";
import { PropsWithChildren } from "react";

export interface ButtonProps extends UIActionnable, UILevel, UISize, PropsWithChildren {
   disabled: boolean,
}

export default ButtonProps;