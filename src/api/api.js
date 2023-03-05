import { Client, Account, Databases, ID } from "appwrite";

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) return api.sdk;
    const client = new Client();
    client
      .setEndpoint("http://localhost/v1")
      .setProject("6403cc0462a92a2d3123");
    const account = new Account(client);
    const database = new Databases(client, "6403d5d8bfa5e8fe29e1");
    // const database = new Databases(client);

    api.sdk = { database, account };
    return api.sdk;
  },

  createAccount: (email, password, name) => {
    return api.provider().account.create(ID.unique(), email, password, name);
  },

  getAccount: () => {
    let account = api.provider().account;
    return account.get();
  },

  createSession: (email, password) => {
    return api.provider().account.createEmailSession(email, password);
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession("current");
  },

  createDocument: (databaseId, collectionId, data, permissions) => {
    return api
      .provider()
      .database.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        data,
        permissions
      );
  },

  listDocuments: (databaseId, collectionId) => {
    return api.provider().database.listDocuments(databaseId, collectionId);
  },

  updateDocument: (databaseId, collectionId, documentId, data) => {
    return api
      .provider()
      .database.updateDocument(databaseId, collectionId, documentId, data);
  },

  deleteDocument: (databaseId, collectionId, documentId) => {
    return api
      .provider()
      .database.deleteDocument(databaseId, collectionId, documentId);
  },
};

export { api };
