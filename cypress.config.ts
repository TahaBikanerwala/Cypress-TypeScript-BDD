import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";
import {Formatter} from 'cucumber-json-report-formatter';

const formatter = new Formatter()
const sourceFile = "./cucumber-messages.ndjson"
const outputFile = "./reports/cucumber-report.json"
formatter.parseCucumberJson(sourceFile, outputFile)

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com/",
    specPattern: "cypress/e2e/**.feature",
    setupNodeEvents,
    supportFile: "cypress/support/e2e.ts"
  },
});