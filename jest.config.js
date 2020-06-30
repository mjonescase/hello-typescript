module.exports = {
    coverageDirectory: './coverage',
    collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
    testEnvironment: 'node',
    modulePaths: ['<rootDir>/src', 'node_modules'],
    roots: ['src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
    coverageReporters: ['json', 'lcov', 'text'],
    coveragePathIgnorePatterns: ['.*/src/.*\\.d\\.ts', '.*/src/testUtil/.*'],
    testResultsProcessor: 'jest-sonar-reporter',

    // set coverage goals
    // "npm test" will fail if these metrics are violated
    coverageThreshold: {
        global: {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0
        }
    }
};
