module.exports = {
    collectCoverageFrom: [
        "src/**/*.{js,jsx,mjs}"
    ],
    coveragePathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/src/components",
        "<rootDir>/src/index.js",
        "<rootDir>/src/api/index.js",
        "<rootDir>/src/logic/index.js",
        "<rootDir>/src/registerServiceWorker.js"
    ],
    setupFiles: [
        "<rootDir>/config/polyfills.js"
    ],
    testMatch: [
        "<rootDir>/tests/**/__tests__/**/*.{js,jsx,mjs}",
        "<rootDir>/tests/**/?(*.)(spec|test).{js,jsx,mjs}"
    ],
    testEnvironment: "node",
    testURL: "http://localhost",
    transform: {
        "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
        "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
    ],
    moduleNameMapper: {
        "^react-native$": "react-native-web"
    },
    moduleFileExtensions: [
        "web.js",
        "mjs",
        "js",
        "json",
        "web.jsx",
        "jsx",
        "node"
    ]
}