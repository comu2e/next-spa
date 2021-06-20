module.exports = {
  "roots": ['<rootDir>/pages'],
  "transform": {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  "globals": {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json'
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>']
}