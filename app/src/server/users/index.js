import axios from 'axios'
import * as Protobuf from "protobufjs"

export const users = {
  login: (name, password) => {

    let config = {
      method: 'post',
      url: '/userLogin/v2/test',
      headers: {
        'Content-Type': 'application/x-protobuf',
      },
      responseType: 'arraybuffer'
    }

    // console.log('Response from the server: ', response)
    let Message = Protobuf.load('/static/proto/user/AccountName.proto', async (err, root)=>{
      Message = root.lookupType('com.xqopen.iot.water2.AccountName')
      // Encode a message to an Uint8Array (browser) or Buffer (node)
      var payload = {accountName: '1'}
      var errMsg = Message.verify(payload);
      if (errMsg)
        throw Error(errMsg);

      // Create a new message
      var message = Message.create(payload); // or use .fromObject if conversion is necessary

      var buffer = Message.encode(message).finish();
      // ... do something with buffer
      config['data'] = new Uint8Array(buffer)

      let response = await axios.request(config)
      // Decode an Uint8Array (browser) or Buffer (node) to a message
      // var message = Message.decode(new Uint8Array(response.data));

      console.log('Decoded message', response)
      console.log(response)
    })

  }
}
