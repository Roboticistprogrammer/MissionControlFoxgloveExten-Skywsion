import { ExtensionContext } from "@foxglove/extension";
import { initExamplePanel } from "./app";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({ name: "MissionControl", initPanel: initExamplePanel });
}
