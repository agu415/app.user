module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        first_name: 'John',
        last_name: 'Doe',
        email: 'example@example.com',
        password: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };