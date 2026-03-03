import { Card } from "@shared/ui/Card";

type WelcomeCardProps = {
  readonly name?: string;
};

export function WelcomeCard({ name }: WelcomeCardProps) {
  return (
    <Card className="bg-blue-700 h-min w-full py-9">
      <p className="font-medium text-3xl">
        {name ? `Bem vindo de volta, ${name}!` : "Bem vindo(a)!"}
      </p>
      <p className="mt-2">Pronto para começar seu treino?</p>
    </Card>
  );
}
