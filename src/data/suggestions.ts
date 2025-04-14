
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
  music1: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  music2: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
  activity1: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28",
  activity2: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054",
  movie1: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
  movie2: "https://images.unsplash.com/photo-1585647347384-2593bc35786b",
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
    ],
  },
};

export const getSuggestions = (mood: string): MoodSuggestions => {
  // Return the suggestions for the given mood, or happy as a fallback
  return suggestionDatabase[mood] || suggestionDatabase.happy;
};
