# Magpie for Raycast

A local Raycast extension for the [magpie](https://usemagpie.ai) CLI. It switches an agent's model, applies a saved profile, and shows usage and subscription quota.

Requires Raycast 2.0 or later, and a magpie install. The **Magpie CLI Path** preference defaults to `~/.local/bin/magpie`. A leading `~`, and `$HOME` / `${HOME}`, expand to the home directory. The path is not passed through a shell.

Commands:

- **Switch Agent Model** lists installed agents and sets one model's id.
- **Use Profile** lists profiles and applies one. Create profiles in the terminal with `magpie save <name>`.
- **Show Usage** shows token usage for today, 7 days, 30 days, or all time.
- **Show Subscription Quotas** shows allowance windows from `magpie accounts --json`.

```sh
pnpm install
pnpm test
pnpm dev
```

`pnpm dev` loads the extension into the running Raycast app. Root-search icons are registered when that process starts, so restart it after changing `assets/magpie.png`. Stop the process and the commands disappear. `pnpm test` covers path expansion, CLI output parsing, and, when magpie is installed, read-only calls against the local CLI.

[中文说明](README.zh-CN.md)
