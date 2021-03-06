/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import task from "@cypress/code-coverage/task";
import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot/plugin";

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const plugins = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Cypress.PluginConfigOptions => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  task(on, config);
  addMatchImageSnapshotPlugin(on, config);
  return config;
};

export default plugins;
