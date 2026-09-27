/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Magpie CLI Path - Path to the magpie executable. ~, $HOME, and ${HOME} are expanded. The path is not passed through a shell. */
  "binaryPath": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `switch-model` command */
  export type SwitchModel = ExtensionPreferences & {}
  /** Preferences accessible in the `profiles` command */
  export type Profiles = ExtensionPreferences & {}
  /** Preferences accessible in the `usage` command */
  export type Usage = ExtensionPreferences & {}
  /** Preferences accessible in the `subscriptions` command */
  export type Subscriptions = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `switch-model` command */
  export type SwitchModel = {}
  /** Arguments passed to the `profiles` command */
  export type Profiles = {}
  /** Arguments passed to the `usage` command */
  export type Usage = {}
  /** Arguments passed to the `subscriptions` command */
  export type Subscriptions = {}
}

