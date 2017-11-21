
Package.describe({
  name    : 'semantic:ui-icon',
  summary : 'Semantic UI - Icon: Single component release',
  version : '1.11.6',
  git     : 'git://github.com/Semantic-Org/UI-Icon.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'icon.css',
    'fonts/icons.eot',
    'fonts/icons.svg',
    'fonts/icons.ttf',
    'fonts/icons.woff',
    'fonts/icons.woff2'
  ], 'client');
});
