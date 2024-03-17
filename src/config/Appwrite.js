import {Client, Account, Databases} from "appwrite"

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65ecab626db3cf1bc572")

export const account = new Account(client);

export const database = new Databases(client, "65f1b45f6a95e5cf6259");