# VVV-CLI

Command line interface for [Varying Vagrant Vagrants](https://github.com/Varying-Vagrant-Vagrants/VVV).

## Installation

VVV-CLI should be installed as a global Node module:

```
npm install -g vvv-cli
```

## Configuration

Before use, a VVV machine must be configured. From within the root of the VVV directory, run `vvv config <name>`, where `<name>` is the name to give the machine. For example, if you wanted to name your machine `main`, you would run

```
vvv config main
```

If this is your first time running configuration, this machine will be set as the default machine.

## Usage

Currently VVV-CLI only supports running WP-CLI commands. To run a WP-CLI command, simply run `vvv wp <site> -- <command>`. For example, if you want to get all the users of the site named `wordpress-develop`, you would run:

```
vvv wp wordpress-develop -- user list
```

NOTE: Sites are registered within VVV either from the default `vvv-config.yml` or the custom configuration in `vvv-custom.yml`.

## Contributing

VVV-CLI is [MIT](LICENSE) licensed and contributions are welcome. Simply fork and open up a pull request against the `master` branch.
