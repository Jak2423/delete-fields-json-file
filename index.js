import * as fs from 'fs';

export const deleteFieldsFromObjects = (filePath, fieldsToDelete) => {
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const jsonArray = JSON.parse(fileContent);

	const modifiedArray = jsonArray.map((obj) => {
		const newObj = {};
		for (const key in obj) {
			if (!fieldsToDelete.includes(key)) {
				newObj[key] = obj[key];
			}
		}
		return newObj;
	});

	const jsonData = JSON.stringify(modifiedArray, null, 2);
	fs.writeFileSync(filePath, jsonData, 'utf-8');
};
