// import { genSaltSync, hashSync } from "bcryptjs";
// import moment from "moment";
const { PrismaClient } = require("@prisma/client");
const { hashSync, genSaltSync } = require("bcryptjs");
const moment = require("moment");
const prisma = new PrismaClient();

const salt = genSaltSync(10);

const userdata = [
  {
    username: "admin",
    password: hashSync("admin", salt),
    profile: {
      create: {
        name: "Administrator",
      },
    },
    active: true,
    email: "engga.muse@gmail.com",
    emailVerified: moment().format(),
    role: {
      connect: {
        rolekey: "admin",
      },
    },
    // role: {
    //   connect: { rolekey: "admin" },
    // },
  },
];

const seed = async (data: typeof userdata) => {
  // let createUser = [];

  await prisma.role.createMany({
    data: [
      {
        rolekey: "admin",
        rolename: "Administator",
      },
      {
        rolekey: "user",
        rolename: "User",
      },
    ],
  });

  data.forEach(async (udata) => {
    await prisma.users.create({
      data: udata,
    });
    // createUser.push(create);
  });
};

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

seed(userdata)
  .then(() => {
    console.log("Seed Inserted");
    prisma.$disconnect();
    console.log("Disconnected Prisma Client, exiting.");
  })
  .catch((e) => {
    console.log("Error", e);
  });
