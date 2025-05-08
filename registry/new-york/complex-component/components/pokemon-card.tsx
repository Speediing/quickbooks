import { cache } from "react";
import { getPokemon } from "@/registry/new-york/complex-component/lib/pokemon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PokemonImage } from "@/registry/new-york/complex-component/components/pokemon-image";
import { Progress } from "@/components/ui/progress";

const cachedGetPokemon = cache(getPokemon);

export async function PokemonCard({ name }: { name: string }) {
  const pokemon = await cachedGetPokemon(name);

  if (!pokemon) {
    return null;
  }

  const stats = pokemon.stats.reduce((acc, stat) => {
    acc[stat.stat.name] = stat.base_stat;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg font-semibold capitalize">
          {pokemon.name}
        </CardTitle>
        <div className="text-sm text-gray-500">
          #{pokemon.id.toString().padStart(3, "0")}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="mb-4 flex justify-center">
          <div className="h-32 w-32">
            <PokemonImage name={pokemon.name} number={pokemon.id} />
          </div>
        </div>
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">HP</span>
              <span className="font-medium">{stats.hp}</span>
            </div>
            <Progress value={(stats.hp / 255) * 100} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Attack</span>
              <span className="font-medium">{stats.attack}</span>
            </div>
            <Progress value={(stats.attack / 255) * 100} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Defense</span>
              <span className="font-medium">{stats.defense}</span>
            </div>
            <Progress value={(stats.defense / 255) * 100} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
