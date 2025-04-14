
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Utensils, Music, Film, ActivityIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SuggestionItem from "./SuggestionItem";
import { getSuggestions } from "@/data/suggestions";

interface MoodSuggestionsProps {
  mood: string;
  onBack: () => void;
}

const MoodSuggestions: React.FC<MoodSuggestionsProps> = ({ mood, onBack }) => {
  const suggestions = getSuggestions(mood);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBack} className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Moods
        </Button>
        <h2 className="text-2xl font-bold">
          Your <span className="text-purple-600 capitalize">{mood}</span> Menu
        </h2>
      </div>

      {/* Advertisement placeholder - side */}
      <div className="float-right ml-4 mb-4 bg-gray-200 p-3 rounded-md text-center w-52 hidden md:block">
        <p className="text-gray-500 text-sm mb-2">Advertisement</p>
        <div className="h-80 flex items-center justify-center border border-dashed border-gray-400">
          <p className="text-sm text-gray-400 rotate-90">Side Ad (160×600)</p>
        </div>
      </div>

      <Tabs defaultValue="food" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="food" className="flex items-center">
            <Utensils className="mr-2 h-4 w-4" />
            Food
          </TabsTrigger>
          <TabsTrigger value="music" className="flex items-center">
            <Music className="mr-2 h-4 w-4" />
            Music
          </TabsTrigger>
          <TabsTrigger value="activities" className="flex items-center">
            <ActivityIcon className="mr-2 h-4 w-4" />
            Activities
          </TabsTrigger>
          <TabsTrigger value="movies" className="flex items-center">
            <Film className="mr-2 h-4 w-4" />
            Movies
          </TabsTrigger>
        </TabsList>

        <TabsContent value="food" className="space-y-4">
          <h3 className="text-xl font-medium">Food Suggestions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestions.food.map((item, index) => (
              <SuggestionItem
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
                linkText="View Recipe"
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          
          {/* Advertisement placeholder - in-content */}
          <div className="bg-gray-200 p-4 rounded-md text-center my-6">
            <p className="text-gray-500">Advertisement Space</p>
            <div className="h-20 flex items-center justify-center border border-dashed border-gray-400">
              <p className="text-sm text-gray-400">In-Content Ad (468×60)</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="music" className="space-y-4">
          <h3 className="text-xl font-medium">Music Suggestions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestions.music.map((item, index) => (
              <SuggestionItem
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
                linkText="Listen Now"
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          
          {/* Advertisement placeholder - in-content */}
          <div className="bg-gray-200 p-4 rounded-md text-center my-6">
            <p className="text-gray-500">Advertisement Space</p>
            <div className="h-20 flex items-center justify-center border border-dashed border-gray-400">
              <p className="text-sm text-gray-400">In-Content Ad (468×60)</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <h3 className="text-xl font-medium">Activity Suggestions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestions.activities.map((item, index) => (
              <SuggestionItem
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
                linkText="Learn More"
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          
          {/* Advertisement placeholder - in-content */}
          <div className="bg-gray-200 p-4 rounded-md text-center my-6">
            <p className="text-gray-500">Advertisement Space</p>
            <div className="h-20 flex items-center justify-center border border-dashed border-gray-400">
              <p className="text-sm text-gray-400">In-Content Ad (468×60)</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="movies" className="space-y-4">
          <h3 className="text-xl font-medium">Movie & Show Suggestions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestions.movies.map((item, index) => (
              <SuggestionItem
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
                linkText="Watch Now"
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          
          {/* Advertisement placeholder - in-content */}
          <div className="bg-gray-200 p-4 rounded-md text-center my-6">
            <p className="text-gray-500">Advertisement Space</p>
            <div className="h-20 flex items-center justify-center border border-dashed border-gray-400">
              <p className="text-sm text-gray-400">In-Content Ad (468×60)</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MoodSuggestions;
