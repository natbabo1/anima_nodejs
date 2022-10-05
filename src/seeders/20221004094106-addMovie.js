'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('animes', [
      {
        title: 'Gintama: The Very Final',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1988/113791l.webp',
        synopsis:
          "Two years have passed following the Tendoshuu's invasion of the O-Edo Central Terminal. Since then, the Yorozuya have gone their separate ways. Foreseeing Utsuro's return, Gintoki Sakata begins surveying Earth's ley lines for traces of the other man's Altana. After an encounter with the remnants of the Tendoshuu—who continue to press on in search of immortality—Gintoki returns to Edo. Later, the regrouped Shinsengumi and Yorozuya begin an attack on the occupied Central Terminal. With the Altana harvested by the wreckage of the Tendoshuu's ship in danger of detonating, the Yorozuya and their allies fight their enemies while the safety of Edo—and the rest of the world—hangs in the balance. Fulfilling the wishes of their teacher, Shouyou Yoshida's former students unite and relive their pasts one final time in an attempt to save their futures. [Written by MAL Rewrite]",
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
        title: 'A Silent Voice',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/1122/96435l.webp',
        synopsis:
          "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye. Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends. Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 3,
        studio_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Violet Evergarden the Movie',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1825/110716l.webp',
        synopsis:
          'Several years have passed since the end of The Great War. As the radio tower in Leidenschaftlich continues to be built, telephones will soon become more relevant, leading to a decline in demand for "Auto Memory Dolls." Even so, Violet Evergarden continues to rise in fame after her constant success with writing letters. However, sometimes the one thing you long for is the one thing that does not appear. Violet Evergarden Movie follows Violet as she continues to comprehend the concept of emotion and the meaning of love. At the same time, she pursues a glimmer of hope that the man who once told her, "I love you," may still be alive even after the many years that have passed. [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 3,
        studio_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/10/51723l.webp',
        synopsis:
          "When Gintoki apprehends a movie pirate at a premiere, he checks the camera's footage and finds himself transported to a bleak, post-apocalyptic version of Edo, where a mysterious epidemic called the \"White Plague\" has ravished the world's population. It turns out that the movie pirate wasn't a pirate after all—it was an android time machine, and Gintoki has been hurtled five years into the future! Shinpachi and Kagura, his Yorozuya cohorts, have had a falling out and are now battle-hardened solo vigilantes and he himself has been missing for years, disappearing without a trace after scribbling a strange message in his journal. Setting out in the disguise given to him by the android time machine, Gintoki haphazardly reunites the Yorozuya team to investigate the White Plague, and soon discovers that the key to saving the future lies in the darkness of his own past. Determined to confront a powerful foe, he makes an important discovery—with a ragtag band of friends and allies at his side, he doesn't have to fight alone. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 3,
        studio_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Your Name.',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/5/87048l.webp',
        synopsis:
          "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture. One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another. Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 3,
        studio_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Kizumonogatari Part 3: Cold-Blooded',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1084/112813l.webp',
        synopsis:
          'After helping revive the legendary vampire Kiss-shot Acerola-orion Heart-under-blade, Koyomi Araragi has become a vampire himself and her servant. Kiss-shot is certain she can turn him back into a human, but only once regaining her full power. Araragi has hunted down the three vampire hunters that defeated Kiss-shot and retrieved her limbs to return her to full strength. However, now that Araragi has almost accomplished what he’s been fighting for this whole time, he has to consider if this is what he really wants. Once he revives this powerful immortal vampire, there is no telling what she might do, and there would be no way of stopping her. But there is more to the story that Araragi doesn’t understand. If a newborn vampire like him could defeat the hunters, how did they overpower Kiss-shot? Can he trust her to turn him back to a human? And how is that even possible in the first place? Araragi is at his limit but he must come to a decision, and it may not be possible to resolve this situation without doing something he’ll regret… [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 1,
        studio_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Spirited Away',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/6/79597l.webp',
        synopsis:
          "Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique characters she meets along the way. Vivid and intriguing, Sen to Chihiro no Kamikakushi tells the story of Chihiro's journey through an unfamiliar world as she strives to save her parents and return home. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 4,
        studio_id: 32,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Fate/stay night: Heaven's Feel - III. Spring Song",
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1142/112957l.webp',
        synopsis:
          'The Fifth Holy Grail War in Fuyuki City has reached a turning point in which the lives of all participants are threatened as the hidden enemy finally reveals itself. As Shirou Emiya, Rin Toosaka, and Illyasviel von Einzbern discover the true, corruptive nature of the shadow that has been rampaging throughout the city, they realize just how dire the situation is. In order to protect their beloved ones, the group must hold their own against the seemingly insurmountable enemy force—even if some of those foes were once their allies, or perhaps, something more intimate. As the final act of this chaotic war commences, the ideals Shirou believes will soon be challenged by an excruciating dilemma: is it really possible to save a world where everything seems to have gone wrong? [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 1,
        studio_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Princess Mononoke',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/7/75919l.webp',
        synopsis:
          "When an Emishi village is attacked by a fierce demon boar, the young prince Ashitaka puts his life at stake to defend his tribe. With its dying breath, the beast curses the prince's arm, granting him demonic powers while gradually siphoning his life away. Instructed by the village elders to travel westward for a cure, Ashitaka arrives at Tatara, the Iron Town, where he finds himself embroiled in a fierce conflict: Lady Eboshi of Tatara, promoting constant deforestation, stands against Princess San and the sacred spirits of the forest, who are furious at the destruction brought by the humans. As the opposing forces of nature and mankind begin to clash in a desperate struggle for survival, Ashitaka attempts to seek harmony between the two, all the while battling the latent demon inside of him. Princess Mononoke is a tale depicting the connection of technology and nature, while showing the path to harmony that could be achieved by mutual acceptance. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 3,
        studio_id: 32,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Howl's Moving Castle",
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/5/75810l.webp',
        synopsis:
          "That jumbled piece of architecture, that cacophony of hissing steam and creaking joints, with smoke billowing from it as it moves on its own... That castle is home to the magnificent wizard Howl, infamous for both his magical prowess and for being a womanizer—or so the rumor goes in Sophie Hatter's small town. Sophie, as the plain daughter of a hatmaker, does not expect much from her future and is content with working hard in the shop. However, Sophie's simple life takes a turn for the exciting when she is ensnared in a disturbing situation, and the mysterious wizard appears to rescue her. Unfortunately, this encounter, brief as it may be, spurs the vain and vengeful Witch of the Waste—in a fit of jealousy caused by a past discord with Howl—to put a curse on the maiden, turning her into an old woman. In an endeavor to return to normal, Sophie must accompany Howl and a myriad of eccentric companions—ranging from a powerful fire demon to a hopping scarecrow—in his living castle, on a dangerous adventure as a raging war tears their kingdom apart. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 5,
        studio_id: 32,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1704/106947l.webp',
        synopsis:
          "After a string of mysterious disappearances begin to plague a train, the Demon Slayer Corps' multiple attempts to remedy the problem prove fruitless. To prevent further casualties, the Flame Pillar, Kyoujurou Rengoku, takes it upon himself to eliminate the threat. Accompanying him are some of the Corps' most promising new blood: Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira, who all hope to witness the fiery feats of this model demon slayer firsthand. Unbeknownst to them, the demonic forces responsible for the disappearances have already put their sinister plan in motion. Under this demonic presence, the group must muster every ounce of their willpower and draw their swords to save all two hundred passengers onboard. Kimetsu no Yaiba Movie: Mugen Ressha-hen delves into the deepest corners of Tanjirou's mind, putting his resolve and commitment to duty to the test. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 1,
        studio_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Made in Abyss: Dawn of the Deep Soul',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1502/110723l.webp',
        synopsis:
          "After bonding over a tragic loss, the long-suffering Nanachi joins Riko and Reg on their journey into the depths of the Abyss. Awaiting the children is the Sea of Corpses—the Abyss's fifth layer, and the deepest level from which a traveler can return without losing their human form. The masked sadist Bondrewd stands between the children and the rest of their adventure. Bondrewd's horrific laboratory serves as a final checkpoint for those wishing to traverse deeper into the Abyss, and the sociopathic scientist has no desire to allow Riko's party to pass through at no cost. Deeply scarred by Bondrewd's impact on their childhood, Nanachi is engulfed in turmoil over his resurgence in their life. Bondrewd's only apparent weakness is Prushka, a brash child who claims to be his daughter. Riko, Reg, and Nanachi befriend Prushka and work with the girl to overcome her father's machinations and breach the Abyss's sixth layer. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 1,
        studio_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Evangelion: 3.0+1.0 Thrice Upon a Time',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1422/113533l.webp',
        synopsis:
          "Following NERV's failed attempt to retrieve the Spears of Longinus and carry out the Human Instrumentality Project, the destruction caused by the Fourth Impact has been largely averted. In a state of disarray, Shinji Ikari, Asuka Langley Shikinami, and Rei Ayanami travel to Village 3—a survivor settlement free from Earth's ruination. There, Shinji slowly comes to terms with his past, developing an entirely different life from his days as an Evangelion pilot. Meanwhile, Nerv makes preparations to continue the Instrumentality Project by means of a new Impact. When WILLE's main aerial battleship arrives at the village, Shinji decides to board, believing that he can help by piloting an Evangelion. As new secrets are uncovered and a battle between WILLE and NERV approaches, the future of Earth hangs in the balance. Can Shinji save humanity and the rest of the world one last time? [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 3,
        studio_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Rascal Does Not Dream of a Dreaming Girl',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1613/102179l.webp',
        synopsis:
          "Six months ago, Sakuta Azusagawa had a chance encounter with a bunny girl in a library. Ever since then, he's been blissfully happy with his girlfriend: Mai Sakurajima, that same bunny girl. However, the reappearance of his mysterious first crush, the now-adult Shouko Makinohara, adds a new complication to his relationship with Mai. To make matters worse, he then encounters a middle school Shouko in the hospital, suffering from a grave illness. Mysteriously, his old scars begin throbbing whenever he's near her. With Shouko's bizarre situation somehow revolving around him, Sakuta will need to come to terms with his own conflicting feelings, for better or worse. With a girl's life in his hands, just what can he do? [Written by MAL Rewrite]",
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
        title: 'The Disappearance of Haruhi Suzumiya',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1248/112352l.webp',
        synopsis:
          'On a cold December day, Kyon arrives at school prepared for another outing with his fellow SOS Brigade members. However, much to his surprise, he discovers that almost everything has changed completely: Haruhi Suzumiya and Itsuki Koizumi are nowhere to be found; Mikuru Asahina does not recognize him at all; Yuki Nagato is a regular human; and Ryouko Asakura has mysteriously returned. Although he is no stranger to the supernatural, Kyon is disturbed by this odd turn of events and decides to investigate on his own. Finding himself to be the only person that is aware of the previous reality, Kyon is now faced with a difficult choice: to finally live the normal life he has always wanted, or uncover a way to turn back the hands of time and restore his chaotic yet familiar world. [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 3,
        studio_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Mushishi Zoku Shou: Suzu no Shizuku',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/9/72689l.webp',
        synopsis:
          "On a warm summer day, a boy heard the sound of bells ringing, as if in celebration, in the mountain near his home. Several years later in that same mountain, the mushishi Ginko encounters a strange girl with weeds growing out of her body. Soon after, Ginko coincidentally runs into the now grown-up boy Yoshiro on his way off the mountain. With Yoshiro's help, Ginko soon begins to uncover who this mysterious girl is and what happened to her. An adaptation of the last arc in the manga, Mushishi Zoku Shou: Suzu no Shizuku follows Ginko's peculiar journey amidst the occult to unravel the mystery behind the enigmatic girl called Kaya and the mountain that has become her home. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 3,
        studio_id: 34,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Wolf Children',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/9/35721l.webp',
        synopsis:
          "Hana, a hard-working college student, falls in love with a mysterious man who attends one of her classes though he is not an actual student. As it turns out, he is not truly human either. On a full moon night, he transforms, revealing that he is the last werewolf alive. Despite this, Hana's love remains strong, and the two ultimately decide to start a family. Hana gives birth to two healthy children—Ame, born during rainfall, and Yuki, born during snowfall—both possessing the ability to turn into wolves, a trait inherited from their father. All too soon, however, the sudden death of her lover devastates Hana's life, leaving her to raise a peculiar family completely on her own. The stress of raising her wild-natured children in a densely populated city, all while keeping their identity a secret, culminates in a decision to move to the countryside, where she hopes Ame and Yuki can live a life free from the judgments of society. Wolf Children is the heartwarming story about the challenges of being a single mother in an unforgiving modern world. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 5,
        studio_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Kizumonogatari Part 2: Hot-Blooded',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1981/112812l.webp',
        synopsis:
          "No longer truly human, Koyomi Araragi decides to retrieve Kiss-shot Acerola-orion Heart-under-blade's severed body parts that were stolen by three powerful vampire hunters. Awaiting him are Dramaturgie, a vampire hunter who is a vampire himself; Episode, a half-vampire with the ability to transform into mist; and Guillotinecutter, a human priest who is the most dangerous of them all. Unbeknownst to Araragi, each minute he spends trying to retrieve Kiss-shot's limbs makes him less of a human and more of a vampire. Will he be able to keep his wish of becoming human once again by the end of his battles? [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 1,
        studio_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Gurren Lagann The Movie: The Lights in the Sky are Stars',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/12/19698l.webp',
        synopsis:
          "Humans have enjoyed their lavish, peaceful, and prosperous lives for seven years since the day the almighty Spiral King was defeated—the day they reclaimed their homeland, Earth. However, the boon of this lifestyle leaves them unprepared when an unknown, hostile threat arises due to the ever-growing human population. This calamity is the Anti-Spiral—a fearsome enemy with unparalleled power. As the Spiral King's prognosis postulating the destruction of \"The Spiral's World\" begins to come true, the pieces are in place, and Team Dai-Gurren is ready. With his late brother's hope to see a better future for mankind, Simon—along with Nia Teppelin and the rest of the team—is determined to overthrow the mighty Anti-Spiral in order to revive humanity's lost hope. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 2,
        studio_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'I Want To Eat Your Pancreas',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/1768/93291l.webp',
        synopsis:
          'The aloof protagonist: a bookworm who is deeply detached from the world he resides in. He has no interest in others and is firmly convinced that nobody has any interest in him either. His story begins when he stumbles across a handwritten book, titled "Living with Dying." He soon identifies it as a secret diary belonging to his popular, bubbly classmate Sakura Yamauchi. She then confides in him about the pancreatic disease she is suffering from and that her time left is finite. Only her family knows about her terminal illness; not even her best friends are aware. Despite this revelation, he shows zero sympathy for her plight, but caught in the waves of Sakura\'s persistent buoyancy, he eventually concedes to accompanying her for her remaining days. As the pair of polar opposites interact, their connection strengthens, interweaving through their choices made with each passing day. Her apparent nonchalance and unpredictability disrupts the protagonist\'s impassive flow of life, gradually opening his heart as he discovers and embraces the true meaning of living. [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 3,
        studio_id: 37,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Neon Genesis Evangelion: The End of Evangelion',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/1404/98182l.webp',
        synopsis:
          "Shinji Ikari is left emotionally comatose after the death of a dear friend. With his son mentally unable to pilot the humanoid robot Evangelion Unit-01, Gendou Ikari's NERV races against the shadow organization SEELE to see who can enact their ultimate plan first. SEELE desires to create a godlike being by fusing their own souls into an Evangelion unit, while Gendou wishes to revert all of humanity into one primordial being so that he can be reunited with Yui, his deceased wife. SEELE unleashes its military forces in a lethal invasion of NERV headquarters. As SEELE's forces cut down NERV's scientists and security personnel, Asuka Langley Souryuu pilots Evangelion Unit-02 in a desperate last stand against SEELE's heaviest weaponry. The battle rages on, and a depressed Shinji hides deep within NERV's headquarters. With the fate of the world resting in Shinji's hands, Captain Misato Katsuragi hunts for the teenage boy as society crumbles around them. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 2,
        studio_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Shoujo☆Kageki Revue Starlight Movie',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1378/119190l.webp',
        synopsis:
          'With the arrival of a new generation of talented girls, another lively year at Seishou Music Academy begins. The graduating 99th class is already preparing for the much-anticipated rendition of Starlight, a bittersweet story about the parting of two girls. It seems like all students in the Actor Training Department have their post-graduation future figured out—except for the cheerful Karen Aijou. Having fulfilled her promise of performing in a play with Hikari Kagura, her ambitious childhood friend, Karen struggles to find her purpose. What lies beyond their promise is a mystery to Karen, as Hikari was the fuel that kept her passion for performing aflame. Now alone, Karen must confront the reality of stage girls and find her way toward the future—her very own stage. [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 3,
        studio_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'The Garden of Sinners Chapter 5: Paradox Spiral',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1574/112838l.webp',
        synopsis:
          'In November 1998, a double homicide occurs at the newly constructed Ogawa apartment complex in the heart of Mifune City. The murderer, Tomoe Enjou, has fled in a panic. To his astonishment, he is not pursued by the police and news of the incident has not been reported through media outlets. After Shiki Ryougi defends Tomoe from a group of thugs, she allows him to use her residence as a hideout. However, a few days later, Tomoe is shaken to discover that his mother is alive, even though he is convinced that he killed her. Coincidentally, Mikiya Kokutou is investigating a tip that his associate Touko Aozaki receives regarding the murder at the unique apartment complex. As he uncovers more information about the incident, Mikiya takes a particular interest in Tomoe. Deciding to investigate him further, Mikiya soon discovers the disturbing truth of the foreboding Ogawa complex. The fifth installment of the Kara no Kyoukai film series, Mujun Rasen combines an intricately constructed mystery with established themes and characters to produce a dark, thought-provoking story. [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 1,
        studio_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Perfect Blue',
        type: 'Movie',
        season: null,
        year: null,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/11/79127l.webp',
        synopsis:
          "J-pop idol group CHAM! has spent the last two years entertaining its fans. Sadly, all good things must come to an end, and CHAM! must see one of its members, Mima Kirigoe, leave the group to pursue her acting career. While Mima's choice is met with a mixed response, she hopes her fans will continue to support her. However, Mima's life begins to change drastically after her departure from the group. Wanting to shed her pop-idol image, she takes on a role in a crime drama series, and her career as an actress gradually becomes more demanding and taxing for both Mima and her manager, Rumi Hidaka. To add to Mima's growing unease, an obsessed fan who is incapable of accepting that Mima has quit being an innocent idol, begins stalking her; a new anonymous website begins to impersonate her life with intricate detail; and CHAM! also appears to be doing better without her. One by one, each disturbing development drives Mima to become increasingly unhinged and unable to distinguish reality from fantasy. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        rating_id: 2,
        studio_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('animes', null, {});
  }
};
