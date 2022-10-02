'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('animes', [
      {
        title: 'Fullmetal Alchemist: Brotherhood',
        type: 'TV',
        season: 'spring',
        year: 2009,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/1223/96541l.webp',
        highlight_image_path: '/images/0001.jpeg',
        synopsis:
          'After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse\'s body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse\'s soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher\'s Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys\' journey embroils them in a growing conspiracy that threatens the fate of the world. [Written by MAL Rewrite]',
        total_user_review: 1,
        avg_review_score: 10,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 1,
        studio_id: 1
      },
      {
        title: 'Kaguya-sama: Love is War - Ultra Romantic',
        type: 'TV',
        season: 'spring',
        year: 2022,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1160/122627l.webp',
        highlight_image_path: '/images/0002.png',
        synopsis:
          "The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends. Meanwhile, council treasurer Yuu Ishigami suffers under the weight of his hopeless crush on Tsubame Koyasu, a popular upperclassman who helps to instill a new confidence in him. Miko Iino, the newest student council member, grows closer to the rule-breaking Ishigami while striving to overcome her own authoritarian moral code. As love further blooms at Shuchiin Academy, the student council officers drag their outsider friends into increasingly comedic conflicts. [Written by MAL Rewrite]",
        total_user_review: 1,
        avg_review_score: 9,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 2
      },
      {
        title: 'Gintama Season 4',
        type: 'TV',
        season: 'spring',
        year: 2015,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/3/72078l.webp',
        synopsis:
          "Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko? Meanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team. Filled with tongue-in-cheek humor and moments of heartfelt emotion, Gintama's fourth season finds Gintoki and his friends facing both their most hilarious misadventures and most dangerous crises yet. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 3
      },
      {
        title: 'Steins;Gate',
        type: 'TV',
        season: 'spring',
        year: 2011,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/5/73199l.webp',
        highlight_image_path: '/images/0003.webp',
        synopsis:
          'Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable "gadget" the trio have created is a microwave that has the mystifying power to turn bananas into green goo. However, when Rintarou decides to attend neuroscientist Kurisu Makise\'s conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the "Phone Microwave" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Rintarou dabbles further with the "time machine," attracting the ire and attention of the mysterious organization SERN. Due to the novel discovery, Rintarou and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, he is not only fighting a battle to save his loved ones, but also one against his degrading sanity. [Written by MAL Rewrite]',
        total_user_review: 1,
        avg_review_score: 8,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 4
      },
      {
        title: 'Attack on Titan Season 3 Part 2',
        type: 'TV',
        season: 'spring',
        year: 2019,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1517/100633l.webp',

        highlight_image_path: '/images/0004.jpeg',
        synopsis:
          "Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless \"Titans\" takes the stage once again. Returning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them. Shingeki no Kyojin Season 3 Part 2 follows Eren as he vows to take back everything that was once his. Alongside him, the Survey Corps strive—through countless sacrifices—to carve a path towards victory and uncover the secrets locked away in the Yeager family's basement. [Written by MAL Rewrite]",
        total_user_review: 1,
        avg_review_score: 7,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 1,
        studio_id: 5
      },
      {
        title: 'Gintama Season 2',
        type: 'TV',
        season: 'spring',
        year: 2011,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/4/50361l.webp',
        synopsis:
          "After a one-year hiatus, Shinpachi Shimura returns to Edo, only to stumble upon a shocking surprise: Gintoki and Kagura, his fellow Yorozuya members, have become completely different characters! Fleeing from the Yorozuya headquarters in confusion, Shinpachi finds that all the denizens of Edo have undergone impossibly extreme changes, in both appearance and personality. Most unbelievably, his sister Otae has married the Shinsengumi chief and shameless stalker Isao Kondou and is pregnant with their first child. Bewildered, Shinpachi agrees to join the Shinsengumi at Otae and Kondou's request and finds even more startling transformations afoot both in and out of the ranks of the the organization. However, discovering that Vice Chief Toushirou Hijikata has remained unchanged, Shinpachi and his unlikely Shinsengumi ally set out to return the city of Edo to how they remember it. With even more dirty jokes, tongue-in-cheek parodies, and shameless references, Gintama' follows the Yorozuya team through more of their misadventures in the vibrant, alien-filled world of Edo. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 12
      },
      {
        title: 'Gintama: Enchousen',
        type: 'TV',
        season: 'fall',
        year: 2012,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1452/123686l.webp',
        synopsis:
          "While Gintoki Sakata was away, the Yorozuya found themselves a new leader: Kintoki, Gintoki's golden-haired doppelganger. In order to regain his former position, Gintoki will need the help of those around him, a troubling feat when no one can remember him! Between Kintoki and Gintoki, who will claim the throne as the main character? In addition, Yorozuya make a trip back down to red-light district of Yoshiwara to aid an elderly courtesan in her search for her long-lost lover. Although the district is no longer in chains beneath the earth's surface, the trio soon learn of the tragic backstories of Yoshiwara's inhabitants that still haunt them. With flashback after flashback, this quest has Yorozuya witnessing everlasting love and protecting it as best they can with their hearts and souls. Gintama': Enchousen includes moments of action-packed intensity along with their usual lighthearted, slapstick humor for Gintoki and his friends. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 12
      },
      {
        title: 'Hunter x Hunter',
        type: 'TV',
        season: 'fall',
        year: 2011,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/1337/99013l.webp',
        synopsis:
          "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased. Ambitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path. During the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 6
      },
      {
        title: 'Fruits Basket: The Final Season',
        type: 'TV',
        season: 'spring',
        year: 2021,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1085/114792l.webp',
        synopsis:
          'Hundreds of years ago, the Chinese Zodiac spirits and their god swore to stay together eternally. United by this promise, the possessed members of the Souma family shall always return to each other under any circumstances. Yet, when these bonds shackle them from freedom, it becomes an undesirable burden—a curse. As head of the clan, Akito is convinced that he shares a special connection with the other Soumas. While he desperately clings to this fantasy, the rest of the family remains isolated and suppressed by the fear of punishment. Tooru Honda, who has grown attached to the Soumas, is determined to break the chains that bind them. Her companionship with the family and her friends encourages her to move forward with lifting the curse. However, due to confounding revelations, she struggles to find the tenacity to continue her endeavors. With time slowly withering away, Tooru contends with an uncertain future in hopes of reaching the tranquility that may lie beyond all this commotion. [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 13
      },
      {
        title: 'Gintama Season 5',
        type: 'TV',
        season: 'winter',
        year: 2017,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/3/83528l.webp',
        synopsis:
          "After joining the resistance against the bakufu, Gintoki and the gang are in hiding, along with Katsura and his Joui rebels. The Yorozuya is soon approached by Nobume Imai and two members of the Kiheitai, who explain that the Harusame pirates have turned against 7th Division Captain Kamui and their former ally Takasugi. The Kiheitai present Gintoki with a job: find Takasugi, who has been missing since his ship was ambushed in a Harusame raid. Nobume also makes a stunning revelation regarding the Tendoushuu, a secret organization pulling the strings of numerous factions, and their leader Utsuro, the shadowy figure with an uncanny resemblance to Gintoki's former teacher. Hitching a ride on Sakamoto's space ship, the Yorozuya and Katsura set out for Rakuyou, Kagura's home planet, where the various factions have gathered and tensions are brewing. Long-held grudges, political infighting, and the Tendoushuu's sinister overarching plan finally culminate into a massive, decisive battle on Rakuyou. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 3
      },
      {
        title: 'March Comes In Like A Lion 2nd Season',
        type: 'TV',
        season: 'fall',
        year: 2017,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/3/88469l.webp',
        synopsis:
          'Now in his second year of high school, Rei Kiriyama continues pushing through his struggles in the professional shogi world as well as his personal life. Surrounded by vibrant personalities at the shogi hall, the school club, and in the local community, his solitary shell slowly begins to crack. Among them are the three Kawamoto sisters—Akari, Hinata, and Momo—who forge an affectionate and familial bond with Rei. Through these ties, he realizes that everyone is burdened by their own emotional hardships and begins learning how to rely on others while supporting them in return. Nonetheless, the life of a professional is not easy. Between tournaments, championships, and title matches, the pressure mounts as Rei advances through the ranks and encounters incredibly skilled opponents. As he manages his relationships with those who have grown close to him, the shogi player continues to search for the reason he plays the game that defines his career. [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 7
      },
      {
        title: 'Gintama',
        type: 'TV',
        season: 'spring',
        year: 2006,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/10/73274l.webp',
        synopsis:
          'Edo is a city that was home to the vigor and ambition of samurai across the country. However, following feudal Japan\'s surrender to powerful aliens known as the "Amanto," those aspirations now seem unachievable. With the once-influential shogunate rebuilt as a puppet government, a new law is passed that promptly prohibits all swords in public. Enter Gintoki Sakata, an eccentric silver-haired man who always carries around a wooden sword and maintains his stature as a samurai despite the ban. As the founder of Yorozuya, a small business for odd jobs, Gintoki often embarks on endeavors to help other people—though usually in rather strange and unforeseen ways. Assisted by Shinpachi Shimura, a boy with glasses supposedly learning the way of the samurai; Kagura, a tomboyish girl with superhuman strength and an endless appetite; and Sadaharu, their giant pet dog who loves biting on people\'s heads, the Yorozuya encounter anything from alien royalty to scuffles with local gangs in the ever-changing world of Edo. [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 12
      },
      {
        title: 'Clannad ~After Story~',
        type: 'TV',
        season: 'fall',
        year: 2008,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1299/110774l.webp',
        synopsis:
          "Clannad: After Story, the sequel to the critically acclaimed slice-of-life series Clannad, begins after Tomoya Okazaki and Nagisa Furukawa graduate from high school. Together, they experience the emotional rollercoaster of growing up. Unable to decide on a course for his future, Tomoya learns the value of a strong work ethic and discovers the strength of Nagisa's support. Through the couple's dedication and unity of purpose, they push forward to confront their personal problems, deepen their old relationships, and create new bonds. Time also moves on in the Illusionary World. As the plains grow cold with the approach of winter, the Illusionary Girl and the Garbage Doll are presented with a difficult situation that reveals the World's true purpose. Based on the visual novel by Key and produced by Kyoto Animation, Clannad: After Story is an impactful drama highlighting the importance of family and the struggles of adulthood. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 8
      },
      {
        title: 'Code Geass: Lelouch of the Rebellion R2',
        type: 'TV',
        season: 'spring',
        year: 2008,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/4/9391l.webp',
        synopsis:
          "One year has passed since the Black Rebellion, a failed uprising against the Holy Britannian Empire led by the masked vigilante Zero, who is now missing. At a loss without their revolutionary leader, Area 11's resistance group—the Black Knights—find themselves too powerless to combat the brutality inflicted upon the Elevens by Britannia, which has increased significantly in order to crush any hope of a future revolt. Lelouch Lamperouge, having lost all memory of his double life, is living peacefully alongside his friends as a high school student at Ashford Academy. His former partner C.C., unable to accept this turn of events, takes it upon herself to remind him of his past purpose, hoping that the mastermind Zero will rise once again to finish what he started, in this thrilling conclusion to the series. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 1,
        studio_id: 12
      },
      {
        title: 'Gintama.: Silver Soul Arc - Second Half War',
        type: 'TV',
        season: 'summer',
        year: 2018,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/1776/96566l.webp',
        synopsis:
          "Following the temporary retreat of the Altana Liberation Army from the Kabuki District, the state of the war has seemingly improved. However, as the Oniwaban, Shinsengumi, and residents of the district combat the army's remnants, Edo's greatest inventor Gengai Hiraga is abducted. Responsible for causing the enemy's withdrawal by rendering their weapons useless, Gengai's nanomachine virus is now at risk of being shut down. Meanwhile, a laser capable of obliterating a planet is activated in Earth's orbit on the Liberation Army's mother ship. Another battle ensues when Shinsuke Takasugi and the rest of the Kiheitai arrive on the vessel to stop the weapon from firing. Forced to fight a war on two fronts, the Yorozuya and their allies must prevail on both sides to save Edo and the rest of the world. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 3
      },
      {
        title: 'Owarimonogatari Second Season',
        type: 'TV',
        season: 'summer',
        year: 2017,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/6/87322l.webp',
        synopsis:
          'Following an encounter with oddity specialist Izuko Gaen, third-year high school student Koyomi Araragi wakes up in a strange, deserted void only to be greeted by a joyfully familiar face in an alarmingly unfamiliar place. Araragi, with the help of his girlfriend Hitagi Senjougahara, maneuvers through the webs of his past and the perplexities of the present in search of answers. However, fate once again delivers him to the eccentric transfer student Ougi Oshino, who brings forth an unexpected proposal that may unearth the very foundation to which he is anchored. As Araragi peels back the layers of mystery surrounding an apparition, he discovers a truth not meant to be revealed. [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 1,
        studio_id: 7
      },
      {
        title: 'Demon Slayer: Kimetsu no Yaiba Entertainment District Arc',
        type: 'TV',
        season: 'winter',
        year: 2022,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1908/120036l.webp',
        highlight_image_path: '/images/0005.webp',
        synopsis:
          "The devastation of the Mugen Train incident still weighs heavily on the members of the Demon Slayer Corps. Despite being given time to recover, life must go on, as the wicked never sleep: a vicious demon is terrorizing the alluring women of the Yoshiwara Entertainment District. The Sound Pillar, Tengen Uzui, and his three wives are on the case. However, when he soon loses contact with his spouses, Tengen fears the worst and enlists the help of Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira to infiltrate the district's most prominent houses and locate the depraved Upper Rank demon. [Written by MAL Rewrite]",
        total_user_review: 1,
        avg_review_score: 6,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 1,
        studio_id: 9
      },
      {
        title: 'Monster',
        type: 'TV',
        season: 'spring',
        year: 2004,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/10/18793l.webp',
        synopsis:
          "Dr. Kenzou Tenma, an elite neurosurgeon recently engaged to his hospital director's daughter, is well on his way to ascending the hospital hierarchy. That is until one night, a seemingly small event changes Dr. Tenma's life forever. While preparing to perform surgery on someone, he gets a call from the hospital director telling him to switch patients and instead perform life-saving brain surgery on a famous performer. His fellow doctors, fiancée, and the hospital director applaud his accomplishment; but because of the switch, a poor immigrant worker is dead, causing Dr. Tenma to have a crisis of conscience. So when a similar situation arises, Dr. Tenma stands his ground and chooses to perform surgery on the young boy Johan Liebert instead of the town's mayor. Unfortunately, this choice leads to serious ramifications for Dr. Tenma—losing his social standing being one of them. However, with the mysterious death of the director and two other doctors, Dr. Tenma's position is restored. With no evidence to convict him, he is released and goes on to attain the position of hospital director. Nine years later when Dr. Tenma saves the life of a criminal, his past comes back to haunt him—once again, he comes face to face with the monster he operated on. He must now embark on a quest of pursuit to make amends for the havoc spread by the one he saved. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 2,
        studio_id: 6
      },
      {
        title: 'Attack on Titan: The Final Season',
        type: 'TV',
        season: 'winter',
        year: 2021,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1000/110531l.webp',
        synopsis:
          "Gabi Braun and Falco Grice have been training their entire lives to inherit one of the seven Titans under Marley's control and aid their nation in eradicating the Eldians on Paradis. However, just as all seems well for the two cadets, their peace is suddenly shaken by the arrival of Eren Yeager and the remaining members of the Survey Corps. Having finally reached the Yeager family basement and learned about the dark history surrounding the Titans, the Survey Corps has at long last found the answer they so desperately fought to uncover. With the truth now in their hands, the group set out for the world beyond the walls. In Shingeki no Kyojin: The Final Season, two utterly different worlds collide as each party pursues its own agenda in the long-awaited conclusion to Paradis' fight for freedom. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 1,
        studio_id: 10
      },
      {
        title: 'Kingdom: Season 3',
        type: 'TV',
        season: 'spring',
        year: 2020,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1443/111830l.webp',
        synopsis:
          "Following the successful Sanyou campaign, the Qin army, including 1,000-Man Commander Xin, inches ever closer to fulfilling King Ying Zheng's dream of unifying China. With a major geographical foothold in the state of Wei now under its control, Qin sets its sights eastward toward the remaining warring states. Meanwhile Li Mu—an unparalleled strategist and the newly appointed prime minister of the state of Zhao—has taken advantage of Zhao's temporary truce with Qin to negotiate with the other states without interruption. Seemingly without warning, Ying Zheng receives news that armies from the states of Chu, Zhao, Wei, Han, Yan, and Qi have crossed into Qin territory. Realizing too late the purpose behind Li Mu's truce with Qin, Zheng quickly gathers his advisors to devise a plan to address the six-state coalition army on their doorstep. For the first time in history, the state of Qin faces complete destruction and must use every resource and strategy at their disposal to prevent themselves from being wiped off the map. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 1,
        studio_id: 14
      },
      {
        title: 'Gintama.: Silver Soul Arc',
        type: 'TV',
        season: 'winter',
        year: 2018,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/12/89603l.webp',
        synopsis:
          "After the fierce battle on Rakuyou, the untold past and true goal of the immortal Naraku leader, Utsuro, are finally revealed. By corrupting the Altana reserves of several planets, Utsuro has successfully triggered the intervention of the Tendoshuu’s greatest enemy: the Altana Liberation Army. With Earth as the main battleground in this interplanetary war, Utsuro's master plan to destroy the planet—and himself—is nearly complete. An attack on the O-Edo Central Terminal marks the beginning of the final battle to take back the land of the samurai. With the Yorozuya nowhere in sight, the bakufu all but collapsed, and the Shogun missing, the people are left completely helpless as the Liberation Army begins pillaging Edo in the name of freeing them from the Tendoshuu's rule. Caught in the crossfire between two equally imposing forces, can Gintoki, Kagura, Shinpachi, and the former students of Shouyou Yoshida put aside their differences and unite their allies to protect what they hold dear? [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 3
      },
      {
        title: 'Kingdom Season 4',
        type: 'TV',
        season: 'spring',
        year: 2022,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1566/122794l.webp',
        synopsis:
          "Following the conclusion of the large-scale coalition campaign, the entirety of China is in a state of economic recovery. The victor of the battle, the state of Qin, is no different. There, the political parties led by Ying Zheng and Buwei Lü continue their inner conflict. Having played the role of king in the coalition battle, Zheng has the trust of the people—but Lü is far from out of the fight. In 18 months, he plans to interrupt Zheng's coming-of-age ceremony. Meanwhile, a Zhao army numbering 20,000 troops has set out toward Qin. In the royal court, due to the lack of generals capable of responding to the incoming threat, Lü slyly suggests that Zheng take command. However, Cheng Jiao, Zheng's half-brother, volunteers instead. As they grew to trust each other during the coalition battle, Zheng now accepts Jiao as his replacement. However, the Zhao forces retreat a mere half-day after clashing with Jiao's army. With trouble quickly brewing in the shadows, the internal struggle of Qin is only complicated further. There are only two men Zheng feels he can rely on: Bi, a general who commands 30,000 men; and Xin, the leader of the Fei Xin force. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 1,
        studio_id: 14
      },
      {
        title: 'Mob Psycho 100 II',
        type: 'TV',
        season: 'winter',
        year: 2019,
        duration: 1440000,
        image_path: 'https://cdn.myanimelist.net/images/anime/1918/96303l.webp',
        synopsis:
          'Shigeo "Mob" Kageyama is now maturing and understanding his role as a supernatural psychic that has the power to drastically affect the livelihood of others. He and his mentor Reigen Arataka continue to deal with supernatural requests from clients, whether it be exorcizing evil spirits or tackling urban legends that haunt the citizens. While the workflow remains the same, Mob isn\'t just blindly following Reigen around anymore. With all his experiences as a ridiculously strong psychic, Mob\'s supernatural adventures now have more weight to them. Things take on a serious and darker tone as the dangers Mob and Reigen face are much more tangible and unsettling than ever before. [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 3,
        studio_id: 1
      },
      {
        title: 'Made in Abyss: The Golden City of the Scorching Sun',
        type: 'TV',
        season: 'summer',
        year: 2022,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1864/122519l.webp',
        synopsis:
          'After surviving the brutal challenges of Idofront, Riko now possesses a White Whistle, allowing her to descend into the Abyss\'s sixth layer—The Capital of the Unreturned. Alongside Reg and Nanachi, Riko begins to explore the uncharted domain, where the ruins of the promised Golden City are located. As the trio starts to adapt to the harsh environment, they soon encounter dangerous creatures and treacherous landscapes. Their expedition leads them to a village inhabited by strange beings known as "hollows." Despite the creeping sense of unease that welcomes them, the three venture onward to uncover the mysteries of the settlement and long-lost legacies of the forgotten adventurers who once descended into the horrors of the unexplored Abyss. [Written by MAL Rewrite]',
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 1,
        studio_id: 11
      },
      {
        title: 'Attack on Titan: The Final Season Part 2',
        type: 'TV',
        season: 'winter',
        year: 2022,
        duration: 1440000,
        image_path:
          'https://cdn.myanimelist.net/images/anime/1948/120625l.webp',
        synopsis:
          "Turning against his former allies and enemies alike, Eren Yeager sets a disastrous plan in motion. Under the guidance of the Beast Titan, Zeke, Eren takes extreme measures to end the ancient conflict between Marley and Eldia—but his true intentions remain a mystery. Delving deep into his family's past, Eren fights to control his own destiny. Meanwhile, the long-feuding nations of Marley and Eldia utilize both soldiers and Titans in a brutal race to eliminate the other. Reiner Braun uses his own powers in a desperate bid to hold off Eren's own militaristic force, and his fellow Eldians—children Falco Grice and Gabi Braun—struggle to survive in the unfolding chaos. Elsewhere, Eren's childhood friends Mikasa Ackerman and Armin Arlert remain imprisoned alongside Eren's former Survey Corps companions, all disturbed by Eren's monstrous transformation. Under the blind belief that Eren still secretly harbors good intentions, Mikasa and the others enter the fray in an attempt to save their friend's very soul. [Written by MAL Rewrite]",
        total_user_review: 0,
        avg_review_score: 0,
        total_view: 0,
        publish_status: true,
        created_at: new Date(),
        updated_at: new Date(),
        rating_id: 1,
        studio_id: 10
      }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('animes', null, {});
  }
};
