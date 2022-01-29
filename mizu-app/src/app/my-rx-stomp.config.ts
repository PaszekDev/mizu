import {InjectableRxStompConfig} from '@stomp/ng2-stompjs';

export const myRxStompConfig: InjectableRxStompConfig = {
  // Which server?
  brokerURL: 'ws://localhost:8081/ws',

  // Headers
//   connectHeaders: {
//     login: 'guest',
//     passcode: 'guest',
//   },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeatIncoming: 0, // Typical value 0 - disabled
  heartbeatOutgoing: 20000, // Typical value 20000 - every 20 seconds

  reconnectDelay: 200,

};
