'use strict';

/** @type {import('sequelize-cli').Migration} */

const { UserSchema, USER_TABLE } = require('../models/user.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable('USER_TABLE');
  },
};
