let expectedConfig = {
  logging: {
    methods: {
      http: true,
      info: true,
      warn: true,
      error: true,
      verbose: false,
    },
  },
};

console.log("Expected Logs");
console.log(expectedConfig);

require("roosevelt")({
  onServerStart: (app) => {
    console.log(app.get("params").logging);
  },
}).startServer();
