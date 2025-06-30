import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CapybaraSquad from "@/components/CapybaraSquad";
import HikingGame from "@/components/HikingGame";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-water-green via-blue-50 to-electric-yellow">
      <header className="bg-white/80 backdrop-blur-sm border-b border-water-blue/20 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-3">
            <div className="text-3xl">🦫</div>
            <h1 className="text-2xl font-bold text-water-dark">
              Отряд Капибар Ауры
            </h1>
            <div className="text-3xl">💧</div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="squad" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="squad" className="flex items-center gap-2">
              <Icon name="Users" size={16} />
              Отряд
            </TabsTrigger>
            <TabsTrigger value="game" className="flex items-center gap-2">
              <Icon name="Gamepad2" size={16} />
              Игра
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-2">
              <Icon name="BarChart3" size={16} />
              Статистика
            </TabsTrigger>
            <TabsTrigger value="info" className="flex items-center gap-2">
              <Icon name="Info" size={16} />О нас
            </TabsTrigger>
          </TabsList>

          <TabsContent value="squad">
            <CapybaraSquad />
          </TabsContent>

          <TabsContent value="game">
            <HikingGame />
          </TabsContent>

          <TabsContent value="stats">
            <div className="max-w-4xl mx-auto p-6 text-center">
              <div className="bg-white/70 rounded-lg p-8 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6 text-water-dark">
                  📊 Статистика Отряда
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-water-blue/10 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-water-blue">
                      10/10
                    </div>
                    <p className="text-sm text-muted-foreground">Сила армии</p>
                  </div>
                  <div className="bg-electric-bright/10 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-electric-bright">
                      3
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Элементы электричества
                    </p>
                  </div>
                  <div className="bg-water-blue/10 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-water-blue">4</div>
                    <p className="text-sm text-muted-foreground">
                      Элементы воды
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="info">
            <div className="max-w-4xl mx-auto p-6 text-center">
              <div className="bg-white/70 rounded-lg p-8 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6 text-water-dark">
                  🌊 О нашем отряде
                </h2>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  <p className="text-lg">
                    Отряд капибар под предводительством Ауры - это дружная
                    команда, объединённая силой природных элементов.
                  </p>
                  <p>
                    Наш лидер Аура обладает редким даром управления водой и
                    носит бронзовую корону как символ мудрого руководства. Её
                    золотой мех и чёрные крылья делают её уникальной среди всех
                    капибар.
                  </p>
                  <p>
                    В нашем отряде 6 преданных рядовых: 3 с силой электричества
                    и 3 с силой воды. Вместе мы исследуем мир и отправляемся в
                    увлекательные походы!
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-water-dark/5 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            🦫 Отряд Капибар Ауры © 2025 | Создано с ❤️ для любителей природы и
            приключений
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
