import React from "react";
import {Container, ContainerProps} from "@mui/material";

interface ContainerPhProps extends ContainerProps{

}

export const ContainerPh: React.FC<ContainerPhProps> = ({...rest}) => {
    return <Container {...rest}/>
}