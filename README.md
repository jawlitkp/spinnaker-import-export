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

## Setup

Clone the repo and shut down apache. The tool runs on the same port as deck, 9000.
```
$ git clone git@github.com:moondev/spinnaker-import-export.git && cd spinnaker-import-export
$ sudo apache2ctl stop
```

Install nodejs if you do not have it.

```
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

Install node dependencies and start the app

```
$ npm install
$ npm start
```

Visit your Spinnaker address `http://localhost:9000`

### Export

Clicking the export button will start the download of the archive. After this is done you can shut down your instance. However it is best to not terminate it until after you confirm the import on the new instance was a success.

### Import

Launch a fresh Spinnaker instance and repeat the above setup steps. This time nder the import section browse to the archive and click import. You then can restart apache with `sudo apache2ctl start` and your imported items should be visible.
