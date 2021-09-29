# auth-machine



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                | Default     |
| --------- | --------- | ----------- | ------------------- | ----------- |
| `event`   | --        |             | `MessageEvent<any>` | `undefined` |
| `request` | `request` |             | `any`               | `undefined` |


## Dependencies

### Depends on

- context-consumer
- [xstate-service](../xstate-service)

### Graph
```mermaid
graph TD;
  auth-machine --> context-consumer
  auth-machine --> xstate-service
  style auth-machine fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
