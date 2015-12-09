# Spinnaker Upgrade Tool

## Process

Because of the multitude of different ways to install Spinnaker, it is recomended to install a fresh copy of Spinnaker the same way your original copy was installed. This tool will then export your data and import it on to your fresh copy.

### Manual

```
cqlsh -f export.cql
```

Move the cql files to your new Spinnaker installation.

```
cqlsh -f import.cql
```
