module.exports = {
  default: {
    require: [
      'ts-node/register',
      'steps/**/*.steps.ts',
      'steps/hooks.ts'
    ],
    requireModule: ['ts-node/register'],
    format: ['json:test-results/results.json', 'progress'],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    features: 'features/**/*.feature',
    timeout: 60000
  }
};