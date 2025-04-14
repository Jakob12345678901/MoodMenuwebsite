interface Suggestion {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

interface MoodSuggestions {
  food: Suggestion[];
  music: Suggestion[];
  activities: Suggestion[];
  movies: Suggestion[];
}

interface SuggestionDatabase {
  [key: string]: MoodSuggestions;
}

// Sample image URLs (public domain or stock photos)
const placeholderImages = {
  food1: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  food2: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  food3: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  food4: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
  food5: "https://images.unsplash.com/photo-1574484284002-952d92456975",
  music1: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  music2: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
  music3: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
  music4: "https://images.unsplash.com/photo-1621153956058-84a4a8384636",
  activity1: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28",
  activity2: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054",
  activity3: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
  activity4: "https://images.unsplash.com/photo-1535955565756-75878939d126",
  movie1: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
  movie2: "https://images.unsplash.com/photo-1585647347384-2593bc35786b",
  movie3: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf",
  movie4: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
};

// This would be a database of mood-based suggestions
const suggestionDatabase: SuggestionDatabase = {
  happy: {
    food: [
      {
        title: "Bright & Fresh Citrus Salad",
        description: "A refreshing mix of citrus fruits for an energy boost that complements your happy mood.",
        link: "https://www.example.com/citrus-salad",
        imageUrl: placeholderImages.food1,
      },
      {
        title: "Colorful Rainbow Pizza",
        description: "A festive and bright pizza topped with colorful veggies to celebrate your happy vibes.",
        link: "https://www.example.com/rainbow-pizza",
        imageUrl: placeholderImages.food2,
      },
      {
        title: "Tropical Smoothie Bowl",
        description: "A vibrant bowl filled with mango, pineapple and coconut to continue your blissful day.",
        link: "https://www.example.com/tropical-smoothie",
        imageUrl: placeholderImages.food3,
      },
      {
        title: "Celebratory Chocolate Cake",
        description: "A decadent chocolate cake that's perfect for sharing your happiness with others.",
        link: "https://www.example.com/chocolate-cake",
        imageUrl: placeholderImages.food4,
      },
    ],
    music: [
      {
        title: "Feel-Good Summer Hits",
        description: "Upbeat tracks that'll keep your happiness going strong all day long.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX1g0iEXLFycr",
        imageUrl: placeholderImages.music1,
      },
      {
        title: "Happy Dance Party Mix",
        description: "Dance around to these energetic beats and amplify your good mood.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX5YTAi6JhwZm",
        imageUrl: placeholderImages.music2,
      },
      {
        title: "Sunshine Pop Classics",
        description: "Classic feel-good pop songs from across the decades to match your sunny disposition.",
        link: "https://open.spotify.com/playlist/example1",
        imageUrl: placeholderImages.music3,
      },
      {
        title: "Uplifting Indie Folk",
        description: "Gentle, uplifting melodies with positive lyrics to enhance your happy state.",
        link: "https://open.spotify.com/playlist/example2",
        imageUrl: placeholderImages.music4,
      },
    ],
    activities: [
      {
        title: "Outdoor Picnic Adventure",
        description: "Pack some snacks and head to a local park for a beautiful day outdoors.",
        link: "https://www.example.com/picnic-ideas",
        imageUrl: placeholderImages.activity1,
      },
      {
        title: "Spontaneous Dance Party",
        description: "Turn up your happy playlist and dance like nobody's watching!",
        link: "https://www.example.com/dance-moves",
        imageUrl: placeholderImages.activity2,
      },
      {
        title: "Random Acts of Kindness",
        description: "Spread your joy by performing small acts of kindness for friends, family or strangers.",
        link: "https://www.example.com/kindness-ideas",
        imageUrl: placeholderImages.activity3,
      },
      {
        title: "Group Game Night",
        description: "Gather friends for a fun game night with laughs and friendly competition.",
        link: "https://www.example.com/game-night-ideas",
        imageUrl: placeholderImages.activity4,
      },
    ],
    movies: [
      {
        title: "Feel-Good Comedy Classics",
        description: "These comedies will keep your mood light and laughs coming.",
        link: "https://www.netflix.com/browse",
        imageUrl: placeholderImages.movie1,
      },
      {
        title: "Inspiring Underdog Stories",
        description: "Stories of triumph that will make you feel on top of the world.",
        link: "https://www.disney.com/",
        imageUrl: placeholderImages.movie2,
      },
      {
        title: "Uplifting Musical Adventures",
        description: "Sing-along favorites that celebrate life's joyful moments through song and dance.",
        link: "https://www.example.com/musicals",
        imageUrl: placeholderImages.movie3,
      },
      {
        title: "Heartwarming Animated Films",
        description: "Colorful adventures with positive messages to match your cheerful attitude.",
        link: "https://www.example.com/animated",
        imageUrl: placeholderImages.movie4,
      },
    ],
  },
  joyful: {
    food: [
      {
        title: "Celebration Berry Parfait",
        description: "Layers of yogurt, granola, and fresh berries to match your joyful spirit.",
        link: "https://www.example.com/berry-parfait",
        imageUrl: placeholderImages.food1,
      },
      {
        title: "Festive Taco Bar",
        description: "Create a colorful spread of tacos with all the toppings for a joyful gathering.",
        link: "https://www.example.com/taco-bar",
        imageUrl: placeholderImages.food2,
      },
      {
        title: "Rainbow Fruit Skewers",
        description: "Vibrant fruit skewers that look as joyful as you feel - perfect for sharing.",
        link: "https://www.example.com/fruit-skewers",
        imageUrl: placeholderImages.food3,
      },
      {
        title: "Celebration Confetti Cookies",
        description: "Colorful sprinkle-filled cookies that taste like pure joy in every bite.",
        link: "https://www.example.com/confetti-cookies",
        imageUrl: placeholderImages.food4,
      },
    ],
    music: [
      {
        title: "Ultimate Celebration Playlist",
        description: "The perfect soundtrack for life's most joyful moments and celebrations.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX8jnAPF7Iiqp",
        imageUrl: placeholderImages.music1,
      },
      {
        title: "Infectious Pop Anthems",
        description: "Songs so catchy and joyful, you can't help but sing along at the top of your lungs.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DWZQaaqNMbbXa",
        imageUrl: placeholderImages.music2,
      },
      {
        title: "Feel-Good Classical",
        description: "Uplifting classical pieces that spark joy and brighten your day even more.",
        link: "https://open.spotify.com/playlist/example3",
        imageUrl: placeholderImages.music3,
      },
      {
        title: "Joyful Global Rhythms",
        description: "Celebratory music from cultures around the world that capture the essence of joy.",
        link: "https://open.spotify.com/playlist/example4",
        imageUrl: placeholderImages.music4,
      },
    ],
    activities: [
      {
        title: "Host an Impromptu Gathering",
        description: "Share your joy with friends or family by inviting them over for a spontaneous celebration.",
        link: "https://www.example.com/hosting-tips",
        imageUrl: placeholderImages.activity1,
      },
      {
        title: "Capture the Moment",
        description: "Take photos or videos to document this joyful time - future you will thank you!",
        link: "https://www.example.com/photography-tips",
        imageUrl: placeholderImages.activity2,
      },
      {
        title: "Creative Expression",
        description: "Channel your joy into art, writing, or music - create something that captures this feeling.",
        link: "https://www.example.com/creative-projects",
        imageUrl: placeholderImages.activity3,
      },
      {
        title: "Joy Journal",
        description: "Start a gratitude or joy journal to celebrate and remember the good moments in life.",
        link: "https://www.example.com/journaling-guide",
        imageUrl: placeholderImages.activity4,
      },
    ],
    movies: [
      {
        title: "Celebratory Coming-of-Age Films",
        description: "Movies about significant life moments and the joy of growing up.",
        link: "https://www.netflix.com/browse",
        imageUrl: placeholderImages.movie1,
      },
      {
        title: "Joyful Family Adventures",
        description: "Heartwarming stories about families coming together through adventures.",
        link: "https://www.disney.com/",
        imageUrl: placeholderImages.movie2,
      },
      {
        title: "Uplifting Documentaries",
        description: "Real-life stories of triumph and joy that will leave you inspired.",
        link: "https://www.example.com/documentaries",
        imageUrl: placeholderImages.movie3,
      },
      {
        title: "Whimsical Fantasy Films",
        description: "Escape to magical worlds full of wonder and delight with these enchanting movies.",
        link: "https://www.example.com/fantasy-films",
        imageUrl: placeholderImages.movie4,
      },
    ],
  },
  romantic: {
    food: [
      {
        title: "Chocolate-Covered Strawberries",
        description: "A classic romantic treat that's both simple to make and deliciously indulgent.",
        link: "https://www.example.com/chocolate-strawberries",
        imageUrl: placeholderImages.food1,
      },
      {
        title: "Homemade Pasta for Two",
        description: "Create a memorable dining experience with fresh, handmade pasta and a simple sauce.",
        link: "https://www.example.com/homemade-pasta",
        imageUrl: placeholderImages.food2,
      },
      {
        title: "Romantic Cheese & Wine Pairing",
        description: "Select complementary cheeses and wines for an intimate tasting experience.",
        link: "https://www.example.com/cheese-wine",
        imageUrl: placeholderImages.food3,
      },
      {
        title: "Heart-Shaped Everything",
        description: "From pancakes to cookies, add a romantic touch by shaping your food into hearts.",
        link: "https://www.example.com/heart-shaped-food",
        imageUrl: placeholderImages.food4,
      },
    ],
    music: [
      {
        title: "Timeless Love Songs",
        description: "Classic romance ballads from across the decades to set the perfect mood.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX4oL0YWyvqen",
        imageUrl: placeholderImages.music1,
      },
      {
        title: "Intimate Acoustic Covers",
        description: "Stripped-down, intimate versions of love songs for a personal connection.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DXaQm3ZVg9Z2X",
        imageUrl: placeholderImages.music2,
      },
      {
        title: "Romantic Jazz Standards",
        description: "Smooth jazz classics that create an elegant and romantic atmosphere.",
        link: "https://open.spotify.com/playlist/example5",
        imageUrl: placeholderImages.music3,
      },
      {
        title: "Cinematic Love Themes",
        description: "Instrumental pieces from film scores that capture the essence of romance.",
        link: "https://open.spotify.com/playlist/example6",
        imageUrl: placeholderImages.music4,
      },
    ],
    activities: [
      {
        title: "Stargazing Date",
        description: "Find a quiet spot away from city lights to admire the stars together.",
        link: "https://www.example.com/stargazing-guide",
        imageUrl: placeholderImages.activity1,
      },
      {
        title: "Love Letter Writing",
        description: "Express your feelings through the timeless art of handwritten love letters.",
        link: "https://www.example.com/letter-writing",
        imageUrl: placeholderImages.activity2,
      },
      {
        title: "Couple's Cooking Class",
        description: "Learn to make something new together while enjoying quality time in the kitchen.",
        link: "https://www.example.com/cooking-classes",
        imageUrl: placeholderImages.activity3,
      },
      {
        title: "Memory Lane Tour",
        description: "Visit places that are meaningful to your relationship and reminisce about special moments.",
        link: "https://www.example.com/memory-ideas",
        imageUrl: placeholderImages.activity4,
      },
    ],
    movies: [
      {
        title: "Classic Romance Films",
        description: "Timeless love stories that have captured hearts for generations.",
        link: "https://www.netflix.com/browse",
        imageUrl: placeholderImages.movie1,
      },
      {
        title: "Modern Rom-Coms",
        description: "Contemporary romantic comedies that balance heart and humor.",
        link: "https://www.hulu.com/",
        imageUrl: placeholderImages.movie2,
      },
      {
        title: "Epic Love Stories",
        description: "Grand, sweeping romances set against dramatic historical backdrops.",
        link: "https://www.example.com/epic-romances",
        imageUrl: placeholderImages.movie3,
      },
      {
        title: "International Romance Films",
        description: "Beautiful love stories from around the world offering new perspectives on romance.",
        link: "https://www.example.com/international-films",
        imageUrl: placeholderImages.movie4,
      },
    ],
  },
  inspired: {
    food: [
      {
        title: "Creative Breakfast Buddha Bowl",
        description: "A colorful, nutritious bowl to fuel your creative inspiration all day.",
        link: "https://www.example.com/buddha-bowl",
        imageUrl: placeholderImages.food1,
      },
      {
        title: "Global Cuisine Exploration",
        description: "Try cooking a dish from a culture you've never experienced before to spark new ideas.",
        link: "https://www.example.com/global-cuisine",
        imageUrl: placeholderImages.food2,
      },
      {
        title: "Brain-Boosting Green Smoothie",
        description: "Packed with nutrients that support cognitive function and creative thinking.",
        link: "https://www.example.com/green-smoothie",
        imageUrl: placeholderImages.food3,
      },
      {
        title: "Artistic Charcuterie Board",
        description: "Create an edible work of art with a beautifully arranged board of finger foods.",
        link: "https://www.example.com/charcuterie",
        imageUrl: placeholderImages.food4,
      },
    ],
    music: [
      {
        title: "Cinematic Instrumental Scores",
        description: "Epic film scores that stimulate the imagination and creativity.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX6GJXiuZRisr",
        imageUrl: placeholderImages.music1,
      },
      {
        title: "Innovative Electronic Music",
        description: "Boundary-pushing electronic compositions that inspire new ways of thinking.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX0jgyAiPl8Af",
        imageUrl: placeholderImages.music2,
      },
      {
        title: "Classical Masterpieces",
        description: "Timeless works by history's greatest composers to elevate your thoughts.",
        link: "https://open.spotify.com/playlist/example7",
        imageUrl: placeholderImages.music3,
      },
      {
        title: "Creative Focus Playlist",
        description: "Carefully curated tracks designed to enhance concentration and creative flow.",
        link: "https://open.spotify.com/playlist/example8",
        imageUrl: placeholderImages.music4,
      },
    ],
    activities: [
      {
        title: "Vision Board Creation",
        description: "Collect images and words that represent your aspirations to visualize your goals.",
        link: "https://www.example.com/vision-board",
        imageUrl: placeholderImages.activity1,
      },
      {
        title: "Inspirational Museum Visit",
        description: "Explore a local museum or gallery to spark new ideas and perspectives.",
        link: "https://www.example.com/virtual-museums",
        imageUrl: placeholderImages.activity2,
      },
      {
        title: "Creative Writing Exercise",
        description: "Try a guided writing prompt to channel your inspiration into words.",
        link: "https://www.example.com/writing-prompts",
        imageUrl: placeholderImages.activity3,
      },
      {
        title: "Nature Inspiration Walk",
        description: "Take a mindful walk in nature with a sketchbook or camera to capture what inspires you.",
        link: "https://www.example.com/nature-inspiration",
        imageUrl: placeholderImages.activity4,
      },
    ],
    movies: [
      {
        title: "Biopics of Creative Geniuses",
        description: "Films about the lives of innovative artists, scientists, and thinkers.",
        link: "https://www.netflix.com/browse",
        imageUrl: placeholderImages.movie1,
      },
      {
        title: "Visually Stunning Cinema",
        description: "Visually innovative films that push the boundaries of the art form.",
        link: "https://www.hbomax.com/",
        imageUrl: placeholderImages.movie2,
      },
      {
        title: "Documentaries About Innovation",
        description: "Real stories about breakthrough ideas and the people behind them.",
        link: "https://www.example.com/innovation-docs",
        imageUrl: placeholderImages.movie3,
      },
      {
        title: "Thought-Provoking Sci-Fi",
        description: "Science fiction that explores big ideas and alternative possibilities.",
        link: "https://www.example.com/scifi-films",
        imageUrl: placeholderImages.movie4,
      },
    ],
  },
  sad: {
    food: [
      {
        title: "Comforting Chicken Soup",
        description: "A warm, nourishing bowl of soup that feels like a hug from the inside.",
        link: "https://www.example.com/chicken-soup",
        imageUrl: placeholderImages.food2,
      },
      {
        title: "Rich Hot Chocolate",
        description: "A velvety cup of hot chocolate with marshmallows to lift your spirits.",
        link: "https://www.example.com/hot-chocolate",
        imageUrl: placeholderImages.food3,
      },
      {
        title: "Freshly Baked Bread",
        description: "The process of making bread can be therapeutic, and the aroma is naturally comforting.",
        link: "https://www.example.com/easy-bread",
        imageUrl: placeholderImages.food4,
      },
      {
        title: "Nostalgia-Inducing Mac & Cheese",
        description: "A creamy, cheesy childhood favorite to provide some comfort during difficult times.",
        link: "https://www.example.com/mac-cheese",
        imageUrl: placeholderImages.food5,
      },
    ],
    music: [
      {
        title: "Gentle Acoustic Melodies",
        description: "Soft, melodic tunes that acknowledge your feelings and provide comfort.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DWTwnEm1IYyoj",
        imageUrl: placeholderImages.music1,
      },
      {
        title: "Rainy Day Reflections",
        description: "Thoughtful tracks for when you need some time to process your emotions.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DXbvABJXBIyiY",
        imageUrl: placeholderImages.music2,
      },
      {
        title: "Melancholy Classical Pieces",
        description: "Beautiful, moving classical compositions that resonate with sadness but offer catharsis.",
        link: "https://open.spotify.com/playlist/example9",
        imageUrl: placeholderImages.music3,
      },
      {
        title: "Comforting Vocal Ballads",
        description: "Emotional songs with lyrics that help you feel understood in your sadness.",
        link: "https://open.spotify.com/playlist/example10",
        imageUrl: placeholderImages.music4,
      },
    ],
    activities: [
      {
        title: "Cozy Reading Nook",
        description: "Wrap up in a blanket with a good book and a cup of tea.",
        link: "https://www.example.com/reading-recommendations",
        imageUrl: placeholderImages.activity1,
      },
      {
        title: "Gentle Nature Walk",
        description: "A slow, mindful walk in nature can help clear the mind and soothe the soul.",
        link: "https://www.example.com/nature-trails",
        imageUrl: placeholderImages.activity2,
      },
      {
        title: "Expressive Journaling",
        description: "Put your feelings into words without judgment to process emotions.",
        link: "https://www.example.com/journaling",
        imageUrl: placeholderImages.activity3,
      },
      {
        title: "Comfort Crafting",
        description: "Simple, repetitive crafts like knitting or coloring can be meditative and soothing.",
        link: "https://www.example.com/easy-crafts",
        imageUrl: placeholderImages.activity4,
      },
    ],
    movies: [
      {
        title: "Heartwarming Animated Films",
        description: "Animated movies with heartfelt messages to bring a smile to your face.",
        link: "https://www.pixar.com/",
        imageUrl: placeholderImages.movie1,
      },
      {
        title: "Cathartic Dramas",
        description: "Sometimes a good cry can be therapeutic. These dramas help release emotions.",
        link: "https://www.hulu.com/",
        imageUrl: placeholderImages.movie2,
      },
      {
        title: "Uplifting True Stories",
        description: "Real-life accounts of resilience and hope during difficult times.",
        link: "https://www.example.com/true-stories",
        imageUrl: placeholderImages.movie3,
      },
      {
        title: "Nostalgic Childhood Favorites",
        description: "Revisit beloved films from your youth for a comforting sense of familiarity.",
        link: "https://www.example.com/classics",
        imageUrl: placeholderImages.movie4,
      },
    ],
  },
  bored: {
    food: [
      {
        title: "Fun DIY Pizza Bar",
        description: "Create your own pizza with creative toppings - a fun cooking project for when you're bored.",
        link: "https://www.example.com/diy-pizza",
        imageUrl: placeholderImages.food1,
      },
      {
        title: "International Snack Exploration",
        description: "Try new and exciting snacks from around the world to spark your curiosity.",
        link: "https://www.example.com/international-snacks",
        imageUrl: placeholderImages.food3,
      },
      {
        title: "Ambitious Baking Project",
        description: "Take on a challenging multi-step recipe you normally wouldn't have time for.",
        link: "https://www.example.com/advanced-baking",
        imageUrl: placeholderImages.food4,
      },
      {
        title: "Homemade Ice Cream Creation",
        description: "Experiment with unusual flavor combinations to make unique frozen treats.",
        link: "https://www.example.com/ice-cream-recipes",
        imageUrl: placeholderImages.food5,
      },
    ],
    music: [
      {
        title: "Discover New Artists Mix",
        description: "Break out of your music rut with these fresh artists and genres.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DWUoqEG4WY6ce",
        imageUrl: placeholderImages.music1,
      },
      {
        title: "Upbeat Productivity Boost",
        description: "Energetic tunes to get you moving and shake off that boredom.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX8NTLI2TtZa6",
        imageUrl: placeholderImages.music2,
      },
      {
        title: "Global Music Adventure",
        description: "Fascinating musical traditions from around the world to expand your horizons.",
        link: "https://open.spotify.com/playlist/example11",
        imageUrl: placeholderImages.music3,
      },
      {
        title: "Deep Album Cuts",
        description: "Lesser-known tracks from famous artists that you might have missed.",
        link: "https://open.spotify.com/playlist/example12",
        imageUrl: placeholderImages.music4,
      },
    ],
    activities: [
      {
        title: "Quick Home Workout Challenge",
        description: "A 15-minute workout that requires no equipment but will get your blood pumping.",
        link: "https://www.example.com/quick-workouts",
        imageUrl: placeholderImages.activity1,
      },
      {
        title: "Learn a Party Trick",
        description: "Impress your friends by mastering a quick and fun party trick or magic illusion.",
        link: "https://www.example.com/party-tricks",
        imageUrl: placeholderImages.activity2,
      },
      {
        title: "Random Wikipedia Dive",
        description: "Click the 'Random Article' feature on Wikipedia and fall down a fascinating rabbit hole.",
        link: "https://en.wikipedia.org/wiki/Special:Random",
        imageUrl: placeholderImages.activity3,
      },
      {
        title: "5-Minute Skill Challenge",
        description: "Try to learn a very simple new skill in just five minutes, like juggling or origami.",
        link: "https://www.example.com/quick-skills",
        imageUrl: placeholderImages.activity4,
      },
    ],
    movies: [
      {
        title: "Mind-Bending Thrillers",
        description: "Intriguing plots that will keep you guessing and fully engaged.",
        link: "https://www.amazon.com/Prime-Video/b?node=2676882011",
        imageUrl: placeholderImages.movie1,
      },
      {
        title: "Binge-Worthy TV Series",
        description: "Start a new series that's guaranteed to hook you from episode one.",
        link: "https://www.hbomax.com/",
        imageUrl: placeholderImages.movie2,
      },
      {
        title: "Cult Classic Films",
        description: "Offbeat movies with devoted followings that you might have missed.",
        link: "https://www.example.com/cult-classics",
        imageUrl: placeholderImages.movie3,
      },
      {
        title: "Documentary Deep Dives",
        description: "Fascinating documentaries about unusual subjects to expand your knowledge.",
        link: "https://www.example.com/documentaries",
        imageUrl: placeholderImages.movie4,
      },
    ],
  },
  stressed: {
    food: [
      {
        title: "Calming Chamomile Tea & Honey",
        description: "A soothing cup of herbal tea to help you relax and unwind when stressed.",
        link: "https://www.example.com/chamomile-tea",
        imageUrl: placeholderImages.food2,
      },
      {
        title: "Dark Chocolate Squares",
        description: "Rich dark chocolate to boost your mood and provide a moment of mindful indulgence.",
        link: "https://www.example.com/dark-chocolate",
        imageUrl: placeholderImages.food3,
      },
      {
        title: "Anti-Inflammatory Turmeric Latte",
        description: "A warming golden milk drink with stress-reducing properties.",
        link: "https://www.example.com/golden-milk",
        imageUrl: placeholderImages.food4,
      },
      {
        title: "Simple Avocado Toast",
        description: "An easy, nutritious snack with healthy fats that support brain function during stress.",
        link: "https://www.example.com/avocado-toast",
        imageUrl: placeholderImages.food5,
      },
    ],
    music: [
      {
        title: "Ambient Relaxation Sounds",
        description: "Gentle, ambient sounds that help calm the nervous system and reduce stress.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DWXe9gFZP0gtP",
        imageUrl: placeholderImages.music1,
      },
      {
        title: "Classical Focus",
        description: "Beautiful classical compositions that can help clear the mind and reduce anxiety.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp",
        imageUrl: placeholderImages.music2,
      },
      {
        title: "Meditation and Mindfulness",
        description: "Guided meditations with calming background music to help center your thoughts.",
        link: "https://open.spotify.com/playlist/example13",
        imageUrl: placeholderImages.music3,
      },
      {
        title: "Nature Soundscapes",
        description: "Immersive recordings of natural environments that promote relaxation.",
        link: "https://open.spotify.com/playlist/example14",
        imageUrl: placeholderImages.music4,
      },
    ],
    activities: [
      {
        title: "5-Minute Breathing Exercise",
        description: "A simple breathing technique that can quickly reduce stress and bring calm.",
        link: "https://www.example.com/breathing-exercises",
        imageUrl: placeholderImages.activity1,
      },
      {
        title: "Adult Coloring Pages",
        description: "Engage in some mindful coloring to focus your attention and relieve stress.",
        link: "https://www.example.com/adult-coloring",
        imageUrl: placeholderImages.activity2,
      },
      {
        title: "Progressive Muscle Relaxation",
        description: "A step-by-step technique to release physical tension throughout your body.",
        link: "https://www.example.com/muscle-relaxation",
        imageUrl: placeholderImages.activity3,
      },
      {
        title: "Declutter One Small Space",
        description: "Creating order in your physical environment can help create mental clarity.",
        link: "https://www.example.com/simple-decluttering",
        imageUrl: placeholderImages.activity4,
      },
    ],
    movies: [
      {
        title: "Soothing Nature Documentaries",
        description: "Visually stunning footage of natural landscapes and wildlife to calm your mind.",
        link: "https://www.bbcearth.com/",
        imageUrl: placeholderImages.movie1,
      },
      {
        title: "Light-Hearted Comedy Shows",
        description: "Easy-watching comedies that don't require much mental energy but provide good laughs.",
        link: "https://www.netflix.com/browse",
        imageUrl: placeholderImages.movie2,
      },
      {
        title: "Gentle Baking Shows",
        description: "Relaxing cooking competitions and demonstrations with a low-stress atmosphere.",
        link: "https://www.example.com/baking-shows",
        imageUrl: placeholderImages.movie3,
      },
      {
        title: "Familiar Comfort Movies",
        description: "Films you've seen before that don't create tension because you know the outcome.",
        link: "https://www.example.com/comfort-films",
        imageUrl: placeholderImages.movie4,
      },
    ],
  },
  anxious: {
    food: [
      {
        title: "Calming Herbal Tea Blend",
        description: "A special blend of chamomile, lavender, and passionflower to naturally ease anxiety.",
        link: "https://www.example.com/herbal-tea",
        imageUrl: placeholderImages.food1,
      },
      {
        title: "Magnesium-Rich Banana Smoothie",
        description: "A smoothie containing bananas, almonds and spinach - foods that support nervous system health.",
        link: "https://www.example.com/banana-smoothie",
        imageUrl: placeholderImages.food2,
      },
      {
        title: "Omega-3 Rich Salmon Bowl",
        description: "A simple dish featuring salmon, which contains omega-3s that may help reduce anxiety symptoms.",
        link: "https://www.example.com/salmon-bowl",
        imageUrl: placeholderImages.food3,
      },
      {
        title: "Grounding Root Vegetable Soup",
        description: "A warm soup made with earthy root vegetables to help you feel centered and nourished.",
        link: "https://www.example.com/root-soup",
        imageUrl: placeholderImages.food4,
      },
    ],
    music: [
      {
        title: "432Hz Healing Frequencies",
        description: "Music tuned to 432Hz, which some believe has a calming effect on the nervous system.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX0jgyAiPl8Af",
        imageUrl: placeholderImages.music1,
      },
      {
        title: "Binaural Beats for Anxiety",
        description: "Special audio tracks designed to help synchronize brain waves to a calmer state.",
        link: "https://open.spotify.com/playlist/example15",
        imageUrl: placeholderImages.music2,
      },
      {
        title: "Gentle Piano Solos",
        description: "Soft, melodic piano pieces that can help quiet an anxious mind.",
        link: "https://open.spotify.com/playlist/example16",
        imageUrl: placeholderImages.music3,
      },
      {
        title: "Guided Anxiety Relief",
        description: "Voice-guided anxiety reduction techniques with gentle background music.",
        link: "https://open.spotify.com/playlist/example17",
        imageUrl: placeholderImages.music4,
      },
    ],
    activities: [
      {
        title: "5-4-3-2-1 Grounding Exercise",
        description: "A sensory awareness technique to bring you back to the present moment when anxiety strikes.",
        link: "https://www.example.com/grounding-exercise",
        imageUrl: placeholderImages.activity1,
      },
      {
        title: "Anxiety Journal Prompts",
        description: "Specific writing exercises designed to help process and reduce anxious thoughts.",
        link: "https://www.example.com/anxiety-journaling",
        imageUrl: placeholderImages.activity2,
      },
      {
        title: "Gentle Yoga Sequence",
        description: "A short sequence of calming yoga poses that help release physical tension from anxiety.",
        link: "https://www.example.com/gentle-yoga",
        imageUrl: placeholderImages.activity3,
      },
      {
        title: "Worry Box Technique",
        description: "A method of symbolically containing worried thoughts to deal with later.",
        link: "https://www.example.com/worry-box",
        imageUrl: placeholderImages.activity4,
      },
    ],
    movies: [
      {
        title: "Predictable Feel-Good Movies",
        description: "Films with simple plots and happy endings that won't heighten anxiety.",
        link: "https://www.netflix.com/browse",
        imageUrl: placeholderImages.movie1,
      },
      {
        title: "Slow TV",
        description: "Long-form, slow-paced programs like train journeys or crackling fireplaces.",
        link: "https://www.example.com/slow-tv",
        imageUrl: placeholderImages.movie2,
      },
      {
        title: "Nostalgic Children's Shows",
        description: "Familiar shows from childhood that provide comfort and security.",
        link: "https://www.example.com/nostalgic-shows",
        imageUrl: placeholderImages.movie3,
      },
      {
        title: "Mindfulness Documentaries",
        description: "Informative films about mindfulness and anxiety management techniques.",
        link: "https://www.example.com/mindfulness-docs",
        imageUrl: placeholderImages.movie4,
      },
    ],
  },
  energized: {
    food: [
      {
        title: "Protein-Packed Power Bowl",
        description: "A balanced bowl with lean protein and fresh veggies to sustain your energy.",
        link: "https://www.example.com/power-bowl",
        imageUrl: placeholderImages.food1,
      },
      {
        title: "Fresh Fruit Smoothie",
        description: "A vibrant smoothie with fruits and greens to complement your energized state.",
        link: "https://www.example.com/smoothie-recipes",
        imageUrl: placeholderImages.food3,
      },
      {
        title: "Energy-Boosting Trail Mix",
        description: "A balanced mix of nuts, seeds, and dried fruit for sustained energy on the go.",
        link: "https://www.example.com/trail-mix",
        imageUrl: placeholderImages.food4,
      },
      {
        title: "Quick Avocado & Egg Toast",
        description: "A perfect combination of healthy fats and protein to maintain your energy levels.",
        link: "https://www.example.com/avocado-egg-toast",
        imageUrl: placeholderImages.food5,
      },
    ],
    music: [
      {
        title: "High-Energy Workout Mix",
        description: "Fast-paced tracks perfect for channeling that extra energy into physical activity.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP",
        imageUrl: placeholderImages.music1,
      },
      {
        title: "Productivity Power Hour",
        description: "Motivating beats to help you focus and make the most of your energized state.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DWZZbwlv3Vmtr",
        imageUrl: placeholderImages.music2,
      },
      {
        title: "Upbeat Classic Rock",
        description: "Timeless rock anthems with driving beats to match your high energy.",
        link: "https://open.spotify.com/playlist/example18",
        imageUrl: placeholderImages.music3,
      },
      {
        title: "Dance Music Essentials",
        description: "Infectious dance tracks that will keep you moving and grooving.",
        link: "https://open.spotify.com/playlist/example19",
        imageUrl: placeholderImages.music4,
      },
    ],
    activities: [
      {
        title: "Creative Project Sprint",
        description: "Channel your energy into a 30-minute burst of creativity on a project you've been putting off.",
        link: "https://www.example.com/creative-projects",
        imageUrl: placeholderImages.activity1,
      },
      {
        title: "Outdoor Adventure",
        description: "Take advantage of your high energy with a hike, bike ride, or exploring somewhere new.",
        link: "https://www.example.com/outdoor-activities",
        imageUrl: placeholderImages.activity2,
      },
      {
        title: "High-Intensity Interval Training",
        description: "A quick, intense workout to match your energy level and boost your endorphins even higher.",
        link: "https://www.example.com/hiit-workout",
        imageUrl: placeholderImages.activity3,
      },
      {
        title: "Home Reorganization Project",
        description: "Put that energy to good use by tackling a home organization project you've been avoiding.",
        link: "https://www.example.com/home-organization",
        imageUrl: placeholderImages.activity4,
      },
    ],
    movies: [
      {
        title: "Action-Packed Adventures",
        description: "Fast-paced films with plenty of excitement to match your energetic mood.",
        link: "https://www.netflix.com/browse",
        imageUrl: placeholderImages.movie1,
      },
      {
        title: "Inspiring Documentaries",
        description: "Real-life stories of ambition and achievement to channel your energy toward goals.",
        link: "https://www.hulu.com/",
        imageUrl: placeholderImages.movie2,
      },
      {
        title: "Competition Shows",
        description: "High-energy contest shows that keep you engaged and excited about the outcome.",
        link: "https://www.example.com/competition-shows",
        imageUrl: placeholderImages.movie3,
      },
      {
        title: "Fast-Paced Comedies",
        description: "Quick-witted comedies with rapid-fire jokes to match your energetic state.",
        link: "https://www.example.com/comedy-shows",
        imageUrl: placeholderImages.movie4,
      },
    ],
  },
  tired: {
    food: [
      {
        title: "Easy One-Pot Pasta",
        description: "A simple, comforting pasta dish that requires minimal effort but delivers on flavor.",
        link: "https://www.example.com/one-pot-pasta",
        imageUrl: placeholderImages.food1,
      },
      {
        title: "Energy-Boosting Banana Oatmeal",
        description: "A quick, nourishing breakfast with complex carbs and natural sweetness for gentle energy.",
        link: "https://www.example.com/banana-oatmeal",
        imageUrl: placeholderImages.food2,
      },
      {
        title: "Hydrating Fruit Infusions",
        description: "Simple water infusions with fruits that help combat fatigue from dehydration.",
        link: "https://www.example.com/fruit-water",
        imageUrl: placeholderImages.food3,
      },
      {
        title: "Nourishing Vegetable Soup",
        description: "A simple, warming soup that's easy to prepare and full of nutrients.",
        link: "https://www.example.com/vegetable-soup",
        imageUrl: placeholderImages.food4,
      },
    ],
    music: [
      {
        title: "Gentle Wake-Up Playlist",
        description: "Soft, gradually building music that helps you ease into activity when tired.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX6VdMW310YC7",
        imageUrl: placeholderImages.music1,
      },
      {
        title: "Mellow Acoustic Covers",
        description: "Stripped-down versions of familiar songs that are easy on the ears when you're fatigued.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DXdxUH6sNtcDe",
        imageUrl: placeholderImages.music2,
      },
      {
        title: "Soft Jazz for Relaxation",
        description: "Smooth jazz that doesn't demand attention but provides pleasant background ambiance.",
        link: "https://open.spotify.com/playlist/example20",
        imageUrl: placeholderImages.music3,
      },
      {
        title: "Calming Folk Collection",
        description: "Gentle folk music with soothing vocals perfect for a tired state of mind.",
        link: "https://open.spotify.com/playlist/example21",
        imageUrl: placeholderImages.music4,
      },
    ],
    activities: [
      {
        title: "Gentle Stretching Sequence",
        description: "A series of easy stretches to improve circulation and energy without exhausting yourself.",
        link: "https://www.example.com/gentle-stretches",
        imageUrl: placeholderImages.activity1,
      },
      {
        title: "Nature Sitting",
        description: "Simply sit outside in nature - the fresh air and natural light can help combat fatigue.",
        link: "https://www.example.com/nature-therapy",
        imageUrl: placeholderImages.activity2,
      },
      {
        title: "Phone-Free Rest Period",
        description: "A short period of complete rest without the stimulation of screens to refresh your brain.",
        link: "https://www.example.com/digital-detox",
        imageUrl: placeholderImages.activity3,
      },
      {
        title: "Audiobook Session",
        description: "Let someone else do the reading - enjoy a story without the eye strain of reading.",
        link: "https://www.example.com/audiobook-recommendations",
        imageUrl: placeholderImages.activity4,
      },
    ],
    movies: [
      {
        title: "Comfort TV Classics",
        description: "Familiar shows that don't require mental energy to follow but provide entertainment.",
        link: "https://www.netflix.com/browse",
        imageUrl: placeholderImages.movie1,
      },
      {
        title: "Relaxing Travel & Food Shows",
        description: "Visually pleasing programs about cuisine and destinations that are easy to enjoy.",
        link: "https://www.hulu.com/",
        imageUrl: placeholderImages.movie2,
      },
      {
        title: "Calm British Period Dramas",
        description: "Slow-paced, beautiful historical dramas that entertain without exhausting.",
        link: "https://www.example.com/period-dramas",
        imageUrl: placeholderImages.movie3,
      },
      {
        title: "Cozy Mystery Shows",
        description: "Gentle whodunits with likable characters and low-intensity plots.",
        link: "https://www.example.com/cozy-mysteries",
        imageUrl: placeholderImages.movie4,
      },
    ],
  },
  peaceful: {
    food: [
      {
        title: "Calming Lavender Tea",
        description: "A soothing herbal tea with lavender and chamomile to enhance your peaceful state.",
        link: "https://www.example.com/lavender-tea",
        imageUrl: placeholderImages.food1,
      },
      {
        title: "Simple Mediterranean Plate",
        description: "A balanced plate with hummus, olives, and vegetables—no cooking required.",
        link: "https://www.example.com/mediterranean-plate",
        imageUrl: placeholderImages.food2,
      },
      {
        title: "Mindful Rice Bowl",
        description: "A simple bowl of seasoned rice and vegetables to enjoy with full attention to flavors.",
        link: "https://www.example.com/rice-bowl",
        imageUrl: placeholderImages.food3,
      },
      {
        title: "Calming Blue Butterfly Pea Tea",
        description: "A naturally blue herbal tea known for its calming properties and beautiful color.",
        link: "https://www.example.com/butterfly-tea",
        imageUrl: placeholderImages.food4,
      },
    ],
    music: [
      {
        title: "Ambient Nature Soundscapes",
        description: "Gentle recordings of natural environments to enhance your peaceful mood.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX4aYNO8X5RpR",
        imageUrl: placeholderImages.music1,
      },
      {
        title: "Zen Meditation Music",
        description: "Minimalist compositions designed to promote tranquility and mindfulness.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO",
        imageUrl: placeholderImages.music2,
      },
      {
        title: "Gentle Harp Solos",
        description: "The delicate sounds of solo harp music to maintain your peaceful state.",
        link: "https://open.spotify.com/playlist/example22",
        imageUrl: placeholderImages.music3,
      },
      {
        title: "Singing Bowl Sessions",
        description: "Traditional Tibetan singing bowl recordings known for their harmonizing effects.",
        link: "https://open.spotify.com/playlist/example23",
        imageUrl: placeholderImages.music4,
      },
    ],
    activities: [
      {
        title: "Mindful Tea Ceremony",
        description: "Prepare and enjoy a cup of tea with full attention to each step of the process.",
        link: "https://www.example.com/tea-ceremony",
        imageUrl: placeholderImages.activity1,
      },
      {
        title: "Cloud Watching",
        description: "Find a comfortable spot outside to simply observe the shapes and movements of clouds.",
        link: "https://www.example.com/cloud-watching",
        imageUrl: placeholderImages.activity2,
      },
      {
        title: "Walking Meditation",
        description: "A gentle practice of walking very slowly while maintaining complete awareness.",
        link: "https://www.example.com/walking-meditation",
        imageUrl: placeholderImages.activity3,
      },
      {
        title: "Peaceful Journaling Prompts",
        description: "Reflective writing exercises focused on gratitude and present-moment awareness.",
        link: "https://www.example.com/peaceful-journaling",
        imageUrl: placeholderImages.activity4,
      },
    ],
    movies: [
      {
        title: "Meditative Nature Documentaries",
        description: "Slow, contemplative films about the natural world with minimal narration.",
        link: "https://www.netflix.com/browse",
        imageUrl: placeholderImages.movie1,
      },
      {
        title: "Gentle Japanese Films",
        description: "Thoughtful Japanese cinema known for its peaceful pacing and aesthetic beauty.",
        link: "https://www.hulu.com/",
        imageUrl: placeholderImages.movie2,
      },
      {
        title: "Spiritual Documentaries",
        description: "Explorations of spiritual practices from around the world that promote peace.",
        link: "https://www.example.com/spiritual-docs",
        imageUrl: placeholderImages.movie3,
      },
      {
        title: "Healing Soundscape Videos",
        description: "Beautiful nature footage paired with gentle ambient music for a meditative experience.",
        link: "https://www.example.com/soundscapes",
        imageUrl: placeholderImages.movie4,
      },
    ],
  },
  nostalgic: {
    food: [
      {
        title: "Classic Grilled Cheese & Tomato Soup",
        description: "The comforting childhood lunch that takes you straight back to simpler times.",
        link: "https://www.example.com/grilled-cheese",
        imageUrl: placeholderImages.food1,
      },
      {
        title: "Homemade Chocolate Chip Cookies",
        description: "The smell of freshly baked cookies that evokes memories of childhood kitchens.",
        link: "https://www.example.com/chocolate-chip-cookies",
        imageUrl: placeholderImages.food2,
      },
      {
        title: "Old-Fashioned Milkshake",
        description: "A thick, creamy milkshake made the traditional way for a taste of the past.",
        link: "https://www.example.com/classic-milkshake",
        imageUrl: placeholderImages.food3,
      },
      {
        title: "Family Recipe Revival",
        description: "Dust off an old family recipe card and recreate a dish from your heritage.",
        link: "https://www.example.com/family-recipes",
        imageUrl: placeholderImages.food4,
      },
    ],
    music: [
      {
        title: "Hits from Your High School Years",
        description: "The soundtrack of your teenage years to trigger happy memories.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DX4o2RjyLbCc2",
        imageUrl: placeholderImages.music1,
      },
      {
        title: "Classic TV & Movie Themes",
        description: "Opening songs from beloved shows and films that instantly transport you back in time.",
        link: "https://open.spotify.com/playlist/37i9dQZF1DXe0UXHUfHinP",
        imageUrl: placeholderImages.music2,
      },
      {
        title: "Childhood Favorites",
        description: "Songs from children's shows, movies, and radio that defined your early years.",
        link: "https://open.spotify.com/playlist/example24",
        imageUrl: placeholderImages.music3,
      },
      {
        title: "Retro Gaming Soundtracks",
        description: "Musical scores from classic video games that bring back hours of gaming memories.",
        link: "https://open.spotify.com/playlist/example25",
        imageUrl: placeholderImages.music4,
      },
    ],
    activities: [
      {
        title: "Photo Album Browsing",
        description: "Take time to look through old photographs, either physical albums or digital collections.",
        link: "https://www.example.com/photo-preservation",
        imageUrl: placeholderImages.activity1,
      },
      {
        title: "Retro Board Game Night",
        description: "Dust off classic board games from your childhood for a night of familiar fun.",
        link: "https://www.example.com/classic-games",
        imageUrl: placeholderImages.activity2,
      },
      {
        title: "Hometown Virtual Tour",
        description: "Use Google Maps street view to revisit places from your past that were significant.",
        link: "https://www.google.com/maps",
        imageUrl: placeholderImages.activity3,
      },
      {
        title: "Create a Memory Jar",
        description: "Write down favorite memories on slips of paper to collect in a special container.",
        link: "https://www.example.com/memory-jar",
        imageUrl: placeholderImages.activity4,
      },
    ],
    movies: [
      {
        title: "Beloved Childhood Movies",
        description: "Revisit the films that defined your early years and shaped your imagination.",
        link: "https://www.disney.com/",
        imageUrl: placeholderImages.movie1,
      },
      {
        title: "TV Shows from Your Youth",
        description: "Stream classic episodes of shows you used to rush home to watch after school.",
        link: "https://www.hulu.com/",
        imageUrl: placeholderImages.movie2,
      },
      {
        title: "Movies Set in Your Formative Decade",
        description: "Films that capture the fashion, music, and culture of your most nostalgic era.",
        link: "https://www.example.com/decade-films",
        imageUrl: placeholderImages.movie3,
      },
      {
        title: "Historical Documentaries",
        description: "Documentaries about events you lived through from a new historical perspective.",
        link: "https://www.example.com/historical-docs",
        imageUrl: placeholderImages.movie4,
      },
    ],
  },
};

export const getSuggestions = (mood: string): MoodSuggestions => {
  // Return the suggestions for the given mood, or happy as a fallback
  return suggestionDatabase[mood] || suggestionDatabase.happy;
};
