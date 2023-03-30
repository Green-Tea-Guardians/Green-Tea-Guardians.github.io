"use strict";

const {
  db,
  models: { User, Group },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: "chris123",
      password: "123",
      email: "chris@gmail.com",
      fName: "Chris",
      lName: "Kang",
      phone: "200-200-2000",
      image: "https://i.pinimg.com/736x/dd/f0/11/ddf0110aa19f445687b737679eec9cb2.jpg",
    }),
    User.create({
      username: "jenny456",
      password: "456",
      email: "jenny@gmail.com",
      fName: "Jenny",
      lName: "Lee",
      phone: "300-300-3000",
      image: "https://i.pinimg.com/736x/00/7e/6f/007e6f37b853f31fb40639d6f41703df.jpg",
    }),
  ]);

  const [user1, user2] = users;

  const groups = await Promise.all([
    Group.create({
      name: "Hiking",
      description: "Everyone who's interested in hiking, come on through",
      location: "x",
      size: 12,
      public: true,
      ages: "21 to 40",
      creatorId: user1.id,
    }),
    Group.create({
      name: "Board Games",
      description: "Let's play some board games!",
      location: "y",
      size: 6,
      public: true,
      ages: "18 and up",
      creatorId: user2.id,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${groups.length} groups`);
  console.log(`seeded successfully`);
  return {
    users: {
      chris: user1,
      jenny: user2,
    },
    groups: {
      hiking: groups[0],
      boardGames: groups[1],
    },
  };
}


/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;