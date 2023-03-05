import { Client, Account, Databases, Storage, ID } from "appwrite";

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
    const storage = new Storage(client);

    api.sdk = { database, account, storage };
    return api.sdk;
  },

  createAccount: (email, password, name) => {
    return api.provider().account.create(ID.unique(), email, password, name);
  },

  getAccount: () => {
    return api.provider().account.get();
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

  getDocumentById: (databaseId, collectionId, documentId) => {
    return api
      .provider()
      .database.getDocument(databaseId, collectionId, documentId);
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

  createFile: (bucketId, file) => {
    return api.provider().storage.createFile(bucketId, ID.unique(), file);
  },

  getFileById: (bucketId, fileId) => {
    return api.provider().storage.getFile(bucketId, fileId);
  },

  getFilePreview: (bucketId, fileId) => {
    return api.provider().storage.getFilePreview(bucketId, fileId);
  },

  // listFiles: (databaseId, collectionId) => {
  //   return api.provider().database.listDocuments(databaseId, collectionId);
  // },

  // updateFile: (databaseId, collectionId, documentId, data) => {
  //   return api
  //     .provider()
  //     .database.updateDocument(databaseId, collectionId, documentId, data);
  // },

  // deleteFile: (databaseId, collectionId, documentId) => {
  //   return api
  //     .provider()
  //     .database.deleteDocument(databaseId, collectionId, documentId);
  // },
};

export { api };
