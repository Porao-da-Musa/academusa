import { Card } from "@shared/ui/Card";
import { useUser } from "../hooks/useUser";

export function WelcomeCard() {
  const { name } = useUser();

  return (
    <Card className="bg-blue-700 h-min w-full py-9">
      <p className="font-medium text-3xl">
        {name ? `Bem-vindo(a) de volta, ${name}!` : "Bem-vindo(a) de volta!"}
      </p>
      <p className="mt-2">Pronto para começar seu treino?</p>
    </Card>
  );
}
