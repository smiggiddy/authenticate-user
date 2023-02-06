module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    await db.collection('test-user').insertOne(
      {
        first_name:"Ralphie",
        last_name: "London",
        DOB: "1983-01-30",
        city: "Atlanta",
        state:"GA",
        email: "rlondon@gmail.com",
        password: "Password1234!",
        subscription_active: true
      }, 
    {$set: {
      test_user: true
      }
    });
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    await db.collection('test-user').remove();
  }
};
