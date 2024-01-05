import { deleteFieldsFromObjects } from './index.js';

const fieldsToDelete = ['mn_name'];
deleteFieldsFromObjects('./data/texdata.json', fieldsToDelete);
