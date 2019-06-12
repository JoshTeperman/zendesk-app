const mockFormattedTickets = [
  {
    id: 1,
    subject: 'Sample ticket: Meet the ticket',
    description: 'Hi Josh,\n\nThis is your first ticket. Ta-da! Any customer request ' +
      'sent to your supported channels (email, chat, voicemail, web form, ' +
      'and tweet) will become a Support ticket, just like this one. Respond ' +
      'to this ticket by typing a message above and clicking Submit. You ' +
      'can also see how an email becomes a ticket by emailing your new ' +
      'account, support@joshteperman.zendesk.com. Your ticket will appear ' +
      "in ticket views.\n\nThat's the ticket on tickets. If you want to learn " +
      'more, check out: \n' +
      'https://support.zendesk.com/hc/en-us/articles/203691476\n',
    status: 'open',
    type: 'incident',
    priority: 'normal',
    tags: [ 'sample', 'support', 'zendesk' ],
    requested: '2019-05-30T03:19:31Z',
    requester: 382436378771
  },
  {
    id: 2,
    subject: 'Test ticket',
    description: 'Test ticket body',
    status: 'open',
    type: null,
    priority: null,
    tags: [],
    requested: '2019-05-30T03:27:05Z',
    requester: 382347803272
  },
  {
    id: 3,
    subject: 'Support Request #2',
    description: 'please help',
    status: 'open',
    type: null,
    priority: null,
    tags: [],
    requested: '2019-06-01T03:39:12Z',
    requester: 382347803272
  },
  {
    id: 4,
    subject: 'Help my cat is dead',
    description: 'never mind, false alarm',
    status: 'open',
    type: null,
    priority: null,
    tags: [],
    requested: '2019-06-01T03:39:32Z',
    requester: 382347803272
  },
  {
    id: 5,
    subject: 'Just wanted to say hi - not urgent',
    description: 'Need friends, plz send help',
    status: 'open',
    type: null,
    priority: null,
    tags: [],
    requested: '2019-06-01T03:40:16Z',
    requester: 382347803272
  },
  {
    id: 6,
    subject: 'velit eiusmod reprehenderit officia cupidatat',
    description: 'Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat ' +
      'sit reprehenderit. Velit labore proident quis culpa ad duis ' +
      'adipisicing laboris voluptate velit incididunt minim consequat ' +
      'nulla. Laboris adipisicing reprehenderit minim tempor officia ' +
      'ullamco occaecat ut laborum.\n\nAliquip velit adipisicing ' +
      'exercitation irure aliqua qui. Commodo eu laborum cillum nostrud ' +
      'eu. Mollit duis qui non ea deserunt est est et officia ut excepteur ' +
      'Lorem pariatur deserunt.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'est', 'incididunt', 'nisi' ],
    requested: '2019-06-03T11:37:09Z',
    requester: 382347803272
  },
  {
    id: 7,
    subject: 'excepteur laborum ex occaecat Lorem',
    description: 'Exercitation amet in laborum minim. Nulla et veniam laboris dolore ' +
      'fugiat aliqua et sit mollit. Dolor proident nulla mollit culpa in ' +
      'officia pariatur officia magna eu commodo duis.\n\nAliqua reprehenderit ' +
      'aute qui voluptate dolor deserunt enim aute tempor ad dolor fugiat. ' +
      'Mollit aliquip elit aliqua eiusmod. Ex et anim non exercitation ' +
      'consequat elit dolore excepteur. Aliqua reprehenderit non culpa sit ' +
      'consequat cupidatat elit.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'amet', 'labore', 'voluptate' ],
    requested: '2019-06-03T11:37:10Z',
    requester: 382347803272
  },
  {
    id: 8,
    subject: 'ad sunt qui aute ullamco',
    description: 'Sunt incididunt officia proident elit anim ullamco reprehenderit ut. ' +
      'Aliqua sint amet aliquip cillum minim magna consequat excepteur ' +
      'fugiat exercitation est exercitation. Adipisicing occaecat nisi ' +
      'aliqua exercitation.\n\nAute Lorem aute tempor sunt mollit dolor in ' +
      'consequat non cillum irure reprehenderit. Nulla deserunt qui aliquip ' +
      'officia duis incididunt et est velit nulla irure in fugiat in. ' +
      'Deserunt proident est in dolore culpa mollit exercitation ea anim ' +
      'consequat incididunt. Mollit et occaecat ullamco ut id incididunt ' +
      'laboris occaecat qui.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'laborum', 'mollit', 'proident' ],
    requested: '2019-06-03T11:37:10Z',
    requester: 382347803272
  },
  {
    id: 9,
    subject: 'aliquip mollit quis laborum incididunt',
    description: 'Pariatur voluptate laborum voluptate sunt ad magna exercitation ' +
      'nulla. In in Lorem minim dolor laboris reprehenderit ad Lorem. ' +
      'Cupidatat laborum qui mollit nostrud magna ullamco. Tempor nisi ex ' +
      'ipsum fugiat dolor proident qui consectetur anim sunt. Dolore ' +
      'consectetur in ex esse et aliqua fugiat enim Lorem ea Lorem ' +
      'incididunt. Non amet elit pariatur commodo labore officia esse anim. ' +
      'In do mollit commodo nulla ullamco culpa cillum incididunt.\n\nEt ' +
      'nostrud aute fugiat voluptate tempor ad labore in elit et sunt. Enim ' +
      'quis nulla eu ut sit. Pariatur irure officia occaecat non dolor est ' +
      'excepteur anim incididunt commodo ea cupidatat minim excepteur. ' +
      'Cillum proident tempor laborum amet est ipsum ipsum aliqua sit sunt ' +
      'reprehenderit fugiat aliqua ea.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'consectetur', 'mollit', 'sit' ],
    requested: '2019-06-03T11:37:10Z',
    requester: 382347803272
  },
  {
    id: 10,
    subject: 'nisi aliquip ipsum nostrud amet',
    description: 'Aute Lorem fugiat ad consectetur sint fugiat. Et qui ipsum in qui ' +
      'nostrud nulla qui et occaecat culpa ad occaecat. Aute mollit ' +
      'occaecat mollit proident nostrud non ea laboris adipisicing ' +
      'deserunt officia. Eiusmod sint fugiat veniam consectetur consequat ' +
      'exercitation esse est.\n\nVelit est ipsum labore aliquip quis mollit ' +
      'laborum in. Consectetur cillum proident ullamco exercitation ' +
      'pariatur. Incididunt consectetur tempor adipisicing esse minim ' +
      'mollit Lorem.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'cillum', 'et', 'occaecat' ],
    requested: '2019-06-03T11:37:11Z',
    requester: 382347803272
  },
  {
    id: 11,
    subject: 'cillum quis nostrud labore amet',
    description: 'Deserunt officia ea fugiat dolor eu laboris esse reprehenderit deserunt ' +
      'dolore voluptate amet culpa. Proident ut mollit adipisicing occaecat ' +
      'Lorem do ut ex aute laboris fugiat minim dolor. In anim non nostrud ' +
      'adipisicing aliquip nisi laborum cupidatat officia. Sunt cillum sint ' +
      'anim elit culpa commodo amet excepteur consectetur veniam nulla ut. ' +
      'Officia ut ut sit incididunt cupidatat velit proident cupidatat ' +
      'voluptate eu ex.\n\nVelit nisi voluptate nulla reprehenderit officia ' +
      'consectetur dolor nostrud cillum duis. Dolore cupidatat eu veniam ut ' +
      'fugiat mollit ea. Reprehenderit nulla nisi cillum voluptate ex. ' +
      'Occaecat incididunt id mollit deserunt occaecat adipisicing ullamco ' +
      'ipsum. Minim ullamco adipisicing quis aliquip est ex sunt ea quis. Sint ' +
      'aute occaecat velit ipsum enim qui fugiat esse in officia excepteur ' +
      'irure. Enim eu dolore reprehenderit exercitation ullamco est nulla ' +
      'voluptate consectetur aliqua sit.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'ad', 'et', 'lorem' ],
    requested: '2019-06-03T11:37:11Z',
    requester: 382347803272
  },
  {
    id: 12,
    subject: 'proident est nisi non irure',
    description: 'Aute mollit ex nulla id culpa nisi enim amet enim duis laborum in. ' +
      'Eiusmod ea quis tempor voluptate deserunt tempor amet fugiat esse ea. ' +
      'Anim sunt nisi laboris dolor. Est ullamco voluptate dolor magna elit ' +
      'eu. Laboris reprehenderit irure occaecat excepteur.\n\nDo nisi commodo ' +
      'dolor eiusmod eiusmod non eu occaecat sunt incididunt irure ' +
      'consectetur do. Exercitation occaecat culpa voluptate exercitation ' +
      'sit. In aute eu nulla anim reprehenderit velit. Eu deserunt aliquip ' +
      'aute Lorem consectetur mollit non esse veniam irure excepteur ' +
      'cupidatat excepteur officia. Velit id et mollit cupidatat cillum elit ' +
      'dolor fugiat pariatur. Deserunt non eu consectetur duis ex ' +
      'consectetur duis eu proident.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'aute', 'consectetur', 'sit' ],
    requested: '2019-06-03T11:37:11Z',
    requester: 382347803272
  },
  {
    id: 13,
    subject: 'veniam ea eu minim aute',
    description: 'Ex non officia in ullamco veniam fugiat cupidatat id aute. Quis minim ' +
      'et quis laborum excepteur. Non officia quis tempor quis nisi et. ' +
      'Aliqua tempor voluptate nulla esse sint. Id nulla consequat sint ' +
      'eiusmod nisi.\n\nCupidatat anim magna qui aliquip. Anim deserunt sint ' +
      'incididunt labore aliquip. Reprehenderit magna deserunt reprehenderit ' +
      'irure Lorem nulla est officia cupidatat in. Dolore ullamco veniam ' +
      'proident consectetur amet ad nulla amet commodo enim occaecat. Sint ' +
      'fugiat dolor aliqua proident. Ex enim eu pariatur qui officia ' +
      'cupidatat adipisicing esse qui fugiat. Do mollit quis cillum quis qui ' +
      'occaecat labore.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'ad', 'aute', 'et' ],
    requested: '2019-06-03T11:37:12Z',
    requester: 382347803272
  },
  {
    id: 14,
    subject: 'magna reprehenderit nisi est cillum',
    description: 'Sit sit consequat magna aliquip officia qui. Fugiat amet id dolor ' +
      'sint exercitation sit. Eiusmod ex eiusmod voluptate voluptate est ' +
      'amet non culpa minim enim minim. Eiusmod fugiat veniam duis eiusmod ' +
      'sint laborum ex amet occaecat.\n\nNostrud consequat officia tempor amet ' +
      'eu. Non adipisicing dolore amet minim id consequat labore irure in ' +
      'esse et aliqua pariatur. Aliquip aliqua id ipsum amet laboris ' +
      'exercitation sunt cillum est et est. Tempor amet qui do dolore fugiat ' +
      'ad id nulla ullamco dolore tempor irure deserunt magna. Ipsum ' +
      'voluptate aliquip ut ad in pariatur adipisicing occaecat ea excepteur ' +
      'Lorem enim exercitation. Lorem sunt officia voluptate pariatur labore ' +
      'esse nostrud ullamco irure sit. Voluptate exercitation do aliquip eu ' +
      'consectetur.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'aliquip', 'magna', 'non' ],
    requested: '2019-06-03T11:37:12Z',
    requester: 382347803272
  },
  {
    id: 15,
    subject: 'quis veniam ad sunt non',
    description: 'Magna culpa velit duis nisi sint veniam nisi adipisicing aute. ' +
      'Eiusmod id cupidatat pariatur tempor esse do. Aliquip ipsum ' +
      'voluptate eiusmod mollit. Et ullamco consectetur tempor cillum sunt ' +
      'anim enim cillum reprehenderit cillum proident. Eu aliqua excepteur ' +
      'eiusmod non ullamco aliqua esse laboris ad commodo reprehenderit ' +
      'pariatur consequat est.\n\nVoluptate eiusmod officia culpa nulla ' +
      'culpa mollit reprehenderit cillum adipisicing sit consectetur in. ' +
      'Anim occaecat excepteur commodo officia aute voluptate excepteur do ' +
      'ut esse occaecat duis consequat. Sunt minim est in non exercitation ' +
      'ad minim ullamco dolore in enim mollit aliquip. Ut ex dolore ' +
      'proident Lorem ut dolor ex. Laboris elit in in mollit. Quis id ' +
      'minim ex ad qui velit.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'aliquip', 'consequat', 'magna' ],
    requested: '2019-06-03T11:37:12Z',
    requester: 382347803272
  },
  {
    id: 16,
    subject: 'tempor aliquip sint dolore incididunt',
    description: 'Amet sint ea minim excepteur amet. Eiusmod duis ad ea ad aliquip ' +
      'occaecat ea voluptate sunt cillum duis aute. Esse in duis tempor ' +
      'et. Est duis nulla irure ullamco amet sit esse Lorem eu aliqua ' +
      'ullamco sunt. In sint dolore id eu ea.\n\nIrure proident nulla ' +
      'deserunt officia laboris culpa. Qui est adipisicing elit tempor ' +
      'cupidatat minim laborum ea est nostrud nulla mollit id dolore. ' +
      'Aute amet amet deserunt incididunt magna ipsum exercitation ' +
      'nostrud incididunt ea qui anim. Adipisicing irure commodo ' +
      'consectetur Lorem ad excepteur nulla eiusmod aliquip irure ' +
      'occaecat. Id sint fugiat proident Lorem est minim ea sint irure. ' +
      'Veniam sint ex minim duis est.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'ad', 'minim', 'non' ],
    requested: '2019-06-03T11:37:13Z',
    requester: 382347803272
  },
  {
    id: 17,
    subject: 'labore pariatur ut laboris laboris',
    description: 'Quis veniam consectetur ullamco aute incididunt eiusmod ut consectetur ' +
      'sunt laboris sint officia labore. Incididunt sit elit ipsum esse ' +
      'excepteur veniam Lorem excepteur amet amet tempor officia. Magna ' +
      'reprehenderit voluptate elit adipisicing consectetur laboris eu nisi ' +
      'ad excepteur adipisicing non duis proident.\n\nAliqua sunt ea dolor ' +
      'dolor elit occaecat. Aliqua reprehenderit commodo minim eu ' +
      'exercitation incididunt consectetur. Eiusmod anim ad adipisicing et ' +
      'ullamco id incididunt.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'culpa', 'dolor', 'eiusmod' ],
    requested: '2019-06-03T11:37:13Z',
    requester: 382347803272
  },
  {
    id: 18,
    subject: 'officia mollit aliqua eu nostrud',
    description: 'Fugiat magna dolor ipsum dolor ex qui commodo deserunt veniam aliqua ' +
      'qui ex. Consequat est duis velit eu id labore id dolor sint laboris. ' +
      'Minim nisi sint aliquip nisi cillum magna deserunt non cupidatat ' +
      'est. Exercitation ea pariatur ipsum non pariatur dolor velit laboris ' +
      'dolore irure reprehenderit ut.\n\nAmet et officia eiusmod adipisicing. ' +
      'Amet ut ut tempor cillum aliqua elit mollit mollit. Exercitation ' +
      'commodo culpa adipisicing aute voluptate consectetur ut est ea quis ' +
      'aliquip duis excepteur. Anim quis quis occaecat fugiat occaecat. Non ' +
      'et deserunt anim eu anim non laborum ex tempor. Tempor aute ' +
      'reprehenderit minim consequat elit minim. Aliqua in laboris culpa ' +
      'excepteur qui enim excepteur cillum commodo eiusmod eu enim do ' +
      'ullamco.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'cillum', 'fugiat', 'irure' ],
    requested: '2019-06-03T11:37:13Z',
    requester: 382347803272
  },
  {
    id: 19,
    subject: 'do incididunt incididunt quis anim',
    description: 'Lorem sit mollit qui ad culpa do commodo ipsum. Labore elit cillum ' +
      'irure mollit est est cupidatat consectetur commodo laborum qui ' +
      'cupidatat. Ullamco minim veniam est laboris aliquip consectetur ' +
      'voluptate.\n\nSunt anim aute culpa mollit culpa veniam eiusmod sunt ' +
      'proident. Ea pariatur esse occaecat aute exercitation quis ut quis ' +
      'ullamco nisi exercitation non commodo. Voluptate mollit consequat ' +
      'velit veniam eiusmod culpa proident occaecat. Labore exercitation ' +
      'enim culpa eu labore proident exercitation ex culpa Lorem deserunt ' +
      'nulla nostrud.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'exercitation', 'officia', 'veniam' ],
    requested: '2019-06-03T11:37:14Z',
    requester: 382347803272
  },
  {
    id: 20,
    subject: 'tempor magna anim ea id',
    description: 'Anim laborum deserunt cillum minim elit commodo sunt ullamco sint ' +
      'laborum exercitation sunt eiusmod commodo. Proident labore culpa anim ' +
      'elit culpa reprehenderit. Ullamco aute cillum dolor sit quis ullamco. ' +
      'Esse labore labore velit dolor. Velit voluptate proident amet ' +
      'incididunt cillum incididunt aliquip commodo quis officia.\n\nIrure non ' +
      'laborum in enim laborum dolore irure amet anim irure adipisicing. Ex ' +
      'culpa fugiat commodo quis sunt Lorem sit commodo ullamco pariatur sit ' +
      'proident. Enim esse voluptate labore consequat ipsum cupidatat elit ' +
      'anim nisi minim.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'id', 'laborum', 'reprehenderit' ],
    requested: '2019-06-03T11:37:14Z',
    requester: 382347803272
  },
  {
    id: 21,
    subject: 'exercitation sit incididunt magna laboris',
    description: 'Qui magna exercitation labore occaecat dolor duis officia pariatur ' +
      'do amet nulla laboris ex. Amet qui laboris esse non quis. Eu anim ' +
      'ex sunt ut. Veniam nulla amet ea pariatur consequat elit fugiat ' +
      'nulla minim voluptate tempor sunt et sit. Esse exercitation officia ' +
      'aliqua labore eiusmod. Cillum duis veniam voluptate elit quis sunt ' +
      'commodo sunt. Nulla consectetur id laboris aute laborum culpa ' +
      'exercitation sit commodo.\n\nIn officia pariatur anim in consequat ' +
      'ex. Do magna labore esse elit sit est excepteur aliquip est sint. ' +
      'Nulla aute aliquip officia cillum tempor incididunt voluptate ' +
      'proident mollit dolore ullamco. Deserunt adipisicing cillum in ea ' +
      'Lorem elit.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'non', 'proident', 'tempor' ],
    requested: '2019-06-03T11:37:14Z',
    requester: 382347803272
  },
  {
    id: 22,
    subject: 'laborum ea ut in cupidatat',
    description: 'Id commodo nisi velit irure et ad occaecat. Labore magna ex sint ut ' +
      'commodo ullamco et. Non aliqua aliquip et do irure. Consequat ' +
      'consectetur sit cupidatat est non laboris. Id pariatur ipsum aliqua sunt ' +
      'labore proident cillum occaecat mollit.\n\nNulla mollit anim ea culpa ' +
      'tempor id aliqua quis sit dolor esse ipsum. Adipisicing nisi irure ' +
      'mollit voluptate nisi ut laboris cillum velit qui. Incididunt excepteur ' +
      'sint magna eiusmod minim adipisicing consectetur consequat deserunt ' +
      'commodo et pariatur.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'commodo', 'exercitation', 'sunt' ],
    requested: '2019-06-03T11:37:15Z',
    requester: 382347803272
  },
  {
    id: 23,
    subject: 'est fugiat labore pariatur esse',
    description: 'Tempor id commodo ut eu. Ipsum ut velit deserunt ad minim ullamco ' +
      'aliquip eu eiusmod veniam. Elit nostrud Lorem aute nisi commodo in ' +
      'aliquip elit nisi ea. Magna mollit incididunt consequat elit proident ' +
      'adipisicing et anim enim. Sint ipsum ullamco duis tempor nostrud ' +
      'veniam. Anim quis irure ullamco reprehenderit nostrud id ' +
      'reprehenderit anim. Nulla id do ullamco nisi.\n\nCommodo laborum ' +
      'excepteur ad ut ipsum fugiat tempor nostrud officia. Consequat non ' +
      'adipisicing et anim dolore magna aliquip cillum Lorem. Pariatur ' +
      'veniam do esse magna excepteur ex officia quis sit amet ut in et ' +
      'amet. Ipsum est dolore do consectetur ut mollit proident sit aute ' +
      'labore veniam nulla velit anim.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'dolore', 'reprehenderit', 'veniam' ],
    requested: '2019-06-03T11:37:15Z',
    requester: 382347803272
  },
  {
    id: 24,
    subject: 'commodo sint laboris est et',
    description: 'Enim qui elit minim cillum qui nisi deserunt ex excepteur nulla ex ' +
      'sint ut adipisicing. Lorem labore nulla non id aliquip ex excepteur ' +
      'est excepteur. Eu reprehenderit culpa consequat voluptate ullamco aute ' +
      'consequat.\n\nReprehenderit laborum deserunt minim exercitation anim ' +
      'officia ullamco duis anim. Officia adipisicing cillum aliquip ' +
      'exercitation do. Deserunt velit aute excepteur sit elit consequat ' +
      'reprehenderit occaecat nostrud quis consectetur ut. Voluptate mollit ' +
      'reprehenderit veniam qui cillum duis commodo exercitation enim ' +
      'cupidatat sunt voluptate velit non. Id pariatur aliqua in ipsum anim ' +
      'culpa non consectetur occaecat ut. Ex ex adipisicing ut sint mollit ' +
      'nisi consequat aute excepteur.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'excepteur', 'sunt', 'ut' ],
    requested: '2019-06-03T11:37:15Z',
    requester: 382347803272
  },
  {
    id: 25,
    subject: 'laboris sint Lorem ex Lorem',
    description: 'Occaecat eu exercitation deserunt proident occaecat officia esse ' +
      'commodo aliqua pariatur dolor tempor sit. Nisi est eu excepteur ' +
      'ullamco in. Irure ut reprehenderit dolore tempor do laboris ' +
      'voluptate minim aliqua cupidatat.\n\nSint dolore veniam sit fugiat ' +
      'elit aute proident adipisicing laborum deserunt aliquip officia ' +
      'magna. Fugiat in nisi aliquip occaecat duis commodo id. Sit tempor ' +
      'voluptate ullamco labore nostrud enim enim tempor mollit ' +
      'reprehenderit tempor ea. Adipisicing ex ullamco nulla cillum ' +
      'excepteur incididunt aliquip mollit ullamco occaecat. In excepteur ' +
      'deserunt reprehenderit ut adipisicing ad. Adipisicing ea esse ' +
      'officia est. Cillum mollit dolore incididunt est qui adipisicing ea ' +
      'irure sint cillum nostrud ad.',
    status: 'open',
    type: null,
    priority: null,
    tags: [ 'commodo', 'duis', 'minim' ],
    requested: '2019-06-03T11:37:16Z',
    requester: 382347803272
  }
]

module.exports.mockFormattedTickets = mockFormattedTickets;