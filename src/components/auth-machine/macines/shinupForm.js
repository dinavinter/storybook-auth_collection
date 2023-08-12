import { Machine, assign, send } from 'xstate';


const fetchMachine = Machine({
    id: 'sighUpForm',
    initial: 'idle',
    context: {
      channel: "sms",
      phonenumber: "00567788",
      newsletter: true,
      firstName: "myName",
      auth: false
    },
    on: {
      AUTHORIZE: {actions: "authorize"},
      LOGOUT: {actions: "logout"},
      SUBMIT:

        {
          target: "submiting"
        }


    },
    type: "compound",

    states: {
      idle: {},
      submiting: {

        on: {
          '': [
            {
              target: "otp_verify",
              cond: "not_authorized"
            },
            {
              target: "submit",
              cond: "authorized"
            }
          ]
        }

      },

      otp_verify: {
        invoke: [{src: "otp_verify"}],
        on: {
          SUCCESS: {
            actions: ["authorize"],
            target: "submiting"
          }

        }
      },
      submit: {

        invoke: [{src: "update", type: 'final'}]

      }
    }
  },
  {
    actions: {
      authorize: assign({
        auth: (context) => true,
      }),
      submit: send("SUBMIT"),
      logout: assign({
        auth: (context) => false,
      })
    }
    ,
    services: {
      otp_send: (c) => console.log(`otp.send(${c.phonenumber})`),
      otp_verify:
        (c) => console.log(`otp.verify(${c.phonenumber})`),
      update:
        (c) => console.log(`submit the form with (${c})`)
    }
    ,
    guards: {
      authorized: (context) =>
        context.auth,
      not_authorized:
        (context) =>
          !context.auth,

    }
  }
)

