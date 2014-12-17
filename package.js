Package.describe({
  name: 'konecty:change-case',
  summary: 'Convert strings between camelCase, PascalCase, Title Case, snake_case, etc.',
  version: '1.0.0',
  git: 'https://github.com/Konecty/change-case.git'
});

Npm.depends({
  "change-case": "2.1.5"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('konecty:change-case.js');
  api.export(['changeCase']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('konecty:change-case');
  api.addFiles('konecty:change-case-tests.js');
});
