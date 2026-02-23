const wordList = [
    // ── Music ─────────────────────────────────────────────────────────────
    {
        word: "guitar",
        hint: "A musical instrument with strings, played by strumming or plucking.",
        hintTa: "நரம்புகளால் இசைக்கப்படும் ஒரு இசைக்கருவி."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
        hintTa: "விசைகளை அழுத்துவதன் மூலம் நரம்புகளை தட்டி இசைக்கும் கருவி."
    },
    {
        word: "violin",
        hint: "A bowed string instrument with four strings, smallest in the violin family.",
        hintTa: "வில்லால் இசைக்கப்படும் நான்கு நரம்புகள் கொண்ட சிறிய இசைக்கருவி."
    },
    {
        word: "trumpet",
        hint: "A brass wind instrument with a flared bell, played by buzzing lips.",
        hintTa: "உதட்டால் ஊதி இசைக்கும் ஒரு வெண்கல காற்று இசைக்கருவி."
    },
    {
        word: "flute",
        hint: "A woodwind instrument played by blowing across a hole near one end.",
        hintTa: "ஒரு துளையில் ஊதி இசைக்கும் மரக்காற்று இசைக்கருவி."
    },
    {
        word: "drums",
        hint: "A percussion instrument played by striking with sticks or hands.",
        hintTa: "குச்சிகள் அல்லது கைகளால் தட்டி இசைக்கும் தாள இசைக்கருவி."
    },
    {
        word: "melody",
        hint: "A sequence of musical notes that forms a recognizable tune.",
        hintTa: "இசை குறிப்புகளின் தொடர்; ஒரு அழகான ஈர்க்கும் இசை வரிசை."
    },
    {
        word: "rhythm",
        hint: "A strong, regular repeated pattern of sound or movement in music.",
        hintTa: "இசையில் ஒழுங்கான மீண்டும் மீண்டும் வரும் ஒலி அலை அமைப்பு."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements.",
        hintTa: "நுட்பமான மற்றும் கம்பீரமான அசைவுகளால் கூடிய கிளாசிக்கல் நடன வடிவம்."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments together.",
        hintTa: "பல்வேறு இசைக்கருவிகளை வாசிக்கும் பெரிய இசைக் குழு."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements.",
        hintTa: "முழு இசைக்குழுவுக்காக எழுதப்பட்ட நீண்ட இசை நூல்."
    },
    {
        word: "jazz",
        hint: "A music genre characterized by improvisation, swing rhythms, and syncopation.",
        hintTa: "கூத்துக் கட்டுப்பாடு இல்லாத தனிப்பட்ட இசை கலைஞர்களால் உருவாக்கப்பட்ட இசை வகை."
    },

    // ── Science & Nature ──────────────────────────────────────────────────
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for breathing and life.",
        hintTa: "மணமற்ற, நிறமற்ற, உயிர்வாழ அவசியமான வாயு."
    },
    {
        word: "gravity",
        hint: "The natural force that pulls objects toward the center of the Earth.",
        hintTa: "பொருட்களை பூமியின் மையத்தை நோக்கி இழுக்கும் இயற்கை சக்தி."
    },
    {
        word: "volcano",
        hint: "A mountain with a vent through which lava, gas, and ash are ejected.",
        hintTa: "எரிமலை: குழம்பு, வாயு மற்றும் சாம்பல் வெளியேறும் மலை."
    },
    {
        word: "earthquake",
        hint: "A sudden violent shaking of the ground caused by tectonic plate movement.",
        hintTa: "தட்டோலை அசைவால் ஏற்படும் திடீர் நில அதிர்வு."
    },
    {
        word: "tornado",
        hint: "A rapidly rotating column of air extending from a thunderstorm to the ground.",
        hintTa: "புயலிலிருந்து தரை வரை நீண்டு வரும் சுழலும் காற்று நெடுவரிசை."
    },
    {
        word: "lightning",
        hint: "A natural electrostatic discharge that flashes during a thunderstorm.",
        hintTa: "மழைப் புயலின் போது தோன்றும் இயற்கையான மின்னல் வெளியேற்றம்."
    },
    {
        word: "photosynthesis",
        hint: "The process plants use to convert sunlight, CO₂, and water into food.",
        hintTa: "தாவரங்கள் சூரிய ஒளியை பயன்படுத்தி உணவை தயாரிக்கும் செயல்முறை."
    },
    {
        word: "evolution",
        hint: "The process by which species change gradually over many generations.",
        hintTa: "உயிரினங்கள் பல தலைமுறைகளில் படிப்படியாக மாறும் செயல்முறை."
    },
    {
        word: "nucleus",
        hint: "The central part of an atom, containing protons and neutrons.",
        hintTa: "அணுவின் மையப் பகுதி; புரோட்டான்கள் மற்றும் நியூட்ரான்களைக் கொண்டது."
    },
    {
        word: "molecule",
        hint: "The smallest unit of a chemical compound, made of two or more atoms bonded together.",
        hintTa: "இரண்டு அல்லது அதிக அணுக்கள் இணைந்து உருவாகும் வேதியியல் கலவையின் சிறிய அலகு."
    },
    {
        word: "ecosystem",
        hint: "A community of organisms interacting with each other and the environment.",
        hintTa: "உயிரினங்களும் சுற்றுச்சூழலும் தொடர்பு கொள்ளும் ஒரு உயிரியல் சமுதாயம்."
    },
    {
        word: "bacteria",
        hint: "Microscopic single-celled organisms found virtually everywhere on Earth.",
        hintTa: "பூமியில் எங்கும் காணப்படும் நுண்ணிய ஒற்றை செல் உயிரினங்கள்."
    },
    {
        word: "hibernate",
        hint: "A state of inactivity and reduced metabolism during cold months, common in bears.",
        hintTa: "குளிர்காலத்தில் உறக்க நிலையில் கழிக்கும் விலங்குகளின் நடத்தை (கரடிகளில் பொதுவானது)."
    },

    // ── Space & Astronomy ─────────────────────────────────────────────────
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity.",
        hintTa: "ஈர்ப்பு விசையால் ஒன்றாக தொகுக்கப்பட்ட பிரபஞ்சத்தில் உள்ள பெரிய நட்சத்திர அமைப்பு."
    },
    {
        word: "universe",
        hint: "All of space, time, matter, and energy that exists.",
        hintTa: "இருக்கும் அனைத்து வெளி, நேரம், பொருள் மற்றும் ஆற்றலை உள்ளடக்கிய மொத்த பிரபஞ்சம்."
    },
    {
        word: "asteroid",
        hint: "A small rocky body that orbits the Sun, mostly found in the asteroid belt.",
        hintTa: "சூரியனை சுற்றி வரும் சிறிய கல் உடல்; பெரும்பாலும் சிறுகோள் பட்டையில் காணப்படும்."
    },
    {
        word: "nebula",
        hint: "A vast cloud of gas and dust in space, often where new stars are born.",
        hintTa: "விண்வெளியில் உள்ள வாயு மற்றும் தூசியின் பேரளவு மேகம்; புதிய நட்சத்திரங்கள் பிறக்கும் இடம்."
    },
    {
        word: "comet",
        hint: "An icy space object that develops a glowing tail when near the Sun.",
        hintTa: "சூரியனை நெருங்கும்போது ஒளிரும் வால் உருவாக்கும் பனி விண்வெளி பொருள்."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to observe distant stars and galaxies.",
        hintTa: "தொலைதூர நட்சத்திரங்கள் மற்றும் விண்மீன் திரள்களை பார்க்கும் கருவி."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in outer space.",
        hintTa: "வெளி விண்வெளியில் பயணிக்கவும் பணிபுரியவும் பயிற்சி பெற்ற நபர்."
    },
    {
        word: "supernova",
        hint: "A powerful stellar explosion that briefly outshines an entire galaxy.",
        hintTa: "ஒரு நட்சத்திரத்தின் பேரளவு வெடிப்பு; சுருகிய நேரத்தில் முழு விண்மீன் திரளையும் விட பிரகாசமாக ஒளிரும்."
    },
    {
        word: "blackhole",
        hint: "A region in space where gravity is so strong that even light cannot escape.",
        hintTa: "விண்வெளியில் ஈர்ப்பு மிகவும் வலிமையான இடம்; ஒளி கூட தப்பிக்க முடியாது."
    },
    {
        word: "planet",
        hint: "A large celestial body that orbits a star and does not produce its own light.",
        hintTa: "ஒரு நட்சத்திரத்தை சுற்றி வரும் பெரிய வான்பொருள்; சொந்த ஒளி இல்லாதது."
    },
    {
        word: "moonlight",
        hint: "The light reflected by the Moon onto the Earth from the Sun.",
        hintTa: "சூரியனிடமிருந்து சந்திரன் பூமியின் மீது பிரதிபலிக்கும் ஒளி; நிலவொளி."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects, space, and the universe.",
        hintTa: "வான்பொருட்கள், விண்வெளி மற்றும் பிரபஞ்சத்தை ஆய்வு செய்யும் அறிவியல் துறை."
    },

    // ── Geography ─────────────────────────────────────────────────────────
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface rising high above surrounding land.",
        hintTa: "பூமியின் மேற்பரப்பில் உயர்ந்து நிற்கும் பெரிய இயற்கை நிலத்தோற்றம்; மலை."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height, often over a rock or cliff.",
        hintTa: "நீர் உயர இடத்திலிருந்து கீழே விழும் இயற்கை நீர்வீழ்ச்சி."
    },
    {
        word: "rainforest",
        hint: "A dense tropical forest with very high annual rainfall and immense biodiversity.",
        hintTa: "அதிக மழைப்பொழிவு மற்றும் பன்முக உயிரினங்களைக் கொண்ட அடர்ந்த வெப்பமண்டல காடு."
    },
    {
        word: "desert",
        hint: "A barren, arid land that receives very little or no rainfall.",
        hintTa: "மிகக் குறைவான அல்லது மழையே இல்லாத வறண்ட நிலப்பரப்பு; பாலைவனம்."
    },
    {
        word: "glacier",
        hint: "A large, slowly moving mass of ice formed from compacted snow over many years.",
        hintTa: "பல ஆண்டுகளாக சேர்ந்த பனியிலிருந்து உருவாகும் மெதுவாக நகரும் பெரிய பனிப்பாறை."
    },
    {
        word: "peninsula",
        hint: "A piece of land almost entirely surrounded by water but connected to mainland.",
        hintTa: "மூன்று பக்கங்களும் நீரால் சூழப்பட்டு ஒரு பக்கம் நிலத்துடன் இணைந்த நிலப்பிரிவு; தீபகற்பம்."
    },
    {
        word: "archipelago",
        hint: "A group or chain of islands scattered in a sea or ocean.",
        hintTa: "கடலில் சிதறிக் கிடக்கும் தீவுகளின் குழு அல்லது சங்கிலி."
    },
    {
        word: "river",
        hint: "A large natural stream of water that flows into the sea, a lake, or another river.",
        hintTa: "கடல், ஏரி அல்லது மற்றொரு நதியில் கலக்கும் இயற்கையான நீர் ஓடை; நதி."
    },
    {
        word: "valley",
        hint: "A low-lying area of land between hills or mountains, often with a river.",
        hintTa: "மலைகள் அல்லது குன்றுகளுக்கிடையில் உள்ள தாழ்வான நிலப்பரப்பு; பள்ளத்தாக்கு."
    },
    {
        word: "oasis",
        hint: "A fertile green spot in a desert where underground water is found.",
        hintTa: "பாலைவனத்தில் நீர் கிடைக்கும் பசுமையான வளமான இடம்."
    },
    {
        word: "tsunami",
        hint: "A series of large ocean waves caused by an undersea earthquake or explosion.",
        hintTa: "கடலடி நிலநடுக்கம் அல்லது வெடிப்பால் ஏற்படும் பெரிய கடல் அலை; சுனாமி."
    },

    // ── Art & Culture ─────────────────────────────────────────────────────
    {
        word: "painting",
        hint: "An art form where colors are applied on a surface to create images.",
        hintTa: "ஒரு மேற்பரப்பில் வண்ணங்களை தடவி படங்கள் உருவாக்கும் கலை வடிவம்; ஓவியம்."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional work of art created by carving or shaping materials.",
        hintTa: "மண், கல் அல்லது உலோகத்தை வடிவமைத்து உருவாக்கும் முப்பரிமாண கலை; சிற்பம்."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings and structures.",
        hintTa: "கட்டிடங்களை வடிவமைக்கும் மற்றும் கட்டும் கலை மற்றும் அறிவியல்; கட்டடக்கலை."
    },
    {
        word: "photography",
        hint: "The art of capturing images by recording light with a camera.",
        hintTa: "ஒளியை பதிவு செய்து படங்கள் எடுக்கும் கலை; புகைப்படக்கலை."
    },
    {
        word: "theater",
        hint: "A place or medium where plays, drama, and performances are staged.",
        hintTa: "நாடகங்கள் மற்றும் நிகழ்ச்சிகள் நடக்கும் இடம் அல்லது ஊடகம்; அரங்கம்."
    },
    {
        word: "museum",
        hint: "A building exhibiting objects of historical, scientific, or artistic importance.",
        hintTa: "வரலாற்று, அறிவியல் அல்லது கலை முக்கியத்துவம் வாய்ந்த பொருட்களை காட்டும் கட்டிடம்; அருங்காட்சியகம்."
    },
    {
        word: "festival",
        hint: "A special celebration with cultural or religious significance, often held annually.",
        hintTa: "கலாச்சார அல்லது மத முக்கியத்துவம் வாய்ந்த சிறப்பு கொண்டாட்டம்; திருவிழா."
    },
    {
        word: "heritage",
        hint: "Cultural traditions and values passed down from previous generations.",
        hintTa: "முன்பு தலைமுறைகளிலிருந்து கடந்து வந்த கலாச்சார மரபுகள் மற்றும் மதிப்புகள்."
    },

    // ── Technology ────────────────────────────────────────────────────────
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical, real-world purposes.",
        hintTa: "நடைமுறை குறிக்கோள்களுக்கு அறிவியல் அறிவைப் பயன்படுத்துதல்; தொழில்நுட்பம்."
    },
    {
        word: "internet",
        hint: "A global network connecting billions of computers and devices worldwide.",
        hintTa: "உலகம் முழுவதும் கோடிக்கணக்கான கணினிகளை இணைக்கும் உலகளாவிய வலைப்பின்னல்; இணையம்."
    },
    {
        word: "algorithm",
        hint: "A step-by-step set of instructions for solving a problem or completing a task.",
        hintTa: "ஒரு சிக்கலை தீர்க்க அல்லது பணியை முடிக்க படிப்படியான வழிமுறை."
    },
    {
        word: "software",
        hint: "Programs and operating information that tell a computer what to do.",
        hintTa: "கணினியை இயக்கவும் பணிகளை செய்யவும் உதவும் நிரல்கள்; மென்பொருள்."
    },
    {
        word: "database",
        hint: "An organized collection of structured information stored and accessed electronically.",
        hintTa: "மின்னணு முறையில் சேமிக்கப்பட்ட ஒழுங்கமைக்கப்பட்ட தரவுகளின் தொகுப்பு."
    },
    {
        word: "encryption",
        hint: "The process of converting data into a coded form to prevent unauthorized access.",
        hintTa: "தரவை குறியாக்கப்பட்ட வடிவமாக மாற்றி அங்கீகரிக்கப்படாத அணுகலை தடுக்கும் செயல்முறை."
    },
    {
        word: "keyboard",
        hint: "An input device with keys used to type text and commands into a computer.",
        hintTa: "கணினியில் எழுத்துக்கள் மற்றும் கட்டளைகளை தட்டச்சு செய்ய பயன்படும் உள்ளீட்டு சாதனம்."
    },
    {
        word: "camera",
        hint: "A device used to capture and record still images or video.",
        hintTa: "நிலையான படங்கள் அல்லது வீடியோவை படிமங்களாக பதிவு செய்யும் சாதனம்; கேமரா."
    },
    {
        word: "telephone",
        hint: "A device that transmits spoken sound over long distances using electrical signals.",
        hintTa: "மின் சமிக்ஞைகள் மூலம் தொலைதூரத்தில் குரல் அனுப்பும் சாதனம்; தொலைபேசி."
    },

    // ── Food & Drinks ─────────────────────────────────────────────────────
    {
        word: "chocolate",
        hint: "A sweet treat made from roasted and ground cacao seeds.",
        hintTa: "வறுத்த கேக்கோ விதைகளிலிருந்து தயாரிக்கப்படும் இனிப்பு உணவு; சாக்லேட்."
    },
    {
        word: "pizza",
        hint: "An Italian savory dish with a round flat dough base covered with toppings.",
        hintTa: "இத்தாலிய வகை வட்டமான மாவு தளத்தில் சேர்க்கைகளுடன் தயாரிக்கும் சுவையான உணவு."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated drink brewed from roasted coffee beans.",
        hintTa: "வறுத்த காபி விதைகளிலிருந்து காய்ச்சப்படும் காஃபின் நிறைந்த பிரபலமான பானம்."
    },
    {
        word: "mango",
        hint: "A juicy tropical fruit with yellow-orange flesh, called the 'king of fruits'.",
        hintTa: "பழங்களின் ராஜா என அழைக்கப்படும் மஞ்சள்-ஆரஞ்சு சதை கொண்ட சாறு நிறைந்த வெப்பமண்டல பழம்; மாம்பழம்."
    },
    {
        word: "biryani",
        hint: "A fragrant mixed rice dish from the Indian subcontinent made with spices and meat.",
        hintTa: "இந்திய துணைக்கண்டத்தில் தோன்றிய, மசாலா மற்றும் இறைச்சியுடன் சமைக்கப்படும் வாசனையான கலந்த சோறு."
    },
    {
        word: "lemonade",
        hint: "A cold sweet drink made with lemon juice, water, and sugar.",
        hintTa: "எலுமிச்சை சாறு, நீர் மற்றும் சர்க்கரையால் தயாரிக்கப்படும் குளிர் இனிப்பு பானம்."
    },
    {
        word: "cinnamon",
        hint: "A warm spice from tree bark, widely used in baking and cooking.",
        hintTa: "மரத்தின் உரியிலிருந்து பெறப்படும் வெப்பமான மசாலா; சமையல் மற்றும் பேக்கிங்கில் பரவலாக பயன்படுகிறது."
    },
    {
        word: "saffron",
        hint: "The world's most expensive spice, derived from the Crocus flower.",
        hintTa: "உலகிலேயே மிக விலையுயர்ந்த மசாலா; குங்குமப்பூ செடியிலிருந்து பெறப்படுகிறது."
    },

    // ── Animals ───────────────────────────────────────────────────────────
    {
        word: "butterfly",
        hint: "A colorful insect that transforms from a caterpillar through metamorphosis.",
        hintTa: "கொழு கொழு புழுவிலிருந்து உருமாற்றம் அடையும் வண்ணமயமான பூச்சி; வண்ணாத்திப்பூச்சி."
    },
    {
        word: "dolphin",
        hint: "A highly intelligent marine mammal known for its friendly behavior and echolocation.",
        hintTa: "நட்புணர்வு மற்றும் எதிரொலி கண்டறிதலுக்கு பெயர் பெற்ற அறிவுக்கூர்மையான கடல் பாலூட்டி; டால்பின்."
    },
    {
        word: "elephant",
        hint: "The largest land animal on Earth, with a trunk, large ears, and long tusks.",
        hintTa: "பூமியில் உள்ள மிகப்பெரிய நில விலங்கு; தும்பிக்கை, பெரிய காதுகள் மற்றும் தந்தங்களை கொண்டது; யானை."
    },
    {
        word: "cheetah",
        hint: "The fastest land animal, capable of speeds up to 70 mph.",
        hintTa: "மணிக்கு 112 கி.மீ வரை ஓடக்கூடிய பூமியிலேயே வேகமான நிலப் விலங்கு; சீட்டா."
    },
    {
        word: "penguin",
        hint: "A flightless seabird of the Southern Hemisphere, recognized by its black-white markings.",
        hintTa: "தென் அரைக்கோளத்தில் வாழும் பறக்க முடியாத கடல் பறவை; கருப்பு-வெள்ளை தோற்றம்; பென்குயின்."
    },
    {
        word: "crocodile",
        hint: "A large semi-aquatic reptile with powerful jaws found in tropical regions.",
        hintTa: "வெப்பமண்டல பகுதிகளில் காணப்படும் சக்திவாய்ந்த தாடை கொண்ட பெரிய ஊர்வன; முதலை."
    },
    {
        word: "chameleon",
        hint: "A lizard famous for changing its skin color to blend with surroundings.",
        hintTa: "சுற்றுச்சூழலுடன் கலக்க தோலின் நிறத்தை மாற்றும் பல்லி வகை; பச்சோந்தி."
    },
    {
        word: "porcupine",
        hint: "A rodent covered in sharp hollow quills used for self-defense.",
        hintTa: "பாதுகாப்புக்காக கூர்மையான முட்களால் மூடப்பட்ட கொறிக்கும் விலங்கு; முள்ளம்பன்றி."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large bright-yellow flower head that follows the Sun.",
        hintTa: "சூரியனை நோக்கி திரும்பும் பெரிய மஞ்சள் மலர் தலை கொண்ட உயரமான தாவரம்; சூரியகாந்தி."
    },

    // ── Sports ────────────────────────────────────────────────────────────
    {
        word: "football",
        hint: "A team sport where players kick a spherical ball to score goals.",
        hintTa: "இரு அணிகளும் கோலிட வட்ட பந்தை உதைத்து விளையாடும் விளையாட்டு; கால்பந்து."
    },
    {
        word: "cricket",
        hint: "A bat-and-ball sport played between two teams of eleven on an oval field.",
        hintTa: "பதினொரு வீரர்கள் கொண்ட இரு அணிகள் ஓவல் மைதானத்தில் விளையாடும் பந்து-மட்டை விளையாட்டு; கிரிக்கெட்."
    },
    {
        word: "badminton",
        hint: "A racquet sport played with a shuttlecock over a net, popular across Asia.",
        hintTa: "வலையின் குறுக்கே கோழி ஈர்ப்பியை வீசி விளையாடும் ராக்கெட் விளையாட்டு; பேட்மிண்டன்."
    },
    {
        word: "swimming",
        hint: "The sport of propelling the body through water using arms and legs.",
        hintTa: "கைகள் மற்றும் கால்களால் உடலை நீரில் நகர்த்தி செல்லும் விளையாட்டு; நீச்சல்."
    },
    {
        word: "marathon",
        hint: "A long-distance running race of 42.195 km (26.2 miles).",
        hintTa: "42.195 கி.மீ. தூரம் ஓடும் நீண்ட தூர ஓட்டப் பந்தயம்; மாரத்தான்."
    },
    {
        word: "gymnastics",
        hint: "A sport involving balance, strength, flexibility, and coordinated body movements.",
        hintTa: "சமநிலை, வலிமை, நெகிழ்வுத்தன்மை மற்றும் ஒருங்கிணைந்த உடல் அசைவுகளை உள்ளடக்கிய விளையாட்டு."
    },
    {
        word: "archery",
        hint: "The sport or practice of shooting arrows at a target using a bow.",
        hintTa: "வில் கொண்டு இலக்கை நோக்கி அம்புகளை எய்யும் விளையாட்டு; வில்வித்தை."
    },

    // ── History & Society ─────────────────────────────────────────────────
    {
        word: "history",
        hint: "The study of past human events, civilizations, and developments.",
        hintTa: "கடந்த கால மனித நிகழ்வுகள், நாகரிகங்கள் மற்றும் வளர்ச்சியை ஆய்வு செய்யும் துறை; வரலாறு."
    },
    {
        word: "democracy",
        hint: "A system of government where power is held by the people through free elections.",
        hintTa: "சுதந்திர தேர்தல்கள் மூலம் மக்களால் அதிகாரம் கொண்டிருக்கும் ஆட்சி முறை; மக்களாட்சி."
    },
    {
        word: "revolution",
        hint: "A dramatic change in political power or social conditions often achieved by force.",
        hintTa: "அரசியல் அதிகாரம் அல்லது சமூக நிலைமைகளில் மிகப் பெரிய மாற்றம்; புரட்சி."
    },
    {
        word: "civilization",
        hint: "An advanced stage of human society with culture, cities, and organized systems.",
        hintTa: "கலாச்சாரம், நகரங்கள் மற்றும் ஒழுங்கமைக்கப்பட்ட அமைப்புகளுடன் கூடிய மேம்பட்ட மனித சமுதாயம்."
    },
    {
        word: "parliament",
        hint: "The supreme legislative body that makes laws in many countries.",
        hintTa: "பல நாடுகளில் சட்டங்களை இயற்றும் உச்ச சட்டமன்ற அமைப்பு; நாடாளுமன்றம்."
    },

    // ── Everyday & Vocabulary ─────────────────────────────────────────────
    {
        word: "bicycle",
        hint: "A two-wheeled, pedal-powered vehicle for personal transport.",
        hintTa: "கால்களால் மிதித்து இயக்கும் இரண்டு சக்கரங்கள் கொண்ட வாகனம்; மிதிவண்டி."
    },
    {
        word: "vacation",
        hint: "A period of time taken off work for rest, travel, and relaxation.",
        hintTa: "ஓய்வு, பயணம் மற்றும் மகிழ்ச்சிக்காக வேலையிலிருந்து விலகும் நேரம்; விடுமுறை."
    },
    {
        word: "diamond",
        hint: "The hardest natural mineral on Earth, a sparkling precious gemstone.",
        hintTa: "பூமியில் உள்ள மிகவும் கடினமான இயற்கை கனிமம்; மதிப்பு வாய்ந்த விலைமதிப்பற்ற கல்; வைரம்."
    },
    {
        word: "rainbow",
        hint: "A colorful arc in the sky formed by reflection and refraction of sunlight through rain.",
        hintTa: "மழைத்துளிகள் வழியாக சூரிய ஒளி பட்டு உருவாகும் வண்ணமயமான வானவில்."
    },
    {
        word: "sunset",
        hint: "The daily event when the Sun disappears below the western horizon.",
        hintTa: "தினமும் மேற்கு அடிவானத்தில் சூரியன் மறையும் நேர தோற்றம்; சூரிய அஸ்தமனம்."
    },
    {
        word: "language",
        hint: "A structured system of communication using words, grammar, and signs.",
        hintTa: "வார்த்தைகள், இலக்கணம் மற்றும் குறியீடுகளால் ஆன தொடர்பு அமைப்பு; மொழி."
    },
    {
        word: "breeze",
        hint: "A gentle, light, and refreshing wind.",
        hintTa: "இதமான, லேசான மற்றும் புத்துணர்வூட்டும் காற்று; தென்றல்."
    },
    {
        word: "safari",
        hint: "An overland trip to observe and photograph wildlife in their natural habitat.",
        hintTa: "விலங்குகளை அவற்றின் இயற்கை வாழிடத்தில் கண்டு ரசிக்கும் பயணம்; சஃபாரி."
    },
    {
        word: "novel",
        hint: "A long, fictional prose story with a complex plot and developed characters.",
        hintTa: "சிக்கலான கதை மற்றும் ஆழமான பாத்திரங்களை கொண்ட நீண்ட கட்டுக்கதை; நாவல்."
    },
    {
        word: "science",
        hint: "The systematic study of the physical and natural world through observation and experiment.",
        hintTa: "கவனிப்பு மற்றும் சோதனை மூலம் இயற்கை மற்றும் உடல் உலகை ஆய்வு செய்யும் முறை; அறிவியல்."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body, usually performed in time to music.",
        hintTa: "இசைக்கு ஏற்ப உடலை தாளமாக அசைக்கும் கலை; நடனம்."
    },
    {
        word: "adventure",
        hint: "An exciting, daring, and unusual experience often involving risk.",
        hintTa: "ஆபத்தும் உற்சாகமும் கலந்த அசாதாரண அனுபவம்; சாகசம்."
    },
    {
        word: "freedom",
        hint: "The power to act, speak, or think as one wishes without restraint.",
        hintTa: "தடையின்றி செயல்பட, பேச அல்லது நினைக்கும் உரிமை; சுதந்திரம்."
    },
    {
        word: "courage",
        hint: "The ability to face fear, danger, or difficulty with bravery and determination.",
        hintTa: "பயம், ஆபத்து அல்லது சிரமத்தை தைரியமாக எதிர்கொள்ளும் ஆற்றல்; தைரியம்."
    },
    {
        word: "wisdom",
        hint: "The quality of having good judgment gained through knowledge and experience.",
        hintTa: "அறிவும் அனுபவமும் சேர்ந்து தரும் நல்ல நிதானமான சிந்தனை; ஞானம்."
    },
    {
        word: "patience",
        hint: "The ability to wait calmly or tolerate delays and problems without getting upset.",
        hintTa: "தாமதங்கள் மற்றும் சிக்கல்களை கோபமில்லாமல் அமைதியாக தாங்கும் ஆற்றல்; பொறுமை."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing for past times, places, or experiences.",
        hintTa: "கடந்த காலத்தை நினைத்து ஏங்கும் உணர்வு; இறந்த காலத்தின் மீதான கவலையான ஆசை."
    },
    {
        word: "curiosity",
        hint: "A strong desire to learn or know something new or unusual.",
        hintTa: "புதிய அல்லது அசாதாரண ஒன்றை தெரிந்துகொள்ள விரும்பும் உத்வேகம்; ஆர்வம்."
    },
    {
        word: "illusion",
        hint: "A false impression that deceives the eyes or the mind.",
        hintTa: "கண்களையோ மனதையோ ஏமாற்றும் பொய்யான தோற்றம்; மாயை."
    },
    {
        word: "paradox",
        hint: "A statement that seems to contradict itself but may still be true.",
        hintTa: "தன்னையே முரண்படுத்துவது போல் தோன்றும் ஆனால் உண்மையாக இருக்கக்கூடிய கூற்று."
    },
    {
        word: "enigma",
        hint: "Something mysterious, puzzling, and difficult to understand.",
        hintTa: "புரிந்துகொள்ள கடினமான மர்மமான மற்றும் புதிரான ஒன்று."
    },
    {
        word: "vibrant",
        hint: "Full of energy, life, and strikingly bright in character or color.",
        hintTa: "ஆற்றல் மற்றும் உயிர்ப்பால் நிரம்பிய; பளபளப்பான வண்ணம் அல்லது குணம் கொண்டது."
    },
    {
        word: "shadow",
        hint: "A dark shape formed when an object blocks a source of light.",
        hintTa: "ஒரு பொருள் ஒளியை தடுக்கும்போது உருவாகும் இருண்ட வடிவம்; நிழல்."
    },
    {
        word: "secret",
        hint: "Something known only to a few people and intentionally kept hidden.",
        hintTa: "சில பேருக்கு மட்டுமே தெரிந்த மற்றும் மறைத்து வைக்கப்பட்ட ஒன்று; இரகசியம்."
    },
    {
        word: "puzzle",
        hint: "A game, problem, or toy designed to test your knowledge or ingenuity.",
        hintTa: "அறிவையும் புத்திசாலித்தனத்தையும் சோதிக்க வடிவமைக்கப்பட்ட விளையாட்டு அல்லது சிக்கல்; புதிர்."
    },
    {
        word: "treasure",
        hint: "A collection of valuable things, especially jewels or gold, often hidden away.",
        hintTa: "பொன், நகை போன்ற மதிப்புமிக்க பொருட்களின் தொகுப்பு; அவை பெரும்பாலும் மறைக்கப்படும்; புதையல்."
    },
    {
        word: "journey",
        hint: "An act of traveling from one place to another, often long and meaningful.",
        hintTa: "ஒரு இடத்திலிருந்து மற்றொரு இடத்திற்கு பயணிக்கும் செயல்பாடு; பயணம்."
    },
    {
        word: "horizon",
        hint: "The line where the sky and the Earth's surface appear to meet.",
        hintTa: "வானமும் பூமியும் சந்திப்பது போல் தோன்றும் கோடு; அடிவானம்."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressively bright.",
        hintTa: "அசாதாரண புத்திசாலித்தனம் அல்லது திறமை கொண்டவர்; மிகவும் பிரகாசமான."
    },
    {
        word: "grateful",
        hint: "Feeling or showing appreciation and thankfulness for what you have received.",
        hintTa: "கிடைத்ததற்கு நன்றி உணர்வும் பாராட்டும் கொண்டிருக்கும் நிலை; நன்றியுள்ளவர்."
    },
    {
        word: "celebrate",
        hint: "To mark a special occasion with festivities, joy, and shared happiness.",
        hintTa: "சிறப்பு நிகழ்வை மகிழ்ச்சியுடன் கொண்டாடுதல்; விழா கொண்டாட்டம்."
    },
    {
        word: "champion",
        hint: "A person who has beaten all rivals to win a competition or contest.",
        hintTa: "போட்டியில் அனைத்து எதிரிகளையும் வென்ற நபர்; சாம்பியன்."
    },
    {
        word: "umbrella",
        hint: "A folding canopy on a stick used as protection from rain or sun.",
        hintTa: "மழை அல்லது வெய்யிலிலிருந்து பாதுகாக்கும் மடிக்கக்கூடிய குடை."
    },
    {
        word: "calendar",
        hint: "A chart or system that organizes days, weeks, and months of the year.",
        hintTa: "ஆண்டின் நாட்கள், வாரங்கள் மற்றும் மாதங்களை ஒழுங்கமைக்கும் அட்டவணை; நாட்காட்டி."
    },
    {
        word: "compass",
        hint: "A navigational tool that shows direction using a magnetic needle.",
        hintTa: "காந்த ஊசி மூலம் திசையைக் காட்டும் வழிசெலுத்தல் கருவி; திக்கு அறியும் கருவி."
    },
    {
        word: "lantern",
        hint: "A portable light enclosed in a transparent case, used for illumination.",
        hintTa: "ஒளியை முடைத்து வைக்கும் கண்ணாடி உறை கொண்ட கையடக்க விளக்கு."
    },
    {
        word: "memory",
        hint: "The mental ability to store and recall past experiences and information.",
        hintTa: "கடந்த கால அனுபவங்கள் மற்றும் தகவல்களை சேமித்து நினைவுகூறும் மன ஆற்றல்; நினைவாற்றல்."
    },
];