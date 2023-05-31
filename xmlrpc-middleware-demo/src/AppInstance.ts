import { create } from "xmlbuilder2"
import { Deserializer, Serializer, SimpleXmlRpcClient, XmlrpcUtil } from "simple-xmlrpc"
import fetch from "cross-fetch"

export class AppInstance {
  public static instance() {
    // appInstance
    const appInstance: any = {}
    appInstance.fetch = fetch
    appInstance.xmlbuilder2 = {
      create: create,
    }
    appInstance.simpleXmlrpc = {
      SimpleXmlRpcClient: SimpleXmlRpcClient,
      Serializer: Serializer,
      Deserializer: Deserializer,
      XmlrpcUtil: XmlrpcUtil,
    }
    return appInstance
  }
}
