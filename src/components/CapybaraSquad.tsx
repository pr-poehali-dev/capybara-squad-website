import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface SquadMember {
  name: string;
  element: string;
  furType: string;
  eyeColor: string;
  isLeader?: boolean;
  crown?: string;
  wings?: string;
}

const squadData: SquadMember[] = [
  {
    name: "Аура",
    element: "Вода",
    furType: "Золотой",
    eyeColor: "Белые",
    isLeader: true,
    crown: "Бронзовая",
    wings: "Чёрные",
  },
  ...Array(3)
    .fill(null)
    .map((_, i) => ({
      name: `Капибара ${i + 1}`,
      element: "Электричество",
      furType: "Обычный",
      eyeColor: "Зелёные",
    })),
  ...Array(3)
    .fill(null)
    .map((_, i) => ({
      name: `Капибара ${i + 4}`,
      element: "Вода",
      furType: "Обычный",
      eyeColor: "Зелёные",
    })),
];

export default function CapybaraSquad() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-water-dark mb-2">
          🦫 Отряд Капибар Ауры
        </h1>
        <p className="text-lg text-muted-foreground">
          Сила армии:{" "}
          <span className="text-capybara-gold font-semibold">10/10</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {squadData.map((member, index) => (
          <Card
            key={index}
            className={`transition-all hover:shadow-lg ${
              member.isLeader
                ? "ring-2 ring-capybara-gold bg-gradient-to-br from-water-green to-blue-50"
                : "bg-gradient-to-br from-slate-50 to-slate-100"
            }`}
          >
            <CardHeader className="text-center">
              <div className="text-6xl mb-2">
                {member.isLeader ? "👑🦫" : "🦫"}
              </div>
              <CardTitle className="text-xl">
                {member.name}
                {member.isLeader && (
                  <Badge className="ml-2 bg-capybara-bronze text-white">
                    Лидер
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon
                  name={member.element === "Вода" ? "Droplets" : "Zap"}
                  size={16}
                  className={
                    member.element === "Вода"
                      ? "text-water-blue"
                      : "text-electric-bright"
                  }
                />
                <span className="text-sm font-medium">
                  Элемент: {member.element}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="Shirt" size={16} className="text-capybara-normal" />
                <span className="text-sm">Мех: {member.furType}</span>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="Eye" size={16} className="text-green-600" />
                <span className="text-sm">Глаза: {member.eyeColor}</span>
              </div>

              {member.crown && (
                <div className="flex items-center gap-2">
                  <Icon
                    name="Crown"
                    size={16}
                    className="text-capybara-bronze"
                  />
                  <span className="text-sm">Корона: {member.crown}</span>
                </div>
              )}

              {member.wings && (
                <div className="flex items-center gap-2">
                  <Icon name="Bird" size={16} className="text-slate-700" />
                  <span className="text-sm">Крылья: {member.wings}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
