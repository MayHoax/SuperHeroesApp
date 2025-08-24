import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const heroes = [
  {
    nickname: "Superman",
    realName: "Clark Kent",
    origin_description:
      "Superman is born Kal-El on the alien planet Krypton. His parents, Jor-El and Lara become aware of Krypton's impending destruction and Jor-El begins constructing a spacecraft to carry Kal-El to Earth. During Krypton's last moments, Jor-El places young Kal-El in the spacecraft and launches it.",
    superpowers: "Flight, Strength, Laser vision",
    catchPhrase: "Up, up, and away!",
    images: {
      create: [
        {
          url: "https://i.pinimg.com/736x/20/e9/9e/20e99e9e27a1e25917bc8d1968589a19.jpg",
        },
        {
          url: "https://nicksupes.com/wp-content/uploads/2021/07/superman-lee-1.webp",
        },
      ],
    },
  },
  {
    nickname: "Batman",
    realName: "Bruce Wayne",
    origin_description:
      "Batman is a crimefighter operating in Gotham City, he serves as its protector, using the symbol of a bat to strike fear into the hearts of criminals. Unlike other superheroes, Batman is often depicted to lack any 'superpowers', instead using lifelong training and equipment to fight crime.",
    superpowers: "Martial arts, Intelligence, Gadgets",
    catchPhrase: "I am vengeance!",
    images: {
      create: [
        {
          url: "https://rukminim2.flixcart.com/image/704/844/l2dmky80/poster/a/q/t/small-poster-batman-comic-sl1021-wall-poster-13x19-inches-matte-original-imagdqezg54numtv.jpeg?q=90&crop=false",
        },
        {
          url: "https://i.pinimg.com/736x/ed/3b/36/ed3b3698c5ef556442fc5ba4c0f303b6.jpg",
        },
      ],
    },
  },
  {
    nickname: "Spider-Man",
    realName: "Peter Parker",
    origin_description:
      "Spider-Man, also known as Peter Parker, is a superhero known for his incredible strength, agility, and ability to cling to walls. He gains these powers after being bitten by a radioactive spider. Beyond his physical abilities, Spider-Man is defined by his strong sense of responsibility and his dedication to using his powers to protect others, often battling supervillains in a red and blue suit with a spider emblem",
    superpowers: "Spider sense, Web-shooting, Agility",
    catchPhrase: "With great power comes great responsibility.",
    images: {
      create: [
        {
          url: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/amazing_spider_man_vol_2_50_textless.jpg",
        },
        {
          url: "https://i.pinimg.com/564x/27/35/77/273577940a405d849d349a63e494b0ca.jpg",
        },
      ],
    },
  },
  {
    nickname: "Wonder Woman",
    realName: "Diana Prince",
    origin_description:
      "Wonder Woman hails from the island of Themyscira, home to the Amazons. Born of clay and brought to life by the gods, she was trained as a warrior and later left her homeland to fight for justice in the world of men, wielding the Lasso of Truth and her indestructible bracelets.",
    superpowers: "Super strength, Combat skills, Flight",
    catchPhrase: "For truth and justice!",
    images: {
      create: [
        {
          url: "https://upload.wikimedia.org/wikipedia/en/3/3a/Wonder_Woman_Vol_5_16.png",
        },
      ],
    },
  },
  {
    nickname: "Iron Man",
    realName: "Tony Stark",
    origin_description:
      "Iron Man is the alter ego of Tony Stark, a billionaire inventor and genius. Captured and forced to build a weapon, he instead creates a powered suit of armor to escape, later refining it to fight evil as a high-tech superhero.",
    superpowers: "Genius intellect, Powered armor, Repulsor blasts",
    catchPhrase: "I am Iron Man!",
    images: {
      create: [
        {
          url: "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png",
        },
      ],
    },
  },
  {
    nickname: "Hulk",
    realName: "Bruce Banner",
    origin_description:
      "Bruce Banner, a brilliant scientist, becomes the Hulk after being exposed to gamma radiation during an experiment gone wrong. His alter ego emerges when angered, transforming him into a green-skinned giant with immense power.",
    superpowers: "Super strength, Regeneration, Durability",
    catchPhrase: "Hulk smash!",
    images: {
      create: [
        {
          url: "https://i.pinimg.com/564x/56/73/93/56739305368384cfba7df398b5008850.jpg",
        },
        {
          url: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Hulk-1800-x-900-.png?q=50&fit=crop&w=1100&h=618&dpr=1.5",
        },
      ],
    },
  },
  {
    nickname: "Thor",
    realName: "Thor Odinson",
    origin_description:
      "Thor is the Asgardian god of thunder, exiled to Earth by his father Odin to learn humility. Wielding his enchanted hammer Mjolnir, he defends both Earth and Asgard from cosmic threats.",
    superpowers: "Thunder control, Immortality, Super strength",
    catchPhrase: "For Asgard!",
    images: {
      create: [
        {
          url: "https://upload.wikimedia.org/wikipedia/en/4/47/Thor_%28Ultimate_Marvel_character%29.jpg",
        },
      ],
    },
  },
  {
    nickname: "Captain America",
    realName: "Steve Rogers",
    origin_description:
      "Steve Rogers, a frail young man, is transformed into Captain America through a super-soldier serum during World War II. He fights for freedom and justice, wielding his iconic shield.",
    superpowers: "Enhanced strength, Agility, Leadership",
    catchPhrase: "Avengers, assemble!",
    images: {
      create: [
        {
          url: "https://upload.wikimedia.org/wikipedia/en/b/bf/CaptainAmericaHughes.jpg",
        },
      ],
    },
  },
  {
    nickname: "Black Panther",
    realName: "T'Challa",
    origin_description:
      "T'Challa, king of Wakanda, becomes Black Panther after consuming the heart-shaped herb, granting him enhanced abilities. He protects his nation and the world with advanced technology and warrior skills.",
    superpowers: "Enhanced agility, Vibranium suit, Stealth",
    catchPhrase: "Wakanda forever!",
    images: {
      create: [
        {
          url: "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png",
        },
      ],
    },
  },
  {
    nickname: "Flash",
    realName: "Barry Allen",
    origin_description:
      "Barry Allen, a forensic scientist, gains super speed after being struck by lightning and doused with chemicals. As the Flash, he uses his speed to fight crime and protect Central City.",
    superpowers: "Super speed, Time travel, Quick healing",
    catchPhrase: "Fastest man alive!",
    images: {
      create: [
        {
          url: "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Flash_Family.jpg",
        },
      ],
    },
  },
  {
    nickname: "Green Lantern",
    realName: "Hal Jordan",
    origin_description:
      "Hal Jordan, a test pilot, is chosen by a dying alien to become a Green Lantern, wielding a power ring that creates anything he can imagine, powered by his willpower.",
    superpowers: "Power ring, Flight, Energy constructs",
    catchPhrase: "In brightest day, in blackest night!",
    images: {
      create: [
        {
          url: "https://www.superherotoystore.com/cdn/shop/articles/Lantern_by_Fabok_600x.jpg?v=1466417010",
        },
      ],
    },
  },
  {
    nickname: "Aquaman",
    realName: "Arthur Curry",
    origin_description:
      "Arthur Curry, half-human and half-Atlantean, discovers his royal heritage and becomes Aquaman, ruler of Atlantis, using his ability to communicate with sea life and super strength.",
    superpowers: "Aquatic adaptation, Super strength, Telepathy with sea life",
    catchPhrase: "The ocean will rise!",
    images: {
      create: [
        {
          url: "https://i.pinimg.com/564x/a5/b6/fe/a5b6fe6cd6c3b03ba618c86868586c45.jpg",
        },
      ],
    },
  },
  {
    nickname: "Doctor Strange",
    realName: "Stephen Strange",
    origin_description:
      "Once a skilled surgeon, Stephen Strange loses the use of his hands in an accident. Seeking a cure, he finds the Ancient One and becomes the Sorcerer Supreme, mastering the mystic arts.",
    superpowers: "Magic, Time manipulation, Astral projection",
    catchPhrase: "By the Vishanti!",
    images: {
      create: [
        {
          url: "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
        },
      ],
    },
  },
  {
    nickname: "Storm",
    realName: "Ororo Munroe",
    origin_description:
      "Ororo Munroe, an orphan raised in Africa, discovers her mutant ability to control weather. She joins the X-Men as Storm, using her powers to protect mutants and humans alike.",
    superpowers: "Weather control, Flight, Lightning generation",
    catchPhrase: "Feel the storm's fury!",
    images: {
      create: [
        {
          url: "https://i.pinimg.com/474x/5d/cf/b4/5dcfb4098c04df6ee8018c11d5e2fa4f.jpg",
        },
      ],
    },
  },
  {
    nickname: "Cyclops",
    realName: "Scott Summers",
    origin_description:
      "Scott Summers, a mutant with uncontrollable optic blasts, becomes Cyclops, leader of the X-Men. Trained by Professor Xavier, he uses his powers and tactical mind to fight for mutant rights.",
    superpowers: "Optic blasts, Leadership, Strategy",
    catchPhrase: "To me, X-Men!",
    images: {
      create: [
        {
          url: "https://i.pinimg.com/736x/e0/2f/ea/e02fea2fa761b8fca3d0abb88b880438.jpg",
        },
      ],
    },
  },
];

async function main() {
  console.log("Очистка базы...");
  await prisma.image.deleteMany();
  await prisma.superhero.deleteMany();

  console.log("Сидирование базы...");
  for (const hero of heroes) {
    await prisma.superhero.create({
      data: {
        nickname: hero.nickname,
        realName: hero.realName,
        origin_description: hero.origin_description,
        superpowers: hero.superpowers,
        catchPhrase: hero.catchPhrase,
        images: {
          create: hero.images.create,
        },
      },
    });
  }

  console.log("Сиды успешно завершены ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
