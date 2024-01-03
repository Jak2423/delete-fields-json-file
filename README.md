# change-file-extension

> Change the file extension of a path

## Install

```sh
npm install delete-fields-json-file
```

## Usage

```js
import deleteFieldsFromObjects from './index.js';

deleteFieldsFromObjects('foo/bar.json', ['field1']);

deleteFieldsFromObjects('foo/bar.json', ['field1', 'field2', 'field3']);
```

## API

### deleteFieldsFromObjects(filePath, fieldsToDelete)

#### filePath

Type: `string`

The json file path whose fields needs to be deleted.

#### fieldsToDelete

Type: `string[]`

The fields to deleted.
