const UNRESTRICTED_ROLES = {
  coffee: ['admin', 'coffeeAdmin'],
  tea: ['admin', 'teaAdmin'],
};

const RESTRICTED_ROLES = {
  coffee: ['coffeeDrinker'],
  tea: ['teaDrinker'],
};

module.exports = {
  UNRESTRICTED_ROLES,
  RESTRICTED_ROLES,
};
