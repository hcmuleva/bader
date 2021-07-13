import S3 from 'react-aws-s3';
import aws  from './keys';
// const { BlobServiceClient } = require('@azure/storage-blob');

// const AZURE_STORAGE_CONNECTION_STRING = process.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING;
// // const CONTAINER_NAME = process.env.REACT_APP_CONTAINERNAME;
// const SAS_URL = process.env.REACT_APP_AZURE_SAS_URL;

const config = {
	accessKeyId: aws.accessKeyId,
	secretAccessKey: aws.secretAccessKey,
	region: aws.region,
	dirName: aws.dirName,
	bucketName: aws.bucketName
}

// const dataUpload = async (filename, data, container) => {
// 	const blobName = filename;
// 	const blobOptions = { blobHTTPHeaders: { blobContentType: 'text/html' } };
// 	const blobServiceClient = await BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
// 	const containerClient = await blobServiceClient.getContainerClient(container);
// 	const blockBlobClient = containerClient.getBlockBlobClient(blobName);
// 	const uploadBlobResponse = await blockBlobClient.upload(data, data.length, blobOptions);
// 	if (uploadBlobResponse) {
// 		return blockBlobClient.url;
// 	} else {
// 		throw new Error('Error in uploading content');
// 	}
// };

// const fileUpload = async (file, fileName, container) => {
// 	const blobServiceClient = new BlobServiceClient(SAS_URL);
// 	const blobOptions = { blobHTTPHeaders: { blobContentType: file.type } };
// 	const containerClient = blobServiceClient.getContainerClient(container);
// 	const blockBlobClient = containerClient.getBlockBlobClient(fileName);
// 	const uploadBlobResponse = await blockBlobClient.uploadBrowserData(file, blobOptions);
// 	console.log(`Upload block blob ${fileName} successfully`, uploadBlobResponse.clientRequestId, blockBlobClient.url);
// 	if (uploadBlobResponse) {
// 		return blockBlobClient.url;
// 	} else {
// 		throw new Error('Error in uploading content');
// 	}
// };

const dataUploadS3File = async (filename, file, ) => {

	
	const ReactS3Client = new S3(config);
	config['dirName'] = "seervi";
	const newFileName =filename;

	ReactS3Client
    .uploadFile(file, newFileName,{
		resize: { width: 300, height: 400 }
	  })
    .then(data => {console.log(data) 
		return data})
    .catch(err => {console.error(err)
		return err
	})
	// const file = new File([data], filename);
	// try {
	// 	const data = await ReactS3Client.uploadFile(file)
	// 	console.log("Data \n", data)
	// 	return data.location
	// } catch (err) {
	// 	throw new Error('Error in uploading content');
	// }
}

const uploadS3File = async (file, fileName, container) => {
	const ReactS3Client = new S3(config);
	config['dirName'] =  "seervi";
	try {
		const data = await ReactS3Client.uploadFile(file)
		console.log("data url",data.location)
		return data.location
	} catch (err) {
		throw new Error('Error in uploading content');
	}
}

export {
	// dataUpload,
	// fileUpload,
	uploadS3File,
	dataUploadS3File
};
