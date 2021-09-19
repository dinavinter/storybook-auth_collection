# loading-machine



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                                                    | Default     |
| --------- | --------- | ----------- | ------------------------------------------------------- | ----------- |
| `login`   | --        |             | `Interpreter<InteractionMachineContext, any, any, any>` | `undefined` |
| `service` | --        |             | `Interpreter<InteractionMachineContext, any, any, any>` | `undefined` |


## Dependencies

### Depends on

- [xstate-service](../xstate-service)
- [interaction-machine](../interaction-machine)
- [gigya-screen](../gigya-screen)
- context-consumer

### Graph
```mermaid
graph TD;
  login-machine --> xstate-service
  login-machine --> interaction-machine
  login-machine --> gigya-screen
  login-machine --> context-consumer
  interaction-machine --> xstate-service
  interaction-machine --> context-consumer
  style login-machine fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
