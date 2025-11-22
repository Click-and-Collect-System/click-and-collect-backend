'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hash = await bcrypt.hash('AdminUser123', 10); 

    await queryInterface.bulkInsert('users', [{
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@example.com',
      password: hash,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', { email: 'admin@example.com' });
  }
};
