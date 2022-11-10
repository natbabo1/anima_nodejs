'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'animes',
      [
        {
          title: 'Chainsaw Man',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1806/126216l.webp',
          synopsis:
            "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash. Unfortunately, he has outlived his usefulness and is murdered by a devil in contract with the yakuza. However, in an unexpected turn of events, Pochita merges with Denji's dead body and grants him the powers of a chainsaw devil. Now able to transform parts of his body into chainsaws, a revived Denji uses his new abilities to quickly and brutally dispatch his enemies. Catching the eye of the official devil hunters who arrive at the scene, he is offered work at the Public Safety Bureau as one of them. Now with the means to face even the toughest of enemies, Denji will stop at nothing to achieve his simple teenage dreams. [Written by MAL Rewrite]",
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 1,
          studio_id: 10,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Spy x Family Part 2',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1111/127508l.webp',
          synopsis: 'The second part of Spy x Family.',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Mob Psycho 100 III',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1228/125011l.webp',
          synopsis: 'Third season of Mob Psycho 100.',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'My Hero Academia Season 6',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1483/126005l.webp',
          synopsis: 'Sixth season of Boku no Hero Academia.',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Bleach: Thousand-Year Blood War',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1764/126627l.webp',
          synopsis: null,
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 14,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'To Your Eternity Season 2',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1271/127700l.webp',
          synopsis: 'Second season of Fumetsu no Anata e.',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 1,
          studio_id: 15,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Blue Lock',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1258/126929l.webp',
          synopsis:
            "After reflecting on the current state of Japanese soccer, the Japanese Football Association decides to hire the enigmatic and eccentric coach Jinpachi Ego to achieve their dream of winning the World Cup. Believing that Japan has lacked an egoistic striker hungry for goals, Jinpachi initiates the Blue Lock—a prison-like facility where three hundred talented strikers from high schools all over Japan are isolated and pitted against each other. The sole survivor of Blue Lock will earn the right to become the national team's striker, and those who are defeated shall be banned from joining the team forever. Selected to join this risky project is Yoichi Isagi, a striker who failed to bring his high school soccer team to the national tournament. After choosing to pass to a teammate who missed instead of scoring on his own, he could not help but wonder if the results would have been different had he been more selfish. Using this golden opportunity given by the Blue Lock Project, Yoichi aims to clear his doubts and chase his ultimate desire—to become the greatest striker in the world and lead Japan to World Cup glory. [Written by MAL Rewrite]",
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 16,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Uzaki-chan Wants to Hang Out! Season 2',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1539/128058l.webp',
          synopsis: 'Second season of Uzaki-chan wa Asobitai!',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 17,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'The Eminence in Shadow',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1874/121869l.webp',
          synopsis:
            'Great heroes and diabolical villains are the types of characters that people long to be—but not Cid Kagenou. He longs to become the true mastermind behind it all, pulling the strings, and having his machinations drive the entire story. In his previous life in modern-day Japan, he was not able to achieve his goals. But now, reborn into a world of magic, he will show the true eminence of shadow! As Cid pretends to be just another average mob character, he recruits members to his (fake) organization Shadow Garden, aiming to take down the mysterious cult who lurks in the shadows. With plenty of ad-libs, Cid leads his (fake) organization against the foul (yet surprisingly real) Diabolos Cult. [Written by MAL Rewrite]',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 2,
          studio_id: 18,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Welcome to Demon School! Iruma-kun Season 3',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1688/128720l.webp',
          synopsis:
            'This time it\'s the jungle! Human boy Suzuki Iruma becomes "grandson" to the great demon Sullivan and begins attending demon school where "Grandpa" serves as chair. Winning friends—and rising in demon rank, too—Iruma thrives in his new environment, overcoming the harrowing ordeals thrown his way! In the new season, further challenges await... it\'s harvest season, and time for the annual test where students wade into the expansive and extremely dangerous (!) jungle to compete for food!! Classmates become rivals, and what erupts is a gargantuan battle of brawn and wits? (Source: NHK Enterprises, edited)',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Reincarnated as a Sword',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1191/127909l.webp',
          synopsis:
            'The hero of Tensei shitara Ken deshita differs from your standard otherworldly protagonist in that he is reincarnated as a sword! Beginning his quest by spawning in the middle of a beast-ridden forest, he encounters an injured girl frantically fleeing for her life. Saving her from her assailants, the pair acquaint themselves, and the girl introduces herself as Fran. She bears a heavy past, having endured the enslavement and maltreatment of her tribe, the Black Cats. As the hero is unable to remember the name from his past life, the young and tenacious Fran bestows him the name "Shishou" and becomes his wielder. Thereafter, Shishou and Fran become a formidable team, embarking on quests to liberate the oppressed and exact justice! [Written by MAL Rewrite]',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 19,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Urusei Yatsura',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1644/127971l.webp',
          synopsis:
            "Not much is notable about the lecherous Ataru Moroboshi, but his extraordinary bad luck sticks out like the horns in an alien's head. When Earth is threatened by a fleet of alien invaders known as the Oni, Ataru is selected to represent humanity in a duel against one of them. It's a stroke of rare luck for Ataru that the duel is in fact a game of tag, and that his opponent is Lum, daughter of the Oni's leader, who places her personal dignity above victory—as Ataru finds out by seizing Lum's bikini top and with it, victory. However, misfortune kicks in again when Lum mistakes Ataru's promise to marry his girlfriend, Shinobu Miyake, as the desire to wed Lum herself, and decides she rather likes the idea. Wielding her influence as an alien princess, she moves in with him. Forced to deal with the consequences of his womanizing ways, Ataru must balance his crumbling relationship with Shinobu while keeping Lum happy, all the while flirting with every woman he meets. [Written by MAL Rewrite]",
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 20,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'KanColle: Itsuka Ano Umi de',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1949/121871l.webp',
          synopsis: 'Second season of Kantai Collection: KanColle.',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 17,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Golden Kamuy Season 4',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1855/128059l.webp',
          synopsis: 'Fourth season of Golden Kamuy.',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 1,
          studio_id: 21,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "I'm the Villainess, So I'm Taming the Final Boss",
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1648/126110l.webp',
          synopsis:
            "Being acutely ill, a young girl has spent most of her life in a hospital room playing otome games to fill her time. However, she one day finds herself in the midst of a scene from one of these games as the story's villainess, Irene Loren D'Autriche. At the banquet to celebrate the end of the academy's winter term, the crown prince and Irene's childhood friend, Cedric Jeanne Elmeier, publicly annuls his engagement with Irene and announces that he is in love with Lilia Rainworth, the game's female protagonist. Aware of the tragic future ahead of her and determined to change it, the young girl resolves to conquer the game's final boss, the \"Demon King\" and Cedric's half-brother, Claude Jeanne Elmeier, by making him fall in love with her instead. With time running out, can Irene succeed with her plans, or will she remain bound to the ill-fated ending that awaits her? [Written by MAL Rewrite]",
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 22,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Shinobi no Ittoki',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1476/125643l.webp',
          synopsis:
            'After surviving an attack from the rival Kouga clan, Ittoki Sakuraba, an ordinary boy, discovers that he is the 19th heir of the Iga ninja. Ittoki learns to become an Iga clan ninja and joins the war between the Iga and Kouga clans. (Source: MAL News)',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 2,
          studio_id: 23,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title:
            "I've Somehow Gotten Stronger When I Improved My Farm-Related Skills",
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1384/127328l.webp',
          synopsis:
            'Al Wayne, a young man who aims to be a top-notch farmer, has refined his farming skills and finally reached the MAX level. However, once he achieved the pinnacle of farming skills, for some reason his life began to take a drastic direction. (Source: MAL News)',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 24,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'More than a married couple, but not lovers.',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1713/126442l.webp',
          synopsis:
            'Third-year high school student Jirou Yakuin hoped to partner with Shiori Sakurazaka of the same class in the mandatory "Couple Practical" course. In this practical, students must demonstrate that they have the necessary skillset to live with a partner of the opposite sex while presenting a certain level of harmony to the video surveillance that grades them. Unfortunately, random chance put his slightly subdued self into the practical with the person polar opposite to him, the gyaru Akari Watanabe. Akari on the other hand hoped to be paired with her crush Minami Tenjin. Their hopes are doubly dashed when they find out that Shiori and Minami are assigned together. Thus, they reluctantly decide to cooperate to reach the top ten, which would give them the right to exchange partners if both couples agree. To that end, Jirou steals Akari\'s first kiss without realizing what he\'d done, while giving a hurried good-bye kiss... (Source: MU, amended)',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 2,
          studio_id: 25,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Do It Yourself!!',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1408/127129l.webp',
          synopsis:
            "Do It Yourself!! follows high school girls working on DIY projects, as they struggle, fail, yet don't give up and see the projects through to their end. The story depicts the lives of those girls as they take the first step toward the future. (Source: MAL News)",
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 26,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Beast Tamer',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1871/124357l.webp',
          synopsis:
            "Beast Tamer Rein, who uses animals, was a member of the hero's party. However, since he couldn't do anything else, he wasn't able to keep up in battle. \"You only know how to play with animals. You're fired.\" Rein is kicked out of the party and now lives freely as an adventurer. On his journey, he meets a girl from a cat tribe, the so-called strongest species. Elsewhere, the hero's party remains unaware that their previous success was all thanks to Rein... This is the story of a beast tamer no longer held back and his fateful encounter with a precious companion. (Source: Square Enix, translated)",
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 2,
          studio_id: 27,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Peter Grill and the Philosopher's Time: Super Extra",
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1702/128716l.webp',
          synopsis: 'Second season of Peter Grill to Kenja no Jikan.',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 2,
          studio_id: 28,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Raven of the Inner Palace',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1932/127228l.webp',
          synopsis:
            'Deep within the inner palace lives a special consort who does not serve the emperor despite her position, known as the Raven Consort. People who have seen her say she looks like an old woman, while others say she looks like a young girl. Stories talk of her use of mysterious arts and how she can take on any request, be it death curses to finding lost things. Koushun, the current emperor, goes to visit the Raven Consort with that intention, without knowing that their fated meeting will become a taboo that will overturn history. (Source: Shikarito, edited)',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 2,
          studio_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Bocchi the Rock!',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1448/127956l.webp',
          synopsis:
            "Hitori Gotou is a high school girl who's starting to learn to play the guitar because she dreams of being in a band, but she's so shy that she hasn't made a single friend. However, her dream might come true after she meets Nijika Ijichi, a girl who plays drums and is looking for a new guitarist for her band. (Source: MU, edited)",
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 29,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Pop Team Epic Season 2',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1237/128067l.webp',
          synopsis: 'Second season of Poputepipikku.',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 3,
          studio_id: 30,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Bibliophile Princess',
          type: 'TV',
          season: 'fall',
          year: 2022,
          duration: 1440000,
          image_path:
            'https://cdn.myanimelist.net/images/anime/1256/128714l.webp',
          synopsis:
            'For as long as she could read, Eliana Bernstein—more commonly known as the "Bibliophile Princess"—has preferred the company of books to that of people. However, as a noble, it is her duty to find a suitor. Fortunately for her, Crown Prince Christopher Selkirk Asherald proposes a deal: He will protect her free time, and, in exchange, Eliana will be his fiancée in name only. The years they spend together are bliss, as Eliana learns to open herself to others. But all good things must come to an end. For Eliana, who loves books more than people, ending their fake relationship should be no big deal. But as Christopher grows close with another girl, Eliana begins to realize that she isn\'t as indifferent to him as she once thought. [Written by MAL Rewrite]',
          total_user_review: 0,
          avg_review_score: 0,
          total_view: 0,
          publish_status: true,
          rating_id: 2,
          studio_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('animes', null, {});
  }
};
