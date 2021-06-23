module.exports = {
  // presets: 'ts-jest',
  // testEnvironment: 'node',
  // testがあるファイルを指定
  roots: ['<rootDir>/tests'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  "globals": {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json'
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>']
}