import {Client, Account, Databases} from 'appwrite'

const client = new Client()

client.setEndpoint("http://localhost:3001/v1").setProject("6332f295d99fd09e9d84")

export const account = new Account(client)

//Db

export const databases = new Databases(client, "6332f295d99fd09e9d84")