var Client = require('azure-iot-device').Client;
var Message = require('azure-iot-device').Message;
var Protocol = require('azure-iot-device-mqtt').Mqtt;


class DeviceClient {
  constructor(connectionString) {
    this.client = Client.fromConnectionString(connectionString, Protocol);
    this.client.open(this.connectCallback);
  }

  connectCallback(err) {
    if (err) {
      console.log('[Device] Could not connect: ' + err);
    } else {
      console.log('[Device] Client connected\n');
      this.client.on('message', this.receiveMessageCallback);
    }
  }

  receiveMessageCallback(msg) {
    var msgBodyString = msg.getData().toString('utf-8');
    //var msgBody = JSON.parse(msgBodyString);
    console.log('[Device] Received message: ' + msgBodyString + '\n');
    this.client.complete(msg, this.completeMessageCallback);
  }

  completeMessageCallback(err) {
    if (err) {
      console.log('[Device] Complete message error: ' + err.toString());
    }
  }

  closeConnectionCallback(err) {
    if (err) {
      console.error('[Device] Close connection error: ' + err.message + '\n');
    } else {
      console.log('[Device] Connection closed\n');
    }
  }

  sendMessage(data) {
    var message = new Message(JSON.stringify(data));
    console.log("[Device] Sending message: " + message.getData());
    this.client.sendEvent(message, this.sendMessageCallback);
  }

  sendMessageCallback(err) {
    if (err) {
      console.log('[Device] Sending message error: ' + err.toString());
    }
  }
}

export default DeviceClient;


