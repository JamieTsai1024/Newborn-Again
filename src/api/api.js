import { Client, Account, Databases } from "appwrite";

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) return api.sdk;
    const client = new Client();
    client
      .setEndpoint("http://localhost/v1")
      .setProject("6403bb86cc44d8646db2");
    const account = new Account(client);
    const database = new Databases(client);

    api.sdk = { database, account };
    return api.sdk;
  },

  createAccount: () => {
    // Register User
    // account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    api
      .provider()
      .create("unique()", "me@example.com", "password", "Jane Doe")
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );

    // Subscribe to files channel
    api.provider().subscribe("files", (response) => {
      if (response.events.includes("buckets.*.files.*.create")) {
        // Log when a new file is uploaded
        console.log(response.payload);
      }
    });
  },
};

export default api;
