import {FunctionalComponent, h} from '@stencil/core';
import {Interpreter} from "xstate";

interface InteractionProps {
  machineService:Interpreter<any, any, any, any>;
}

export const InteractionContainer: FunctionalComponent<InteractionProps> = ({ machineService }) => (

  <h1>Hello, {machineService.id}!</h1>
);
