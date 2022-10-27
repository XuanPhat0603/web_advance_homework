import db from "../utils/db.js";

export default (tableName, idField) => {
  return {
    findAll() {
      return db(tableName);
    },

    add(entity) {
      return db(tableName).insert(entity);
    },
  };
};
