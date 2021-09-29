export declare type Consent = {
  [key: string]: any;
  isConsentGranted: boolean;

  preferences: Preferences;
};

export declare type AccountData = {
  [key: string]: any;
  profile?: any;
};

export interface Channel {
  [category: string]: Preferences;
  value: any;
}

export interface Preferences {
  newslater?: boolean | null | undefined;
  deals?: boolean | null | undefined;
  order?: boolean | null | undefined;
  email?: boolean;
  sms?: boolean;
  daily?: boolean;
  weekly?: boolean;
  [category: string]: boolean | null | undefined;
}

export declare type SubscriptionRequest = any & {
  auth: "Anonymous" | "Logged-in";
  account: AccountData;
  consents: {
    [key: string]: Consent;
  };
  channels: Channel[];

  preferences: Preferences;
  policy: any;
};

export declare type SubscriptionResult =
  | false
  | {
  [key: string]: any;
};
const subscribtion = "newsletter";

import { assign, Machine } from "xstate";

export interface SubscriptionMachineSchema {
  states: {
    idle: {};
    granted: {};
    draft: {};
    email_channel: {};
    sms_channel: {};
    email_daily_newsletter: {};
    email_weekly_newsletter: {};
    sms_daily_newsletter: {};
    sms_weekly_newsletter: {};
  };
}

export type SubscriptionMachineEvents = { type: "CONFIRM" } | { type: "NEXT" } ;

export interface SubscriptionMachineContext {
  auth: "Anonymous" | "Logged-in";
  account: AccountData;
  consents: {
    [key: string]: Consent;
  };
  channels?: Channel[];

  subscription?: SubscriptionResult;
}

export const subscribtionMachine = Machine<
  SubscriptionMachineContext,
  SubscriptionMachineSchema,
  SubscriptionMachineEvents
  >(
  {
    id: "subscription",
    initial: "idle",
    context:{
      auth: "Logged-in",
      account: {email: "email@email.com"},
      consents: {newsletter: {isConsentGranted: true, preferences: {email: true, daily: true}}},
      subscription:{}
    },
    states: {
      idle: {
        on: {
          NEXT: [{ target: "granted", cond: "isConsentGranted" }],
        },
      },
      granted: {
        on: {
          NEXT: [
            { target: "email_channel", cond: "preferEmail" },
            { target: "sms_channel", cond: "preferSMS" },
          ],
        },
      },
      draft: {
        on: {  CONFIRM: "granted"}
      },
      email_channel: {
        entry: "setEmail",
        on: {
          NEXT: [
            { target: "email_daily_newsletter", cond: "preferDaily" },
            { target: "email_weekly_newsletter", cond: "preferWeekly" },
          ],
        },
      },
      sms_channel: {
        entry: "setSMS",
        on: {
          NEXT: [
            { target: "sms_daily_newsletter", cond: "preferDaily" },
            { target: "sms_weekly_newsletter", cond: "preferWeekly" },
          ],
        },
      },

      email_daily_newsletter: {
        type: "final",
        data: (context) => context.subscription,
      },
      email_weekly_newsletter: {
        type: "final",
        data: (context) => context.subscription,
      },
      sms_weekly_newsletter: {
        type: "final",
        data: (context) => context.subscription,
      },

      sms_daily_newsletter: {
        type: "final",
        data: (context) => context.subscription,
      },
    },
  },
  {
    actions: {
      setEmail: assign({
        subscription: (context) =>
          getSubscription(context, { channel: context.account.email }),
      }),
      setSMS: assign({
        subscription: (context) =>
          getSubscription(context, { channel: context.account.phoneNumber }),
      }),
    },
    guards: {
      isConsentGranted: (context) =>
        context.consents[subscribtion].isConsentGranted,
      preferEmail: (context) =>
        context.consents[subscribtion].preferences.email,
      preferSMS: (context) => context.consents[subscribtion].preferences.sms,
      preferDaily: (context) =>
        context.consents[subscribtion].preferences.daily,
      preferWeekly: (context) =>
        context.consents[subscribtion].preferences.weekly,
    },
  }
);

function getSubscription(context: any, data: any) {
  return { ...context.subscription, ...data };
}
