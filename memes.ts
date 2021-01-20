export type Youtube = {
  v: string;
  start: number;
  end: number;
};

export type Meme = {
  url: string;
  title: string;
  image: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  cite?: string;
  youtube?: Youtube;
  footnotes?: Footnote[];
  customHTML?: boolean;
};

export type Footnote = {
  text: string;
  link: string;
};

const memes: Meme[] = [
  {
    url: "traditional-family",
    title: "Bill Hicks on traditional families leaves producer speechless",
    image: "https://img.youtube.com/vi/n-szFZ3s4tc/hq1.jpg",
    alt: "Bill Hicks in a pub, old film footage",
    youtube: {
      v: "n-szFZ3s4tc",
      start: 1 * 60,
      end: 2 * 60 + 37,
    },
  },
  {
    url: "finland-happy",
    title: "How the Finnish are world happiest",
    image: "https://img.youtube.com/vi/9FPU4F-Ajh8/0.jpg",
    alt:
      "Woman in hat and winter clothes (looks like skiing type clothes) sits at a table in the snow, she looks unhappy.",
    caption: "\"When you walk on the streets in Finland, people don't seem to be particularly happy, and I would actually think that might contribute positively to our sense of satisfaction... if you live among people where everyone's kind of like advertising their own happiness, like telling 'hey, look at me how happy I am' that might actually make you like more sad.\" - Frank Martela PhD Psychology, Aalto University",
    youtube: {
      v: "9FPU4F-Ajh8",
      start: 217,
      end: 240,
    },
  },
  {
    url: "face-masks",
    title: "If you feel that face masks don't protect you...",
    image: "https://img.youtube.com/vi/8IjXzadiNaA/0.jpg",
    alt:
      "World map with red dots all over it. USA is particularly covered in red dots. Title over the map in big letters reads 'THIS WEEK IN VIROLOGY #673 WAKE UP AND SMELL THE PANDEMIC'",
    caption:
      "‘... then the next time you have surgery tell your surgical team not to wear face masks’ - Vincent Racaniello, Professor of Immunology at Columbia University",
    youtube: {
      v: "8IjXzadiNaA",
      start: 8314,
      end: 8331,
    },
    footnotes: [
      {
        text:
          "As I was making this (during the 2020 pandemic) some fucking muppets interrupted selling door-to-door, one with a mask that didn't cover her nose. 😡",
        link:
          "https://twitter.com/louiechristie/status/1223012411172622340?s=20",
      },
    ],
  },
  {
    url: "wasting-your-life",
    title: "Wasting Your Life",
    image: "https://img.youtube.com/vi/TVlIbE0dSgQ/hq1.jpg",
    alt:
      "Alan Partridge taking a phone call while sitting on bed in a hotel bedroom. On the chest of draws in front of him is a portrait of David Hasselhoff",
    caption: "Alan Partridge talks to his son Fernando.",
    youtube: {
      v: "TVlIbE0dSgQ",
      start: 16,
      end: 25,
    },
  },
  {
    url: "valuable-lesson",
    title: "Valuable Lesson",
    image: "https://i.imgflip.com/447g00.jpg",
    alt:
      "Bearded man (Louie Christie) in a bubble bath smirking. Text reads: 'I learned a valuable lesson today... Don’t eat baked beans, before a bath'",
    caption:
      "I learned a valuable lesson today... Don’t eat baked beans, before a bath. 🛁 😬",
  },
  {
    url: "bob-monkhouses-joke-book",
    title: "Bob Monkhouse's Joke Book",
    image: "https://img.youtube.com/vi/hhUwpMSUKDQ/hq3.jpg",
    alt:
      "Black and white photo of young Bob Monkhouse and a woman. Bob is wearing a 1950's suit",
    youtube: {
      v: "hhUwpMSUKDQ",
      start: 2975,
      end: 3056,
    },
  },
  {
    url: "the-only-two-things-you-control",
    title: "The Only Two Things You Control",
    image: "https://img.youtube.com/vi/yAqijFxTvaM/hq3.jpg",
    alt: "Derren Brown with talking in a room with a bookcase behind him.",
    youtube: {
      v: "yAqijFxTvaM",
      start: 164,
      end: 230,
    },
  },
  {
    url: "resusci-annie-the-musical",
    title: "Resusci Annie The Musical",
    image: "https://img.youtube.com/vi/AZskwWOr5xs/hq3.jpg",
    alt:
      "A woman and a man on a stage. A title overlay says 'Anne is the most kissed face of all time'",
    youtube: {
      v: "AZskwWOr5xs",
      start: 444,
      end: 455,
    },
  },
  {
    url: "time-management",
    title: "Time Management",
    image:
      "https://www.louiechristie.com/images/time-management-cube-by-louie-christie-2018_me7fst_c_scale,w_1307.jpg",
    alt:
      "A cube hessian storage box with post-it notes in corners. One says 'WIN WIN'",
    customHTML: true,
  },
  {
    url: "best-man",
    title: "Best Man",
    image: "https://img.youtube.com/vi/zFxzw7p5u8U/hqdefault.jpg",
    alt: "Rowan Atikinson in a shit, tie and black trousers on a stage.",
    youtube: {
      v: "zFxzw7p5u8U",
      start: 288,
      end: 306,
    },
  },
  {
    url: "leave",
    title: "Live video feed to brexit negotiations",
    image: "https://img.youtube.com/vi/M62SnbNizIM/hqdefault.jpg",
    alt: "'Zippy' puppet from TV show Rainbow",
    youtube: {
      v: "M62SnbNizIM",
      start: 273,
      end: 289,
    },
  },
  {
    url: "crazy",
    title: "Crazy",
    image: "https://img.youtube.com/vi/tbu9ZTLLefE/hqdefault.jpg",
    alt: "A wave in the sea with something on it.",
    youtube: {
      v: "tbu9ZTLLefE",
      start: 67,
      end: 79,
    },
    caption:
      "'The only thing I can think of that is more crazy than riding big waves would be to, you know, live in a city and work in an office building.'",
    cite: "Laird Hamilton, big wave surfer",
  },
  {
    url: "remote-working",
    title: "Remote Working ",
    image:
      "https://embedwistia-a.akamaihd.net/deliveries/d4e3c25ccb18b0bfba2caca8ba4f1b4c1cb5a037.jpg",
    alt:
      "A man presenting a news type TV show with two guests on video link. Title reads 'TECH TALK - REMOTE WORKING'",
    customHTML: true,
  },
  {
    url: "😬",
    title: "😬",
    image: "https://img.youtube.com/vi/nbr1VUlH4Mg/hqdefault.jpg",
    alt:
      "Charlie Chaplain and a woman in a a bonnet walking down a long straight dusty country road.",
    youtube: {
      v: "nbr1VUlH4Mg",
      start: 94,
      end: 100,
    },
    caption:
      "Not sure exactly how you’re feeling? Nervous but also excited? 😬 Grimacing Face is perfect for communicating those mixed feelings",
    cite: "John Kelly, Senior Emoji Lexicographer at Emojipedia",
  },
  {
    url: "thinking",
    title: "Thinking Acting",
    image: "https://img.youtube.com/vi/XQzQRaQINns/hqdefault.jpg",
    width: 500,
    height: 500,
    alt:
      "Joey from Friends TV show in a classroom sat casually on a desk at the front of a blackboard. Students are watching.",
    youtube: {
      v: "XQzQRaQINns",
      start: 67,
      end: 90,
    },
  },
  {
    url: "rules",
    title: "Rules",
    image: "https://img.youtube.com/vi/fCjsUxbNmIs/hqdefault.jpg",
    alt:
      "Back to the future Delorean car with characters played by Michael J. Fox, Elisabeth Shue and Christopher Lloyd sat in the front. Christopher Lloyd is dressed as mad professor 'Doc' Brown and is wearing a futuristic silver sunglasses visor.",
    youtube: {
      v: "fCjsUxbNmIs",
      start: 110,
      end: 116,
    },
  },
  {
    url: "flowers",
    title: "Flowers",
    image: "https://img.youtube.com/vi/yKhOYvDRKrg/hqdefault.jpg",
    alt:
      "A buddhist monk in brown robes with a shaved head sits cross legged in front of flowers, and greenery",
    youtube: {
      v: "yKhOYvDRKrg",
      start: 36,
      end: 44,
    },
  },
];

export default memes;
