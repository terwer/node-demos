import fetch from "cross-fetch"

export class AppInstance {
  public static instance() {
    // appInstance
    const appInstance: any = {}
    appInstance.fetch = fetch
    return appInstance
  }
}
