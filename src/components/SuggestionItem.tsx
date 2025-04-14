
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface SuggestionItemProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  imageUrl: string;
}

const SuggestionItem: React.FC<SuggestionItemProps> = ({
  title,
  description,
  link,
  linkText,
  imageUrl,
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full flex items-center justify-center" variant="outline">
            {linkText} <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default SuggestionItem;
