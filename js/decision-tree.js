(function () {

  var yesItems;

  // First
  window.DTree = [
    "How far away do you want to be from your opponent?",
    ["Right in their face", [
      "How do you want to get that close?",
      ["Be fast", [
        "Are you an air fighter?",
        ["I ain't no air fighter", ["END", "little_mac"]],
        ["Yes", [
          "If you get a cool combo, will you post it on twitter?",
          ["In a hearbeat", [
            "Do you want to be hit by cool combos?",
            ["Not a lot", [
              "Did you ever grow out of your Naruto run phase?",
              ["No", ["END", "greninja"]],
              ["Kinda?", ["END", "meta_knight"]],
            ]],
            ["Equivalent Exchange, baby", [
              "Thoughts on slow motion?",
              ["Yes", ["END", "roy"]],
              ["Double Yes", ["END", "captain_falcon"]],
            ]],
          ]],
          ["It's fine", [
            "Do you like to do damage?",
            ["If they're getting hit that means I'm winning right?", [
              "How many levels of irony are you on?",
              ["I'm pretty earnest", ["END", "sheik"]],
              ["S U C C", ["END", "mii_fighter", "(brawler)"]],
            ]],
            ["A decent amount", [
              "Frame 1 jab?",
              ["Back in my day I had frame 1 damage options", ["END", "fox"]],
              ["Frame 1 jab!", ["END", "zero_suit_samus"]],
            ]],
            ["Way too much", [
              "Do you want a gimmick to boost damage?",
              ["Why not?", ["END", "inkling"]],
              ["Just give me the damage", ["END", "yoshi"]],
            ]],
          ]],
        ]],
      ]],
      ["Pray", [
        "How hard do you want to combo people?",
        ["What's a combo?", [
          "How often do you want to taunt?",
          ["After every kill", ["END", "ganondorf"]],
          ["After every hit", ["END", "incineroar"]],
        ]],
        ["I want to kill off a high % grab", ["END", "donkey_kong"]],
        ["I don't want them to touch the ground", [
          "How much free time do you have?",
          ["A lot", ["END", "ryu", "ken"]],
          ["Some", [
            "Do you secretly wish you had falcon punch?",
            ["Yes", ["END", "kirby"]],
            ["No (LIE)", ["END", "luigi"]],
          ]]
        ]]
      ]],
    ]],
    ["Anywhere I'm not being hit", [
      "Do you want to kill easily?",
      ["Give me blood", [
        "Do you want to kill easy and quickly?",
        ["Even if it kills me", ["END", "kigglypuff"]],
        ["I'll wait", ["END", "wario"]],
      ]],
      ["Just keep me safe", [
        "Do you like moving?",
        ["Always", ["END", "sonic"]],
        ["Never", ["END", "rosalina"]],
      ]],
    ]],
    ["Far enough so I can hit them first", [
      "Do you want to be fast?",
      ["I'm good", [
        "Do you watch anime?",
        ["I own Sword Art Online merchandise", ["END", "corrin"]],
        ["Sometimes", [
          "How long do you want to survive?",
          ["If I die I uninstall", [
            "Do you quote memes in public?",
            ["A whole lot", ["END", "king_dedede"]],
            ["Sometimes", ["END", "shulk"]],
          ]],
          ["Fairly long hopefully", [
            "Thoughts on killing?",
            ["Every move should kill", ["END", "ike"]],
            ["I can be patient", ["END", "mii_fighter", "(swordfighter)"]],
            ["I'm a pacifist", ["END", "pit", "dark_pit"]],
          ]],
          ["Just kill them first", ["END", "bayonetta"]],
        ]],
        ["Never", [
          "Do you want a gun?",
          ["Pew Pew", ["END", "samus", "dark_samus"]],
          ["Pew Pew Pew Pew Pew", ["END", "mega_man"]],
          ["Nah", ["END", "mr_game_and_watch"]],
        ]],
      ]],
      ["Who doesn't?", [
        "Do you mind getting edgeguarded?",
        ["I'd rather not", [
          "Do you mind dying at 50%?",
          ["Life is fleeting. Victory is eternal.", ["END", "mewtwo"]],
          ["I think I'll pass", [
            "What about being comboed or camped out?",
            ["Everyone has a weakness", ["END", "ridley"]],
            ["Actually I don't want a weakness", ["END", "palutena"]],
          ]]
        ]],
        ["You really think someone would do that?", [
          "Do you want to think?",
          ["Dost thou taketh me for a simpleton?", ["END", "marth"]],
          ["Do I look like a nerd?", [
            "Thoughts on camping?",
            ["Impossible", [
              "Why not?",
              ["Camping is Boring and Stupid", [
                "END",
                "chrom",
                ["I'm a lesbian", ["END", "lucina"]]
              ]],
              ["I cannot contain my thirst for blood", ["END", "bowser"]],
            ]],
            ["I'm fine with it", ["END", "cloud"]],
          ]]
        ]],
      ]],
    ]],
    ["Far enough so they can't reach me", [
      "What if they get close to you?",
      ["Push them back", [
        "Do you like weird gimmicks?",
        ["Yes", [
          "Do you like to solve math problems?"
          ["Not much", ["END", "olimar"]],
          ["5 times 5 is 25", ["END", "robin"]],
        ]],
        ["I want to be normal", [
          "Do you like using items?",
          ["Yes", yesItems = [
            "Do you mind getting comboed?",
            ["Touch me and you explode", ["END", "snake"]],
            ["Whatever happens, happens", ["END", "rob"]],
            ["No thanks",
              "Do you want your opponents to die?",
              ["At some point", ["END", "link"]],
              ["I'm happy to wait", ["END", "young_link"]],
              ["I can't decide", ["END", "toon_link"]],
            ],
          ]],
          ["Not really", [
            "Sometimes in life we have to make compromises",
            ["Ok", yesItems],
          ]],
        ]],
      ]],
      ["Hope the won't", [
        "But you do want some close range moves, right?",
        [`"Close Range" in the loosest possible sense`, ["END", "simon", "rictor"]],
        ["As a last resort", [
          "How do you want to get kills?",
          ["While looking cool", ["END", "zelda"]],
          ["Offstage", [
            "How important is being cute?",
            ["Not much", ["END", "wii_fit_trainer"]],
            ["Somewhat", ["END", "villager"]],
            ["Incredibly", ["isabelle"]],
          ]],
        ]],
        ["Who says I have to?", [
          "Do you want to lab out ridiculous kill setups?",
          ["Not often", ["END", "mii_fighter", "(gunner)"]],
          ["3 hours a day", [
            "Do you want to grab people?",
            ["Occasionally", ["END", "duck_hunt"]],
            ["Never", ["END", "Pac-Man"]],
          ]],
        ]],
      ]],
    ]],
    ["Whatever I feel like at the moment", [
      "How indecisive are you?",
      ["Fairly", [
        "Do you like practicing ridiculously difficult combos?",
        ["Of course", [
          "Do you like weird unpredictable glitches?",
          ["No", [
            "Do you sometimes like landing those ridiculous combos?",
            ["Why not?", [
              "END",
              "pikachu",
              ["I want to play a low tier without actually playing a low tier", ["END", "pichu"]]
            ]],
            ["All combos must be true", ["END", "peach", "daisy"]],
          ]],
          ["Watching the game break gives me life", ["END", "ice_climbers"]],
        ]],
        ["Nah I'm good", [
          "How much do you want your opponent to hate you?",
          ["I want to make friends", [
            "Are you fine with those frieds being furries?",
            ["Not cool", [
              "Thoughts on grab combos?",
              ["They're pretty fun", ["END", "mario", "dr_mario"]],
              ["Who needs those?", ["END", "lucas"]],
              ["Why grab-combo when you can kill-throw?", ["END", "ness"]],
            ]],
            ["SonicFox made it cool", ["END", "wolf"]],
          ]],
          ["It would be nice if they cry", [
            "What do you think is the best way to piss people off?",
            ["Trip them if they do anything", ["END", "diddy_kong"]],
            ["Ignore every singe hit", ["END", "king_k_rool"]],
            ["Rage but more", ["END", "lucario"]],
          ]],
        ]],
      ]],
      ["It takes me an hour to decide which cereal I want", [
        "END",
        "pokemon_trainer",
        // ["That wasn't a joke", ["END", "random"]]
      ]],
    ]],
  ]

})()
