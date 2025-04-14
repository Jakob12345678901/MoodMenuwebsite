
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { 
  Smile, 
  Frown, 
  Coffee, 
  Music, 
  Film, 
  ActivityIcon, 
  Heart, 
  Zap, 
  Clock, 
  Sunset, 
  Sun, 
  Cloud, 
  CloudDrizzle,
  Sparkles 
} from "lucide-react";
import MoodSuggestions from "@/components/MoodSuggestions";

const moods = [
  { id: "happy", name: "Happy", icon: <Smile className="h-10 w-10 text-mood-yellow" /> },
  { id: "joyful", name: "Joyful", icon: <Sparkles className="h-10 w-10 text-mood-pink" /> },
  { id: "romantic", name: "Romantic", icon: <Heart className="h-10 w-10 text-mood-coral" /> },
  { id: "inspired", name: "Inspired", icon: <Zap className="h-10 w-10 text-mood-purple" /> },
  { id: "peaceful", name: "Peaceful", icon: <Sunset className="h-10 w-10 text-mood-teal" /> },
  { id: "nostalgic", name: "Nostalgic", icon: <Clock className="h-10 w-10 text-mood-skyblue" /> },
  { id: "sad", name: "Sad", icon: <Frown className="h-10 w-10 text-mood-lavender" /> },
  { id: "bored", name: "Bored", icon: <Coffee className="h-10 w-10 text-mood-orange" /> },
  { id: "stressed", name: "Stressed", icon: <ActivityIcon className="h-10 w-10 text-mood-maroon" /> },
  { id: "anxious", name: "Anxious", icon: <CloudDrizzle className="h-10 w-10 text-mood-mint" /> },
  { id: "energized", name: "Energized", icon: <Music className="h-10 w-10 text-mood-green" /> },
  { id: "tired", name: "Tired", icon: <Cloud className="h-10 w-10 text-mood-peach" /> },
];

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    toast({
      title: "Mood Selected",
      description: `You're feeling ${moodId}! Here are some suggestions for you.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <header className="py-6 px-4 bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-mood-purple">MoodMenu.com</h1>
          <p className="text-gray-600">Personalized suggestions based on your mood</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        {!selectedMood ? (
          <>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How are you feeling today?</h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                Select your current mood and we'll suggest food, music, activities, and movies just for you.
              </p>
            </div>

            {/* Advertisement placeholder - top */}
            <div className="bg-gray-200 p-4 mb-8 rounded-md text-center">
              <p className="text-gray-500">Advertisement Space</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-400">
                <p className="text-sm text-gray-400">Top Ad Banner (720×90)</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
              {moods.map((mood) => (
                <Card 
                  key={mood.id} 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleMoodSelect(mood.id)}
                >
                  <CardHeader className="pb-2 text-center">
                    <div className="mx-auto">{mood.icon}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="text-lg font-medium">{mood.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Advertisement placeholder - bottom */}
            <div className="bg-gray-200 p-4 rounded-md text-center mt-8">
              <p className="text-gray-500">Advertisement Space</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-400">
                <p className="text-sm text-gray-400">Bottom Ad Banner (720×90)</p>
              </div>
            </div>
          </>
        ) : (
          <MoodSuggestions mood={selectedMood} onBack={() => setSelectedMood(null)} />
        )}
      </main>

      <footer className="bg-gray-100 py-6 mt-10">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="mt-2 text-sm">No login required. Just pick a mood and get instant suggestions.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
