export type AnimeRecommendation = {
  name: string;
  details: string;
  imgUrl: string;
  genre: string;
};

export const animeRecommendationData: AnimeRecommendation[] = [
  {
    name: "Witch Watch",
    details: `If you've been stressed about your fkin life, just watch this shit bruh, this is a good shit.`,
    imgUrl: "/images/witch-watch.png",
    genre: "Comedy, Supernatural",
  },
  {
    name: "Ousama Ranking",
    details: `The people of the kingdom look down on the young Prince Bojji, who can neither hear nor speak. They call him "The Useless Prince" while jeering at his supposed foolishness.

However, while Bojji may not be physically strong, he is certainly not weak of heart. When a chance encounter with a shadow creature should have left him traumatized, it instead makes him believe that he has found a friend amidst those who only choose to notice his shortcomings. He starts meeting with Kage, the shadow, regularly, to the point where even the otherwise abrasive creature begins to warm up to him.

Kage and Bojji's unlikely friendship lays the budding foundations of the prince's journey, one where he intends to conquer his fears and insecurities. Despite the constant ridicule he faces, Bojji resolves to fulfill his desire of becoming the best king he can be.`,
    imgUrl: "/images/ousama-ranking.jpg",
    genre: "Adventure, Fantasy",
  },
  {
    name: "Death Note",
    details: `Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.

For his own amusement, Ryuk drops his Death Note into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon's name, which disturbingly enacts his first murder.

Aware of the terrifying godlike power that has fallen into his hands, Light—under the alias Kira—follows his wicked sense of justice with the ultimate goal of cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light's brilliance rivals L's, the grand chase for Kira turns into an intense battle of wits that can only end when one of them is dead.`,
    imgUrl: "/images/death-note.jpg",
    genre: "Supernatural, Suspense",
  },
  {
    name: "Vivy: Flourite Eye's Song",
    details: `When highly evolved AIs set out to eradicate mankind, the carnage that ensues fills the air with the stench of fresh blood and burning bodies. In a desperate bid to prevent the calamity from ever occurring, a scientist bets everything on a remnant from the past.

Turning the clock back a hundred years, AIs are already an integral part of human society, programmed with specific missions meant to be carried out for their entire course of operation. Vivy, the first ever autonomous AI, is a songstress tasked with spreading happiness through her voice. In a theme park where she hardly ever gets a proper audience, she strives to pour her heart out into her performances, bound to repeat it day after day—that is, until an advanced AI from the future appears before her and enlists her help in stopping a devastating war a hundred years in the making. With no time to process the revelation that flips her world upside down, Vivy is catapulted into a century-long journey to avert the violent history yet to come.`,
    imgUrl: "/images/vivy.jpg",
    genre: "Action, Sci-Fi, Suspense",
  },
  {
    name: "Code Geass: Hangyaku no Lelouch",
    details: `Code Geass: Hangyaku no Lelouch is an original anime series by Sunrise animation studio with original character designs by the all-female Japanese manga artist group Clamp. Manga and light novels based off the show have been published by Kadokawa Shoten. The show has sold millions of DVDs and Blu-ray volumes and is extremely popular in both Japan and North America. The show is known for its multi-genre appeal and for its diverse cast of characters who face many moral dilemmas over the course of the series.

The series won: "The Best Anime TV Series" award at the 2007 Tokyo International Anime Fair, "The Best TV animation" award at the twelfth Animation Kobe, and "The Most Popular Anime" award at the Animage's 29th Annual Anime Grand Prix.

The series was rebroadcasted during October 2021 on the Animeism programming block to celebrate its 15th anniversary.`,
    imgUrl: "/images/code-geass.png",
    genre: "Action, Award Winning, Drama, Sci-Fi",
  },
  {
    name: "Makeine: Too Many Losing Heroines!",
    details: `Despite not understanding much about fleeting teen romance, first-year high school student Kazuhiko Nukumizu still wonders how he would react if his life were to be turned into a love story. Regardless, as a self-proclaimed "background character," Nukumizu is satisfied continuing his life as an introvert with a negligible social life. However, he suddenly finds himself too close to the spotlight when he witnesses his popular classmate Anna Yanami be rejected by her childhood friend in the middle of a family restaurant.

While Nukumizu wishes he could just forget what he saw and move on, Anna ends up forcefully confiding herself in Nukumizu, lamenting her status as a childhood friend fated to have her beloved stolen. As he becomes dragged into Anna's situation, Nukumizu soon gets caught up in the relationship drama of two more girls: Lemon Yakishio, an outgoing member of the track and field club; and Chika Komari, a shy member of the literature club. Now thrust out of his comfort zone, Nukumizu finds himself a major character in the lives of too many losing heroines.`,
    imgUrl: "/images/makeine.jpg",
    genre: "Comedy, Romance",
  },
  {
    name: "One Punch Man (Season 1 GOATED)",
    details: `The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.

One day, Saitama catches the attention of 19-year-old cyborg Genos, who witnesses his power and wishes to become Saitama's disciple. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society. Saitama, who is shocked that no one knows who he is, quickly agrees. Meeting new allies and taking on new foes, Saitama embarks on a new journey as a member of the Hero Association to experience the excitement of battle he once felt.`,
    imgUrl: "/images/opm.png",
    genre: "Action, Comedy",
  },
  {
    name: "One Piece Fan Letter",
    details: `Although the golden age of piracy is about to reach new heights, most people do not seek the glory of finding the elusive One Piece—a treasure signifying a new conqueror of all seas that was once embodied by the legendary King of the Pirates, Gol D. Roger. However, even if civilians generally despise pirates, they secretly cheer for at least one of them.

One red-headed girl from Sabaody Archipelago is no exception: She reveres Nami, the ingenious female navigator of Monkey D. Luffy's Straw Hat crew. Determined to deliver a fan letter to her idol, the Sabaody child is prepared to challenge forces of authority who strive to prevent Luffy and his friends from departing for their next destination: the New World. But to succeed, Nami's fan may need to risk her life and interfere with the Marines' plans, potentially causing devastating consequences for the wider world.`,
    imgUrl: "/images/op-fan-letter.jpg",
    genre: "Action, Adventure, Fantasy",
  },
  {
    name: "Fullmetal Alchemist: Brotherhood",
    details: `After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.

The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.

As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.`,
    imgUrl: "/images/fmab.jpg",
    genre: "Action, Adventure, Drama, Fantasy",
  },
  {
    name: "[Oshi no Ko]",
    details: `In the entertainment world, celebrities often show exaggerated versions of themselves to the public, concealing their true thoughts and struggles beneath elaborate lies. Fans buy into these fabrications, showering their idols with undying love and support, until something breaks the illusion. Sixteen-year-old rising star Ai Hoshino of pop idol group B Komachi has the world captivated; however, when she announces a hiatus due to health concerns, the news causes many to become worried.

As a huge fan of Ai, gynecologist Gorou Amemiya cheers her on from his countryside medical practice, wishing he could meet her in person one day. His wish comes true when Ai shows up at his hospital—not sick, but pregnant with twins! While the doctor promises Ai to safely deliver her children, he wonders if this encounter with the idol will forever change the nature of his relationship with her.`,
    imgUrl: "/images/onk.jpg",
    genre: "Award Winning, Drama",
  },
];
