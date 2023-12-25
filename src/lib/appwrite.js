import { Client, Databases, Account } from 'appwrite';
import conf  from '../conf/conf'

const client = new Client();

client
    .setEndpoint(conf.appWriteURL)
    .setProject(conf.appWriteProjectID);

export const account = new Account(client);
export const databases = new Databases(client);