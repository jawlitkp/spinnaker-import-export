# Spinnaker Import/Export Tool

Nodejs web app that imports and exports the following Spinnaker items:

* Applications
  * Pipelines
  * Deployment Strategies
  * Task Logs
* Rush
  * Executions
* Echo
  * Triggers
  * Executions

This is helpful for performing a Spinnaker upgrade. Simply export your items, shut down your instance, launch a fresh instance and run the import.

## Export

Clone the repo and shut down apache. The tool runs on the same port as deck, 9000.
```
$ git clone git@github.com:moondev/spinnaker-import-export.git && cd spinnaker-import-export
$ sudo apache2ctl stop
```

Install node dependencies and start the app

```
$ npm install
$ npm start
```

Visit your Spinnaker address `http://localhost:9000`
