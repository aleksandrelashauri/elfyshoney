const path = require('path');

module.exports = {
    // ... existing configuration ...
    devServer: {
        // Replace deprecated options with the new setupMiddlewares option
        setupMiddlewares: (middlewares, devServer) => {
            // Your custom middleware logic can go here
            // For example, you can add custom logging or other middleware
            return middlewares;
        },
        resolve: {
            fallback: {
                "path": require.resolve("path-browserify"),
                "os": require.resolve("os-browserify/browser"),
                "crypto": require.resolve("crypto-browserify"),
            }
        },
        // Other devServer options can go here
    },
    // ... existing configuration ...
}; 