import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface HikeRule {
  id: string;
  name: string;
  description: string;
  correctWords: string[];
  theme: string;
}

const hikeRules: HikeRule[] = [
  {
    id: "1",
    name: "Водный поход",
    description:
      "Капибары идут к озеру. Можно брать только то, что связано с водой!",
    correctWords: ["вода", "полотенце", "купальник", "очки", "крем", "зонт"],
    theme: "water",
  },
  {
    id: "2",
    name: "Лесной поход",
    description:
      "Отряд отправляется в густой лес. Берите только нужное для леса!",
    correctWords: ["палатка", "спички", "нож", "компас", "фонарик", "веревка"],
    theme: "forest",
  },
  {
    id: "3",
    name: "Горный поход",
    description: "Восхождение на гору! Нужны специальные вещи для альпинизма.",
    correctWords: [
      "веревка",
      "крючки",
      "каска",
      "карабины",
      "ботинки",
      "перчатки",
    ],
    theme: "mountain",
  },
];

export default function HikingGame() {
  const [selectedHike, setSelectedHike] = useState<HikeRule | null>(null);
  const [playerInput, setPlayerInput] = useState("");
  const [gameResult, setGameResult] = useState<"none" | "success" | "fail">(
    "none",
  );
  const [resultMessage, setResultMessage] = useState("");

  const checkAnswer = () => {
    if (!selectedHike || !playerInput.trim()) return;

    const input = playerInput.toLowerCase().trim();
    const isCorrect = selectedHike.correctWords.some(
      (word) =>
        word.toLowerCase().includes(input) ||
        input.includes(word.toLowerCase()),
    );

    if (isCorrect) {
      setGameResult("success");
      setResultMessage(
        `🎉 Отлично! "${playerInput}" подходит для ${selectedHike.name.toLowerCase()}а! Капибары берут тебя в поход!`,
      );
    } else {
      setGameResult("fail");
      setResultMessage(
        `😔 "${playerInput}" не подходит для этого похода. Капибары оставляют тебя дома. Попробуй ещё раз!`,
      );
    }
  };

  const resetGame = () => {
    setSelectedHike(null);
    setPlayerInput("");
    setGameResult("none");
    setResultMessage("");
  };

  const generateCustomHike = () => {
    const customThemes = ["космический", "подводный", "зимний", "пустынный"];
    const randomTheme =
      customThemes[Math.floor(Math.random() * customThemes.length)];

    const customHike: HikeRule = {
      id: "custom",
      name: `${randomTheme.charAt(0).toUpperCase() + randomTheme.slice(1)} поход`,
      description: `Особенный ${randomTheme} поход! Придумай, что взять с собой.`,
      correctWords: ["еда", "вода", "одежда", "инструменты", "защита"],
      theme: "custom",
    };

    setSelectedHike(customHike);
    setGameResult("none");
    setResultMessage("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card className="mb-6 bg-gradient-to-r from-water-green to-electric-yellow">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Icon name="Backpack" size={28} />
            Игра "Поход с Капибарами"
          </CardTitle>
          <p className="text-muted-foreground">
            Выбери поход и скажи, что возьмёшь с собой. Капибары решат, брать ли
            тебя!
          </p>
        </CardHeader>
      </Card>

      {!selectedHike ? (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center mb-4">
            Выбери тип похода:
          </h3>

          <div className="grid gap-4 md:grid-cols-3">
            {hikeRules.map((hike) => (
              <Card
                key={hike.id}
                className="cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                onClick={() => setSelectedHike(hike)}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">
                    {hike.theme === "water" && "🏊‍♂️"}
                    {hike.theme === "forest" && "🌲"}
                    {hike.theme === "mountain" && "⛰️"}
                  </div>
                  <CardTitle className="text-lg">{hike.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {hike.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button
              onClick={generateCustomHike}
              variant="outline"
              className="bg-gradient-to-r from-purple-100 to-pink-100"
            >
              <Icon name="Shuffle" size={16} className="mr-2" />
              Сгенерировать случайный поход
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {selectedHike.theme === "water" && "🏊‍♂️"}
                {selectedHike.theme === "forest" && "🌲"}
                {selectedHike.theme === "mountain" && "⛰️"}
                {selectedHike.theme === "custom" && "✨"}
                {selectedHike.name}
              </CardTitle>
              <p className="text-muted-foreground">
                {selectedHike.description}
              </p>
            </CardHeader>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <label className="text-sm font-medium">
                  Что ты возьмёшь с собой в поход?
                </label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Например: палатка, вода, фонарик..."
                    value={playerInput}
                    onChange={(e) => setPlayerInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && checkAnswer()}
                    disabled={gameResult !== "none"}
                  />
                  <Button
                    onClick={checkAnswer}
                    disabled={!playerInput.trim() || gameResult !== "none"}
                  >
                    Проверить
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {gameResult !== "none" && (
            <Card
              className={`${
                gameResult === "success"
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <p className="text-lg">{resultMessage}</p>
                  <div className="flex gap-2 justify-center">
                    <Button onClick={resetGame} variant="outline">
                      <Icon name="RotateCcw" size={16} className="mr-2" />
                      Выбрать другой поход
                    </Button>
                    <Button
                      onClick={() => {
                        setPlayerInput("");
                        setGameResult("none");
                        setResultMessage("");
                      }}
                      variant="default"
                    >
                      <Icon name="RefreshCw" size={16} className="mr-2" />
                      Попробовать ещё раз
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedHike.id !== "custom" && (
            <Card className="bg-blue-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Подсказка - примеры правильных ответов:
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {selectedHike.correctWords.map((word) => (
                      <Badge key={word} variant="secondary" className="text-xs">
                        {word}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
