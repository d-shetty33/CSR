import { Client, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '658fb3f1f1ec858f4903'
export const COLLECTION_ID_MESSAGES = '658fb50b21159a9e22ba'
const client = new Client()
client
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('658fb3f1f1ec858f4903');    

export const databases = new Databases(client);

export default client;

