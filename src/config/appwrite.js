import {Client, Account, Databases} from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("658fb3f1f1ec858f4903");

export const account = new Account(client);
export const database = new Databases(client);
