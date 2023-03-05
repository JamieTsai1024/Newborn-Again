import { Client, Account, Databases, ID } from "appwrite";

const client = new Client();
client.setEndpoint("http://localhost/v1").setProject("6403cc0462a92a2d3123");

export const account = new Account(client);
export const database = new Databases(client);

// let api = {
//   sdk: null,

//   provider: () => {
//     if (api.sdk) return api.sdk;
//     const client = new Client();
//     client
//       .setEndpoint("http://localhost/v1")
//       .setProject("6403cc0462a92a2d3123");
//     const account = new Account(client);
//     const database = new Databases(client);

//     api.sdk = { database, account };
//     return api.sdk;
//   },

//   createAccount: () => {
//     // Register User
//     // "unique()"
//     // account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
//     api
//       .provider()
//       .create(ID.unique(), "me@example.com", "password", "Jane Doe")
//       .then(
//         (response) => {
//           console.log(response);
//         },
//         (error) => {
//           console.log(error);
//         }
//       );

//     // Subscribe to files channel
//     api.provider().subscribe("files", (response) => {
//       if (response.events.includes("buckets.*.files.*.create")) {
//         // Log when a new file is uploaded
//         console.log(response.payload);
//       }
//     });
//   },

//   getAccount: () => {
//     let account = api.provider().account;
//     return account.get();
//   },

//   createSession: (email, password) => {
//     return api.provider().account.createEmailSession(email, password);
//   },

//   deleteCurrentSession: () => {
//     return api.provider().account.deleteSession("current");
//   },

//   createDocument: (databaseId, collectionId, data, permissions) => {
//     return api
//       .provider()
//       .database.createDocument(
//         databaseId,
//         collectionId,
//         ID.unique(),
//         data,
//         permissions
//       );
//   },

//   listDocuments: (databaseId, collectionId) => {
//     return api.provider().database.listDocuments(databaseId, collectionId);
//   },

//   updateDocument: (databaseId, collectionId, documentId, data) => {
//     return api
//       .provider()
//       .database.updateDocument(databaseId, collectionId, documentId, data);
//   },

//   deleteDocument: (databaseId, collectionId, documentId) => {
//     return api
//       .provider()
//       .database.deleteDocument(databaseId, collectionId, documentId);
//   },
// };

// export default api;
