# Spinnaker Import/Export Tool

Python cli tool that imports and exports the following Spinnaker items:

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

The export is archived and uploaded to your S3 or GCE bucket.

## Usage

Simply clone this repo on your Spinnaker instance and execute `./spinio`.

Your instance role must have access to your bucket. You can also use your own credentials or keys by configuring the cloud sdk before you use the tool.

AWS: `aws configure`

GCE: `gcloud auth login`

```
$ ./spinio
usage: spinio [-h] --cloud {aws,gcloud} --mode {import,export} --bucket BUCKET
              [--importFile IMPORTFILE]
```

## Spinnaker upgrade example

1. Create a bucket to store the export
2. Use the tool to export the archive to your bucket.
```
./spinio --cloud gcloud --mode export --bucket BUCKET-NAME
```
Take note of the resulting archive filename that is uploaded.
3. Stop your current instance and launch a fresh Spinnaker instance.
4. Run the tool in import mode on your new instance with the name of the archive step 2 created.
```
./spinio --cloud gcloud --mode import --bucket BUCKET-NAME --importFile FILENAME
```

Your imported items should now be visible on your new instance. Take some time to confirm everything is correct before terminating your old Spinnaker instance. 

