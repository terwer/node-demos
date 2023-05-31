import xmlbuilder2 from "xmlbuilder2"
import { SimpleXmlRpcClient } from "simple-xmlrpc"
import fetch from "cross-fetch"

export class AppInstance {
  public static instance() {
    // appInstance
    const appInstance: any = {}
    appInstance.fetch = fetch
    appInstance.xmlbuilder2 = xmlbuilder2
    appInstance.simpleXmlrpc = {
      SimpleXmlRpcClient: SimpleXmlRpcClient,
    }
    return appInstance
  }
}