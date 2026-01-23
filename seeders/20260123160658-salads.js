'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Salat mit Schinken und Käse',
        price: 7.50,
        category: 'Salate',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salat mit Käse und Ei',
        price: 7.50,
        category: 'Salate',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salat mit Thunfisch und Ei',
        price: 7.50,
        category: 'Salate',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tagesmenü (auf Vorbestellung)',
        price: 7.50,
        category: 'Salate',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('products', {
    name: [
      'Salat mit Schinken und Käse',
      'Salat mit Käse und Ei',
      'Salat mit Thunfisch und Ei',
      'Tagesmenü (auf Vorbestellung)',
    ],
  });
  },

};
