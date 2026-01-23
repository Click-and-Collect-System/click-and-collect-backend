'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Tomaten-Mozzarella Weckerl',
        price: 3.50,
        category: 'Kaltspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Korngebäck mit Putenschinken',
        price: 3.50,
        category: 'Kaltspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Korngebäck mit Käse und Salat',
        price: 3.50,
        category: 'Kaltspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Korngebäck mit Schinken und Käse',
        price: 3.50,
        category: 'Kaltspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Selchspitz Schinken mit Kren',
        price: 3.50,
        category: 'Kaltspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Laugenspitz mit Käse und Salat',
        price: 3.50,
        category: 'Kaltspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Extra Pute Käsesemmel',
        price: 2.00,
        category: 'Kaltspeisen',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('products', {
    name: [
      'Tomaten-Mozzarella Weckerl',
      'Korngebäck mit Putenschinken',
      'Korngebäck mit Käse und Salat',
      'Korngebäck mit Schinken und Käse',
      'Selchspitz Schinken mit Kren',
      'Laugenspitz mit Käse und Salat',
      'Extra Pute Käsesemmel',
    ],
  });
  },
};
