import { deleteFieldsFromObjects } from './index.js';

const fieldsToDelete = ['mn_name'];
deleteFieldsFromObjects('./data/text-data.json', fieldsToDelete);
