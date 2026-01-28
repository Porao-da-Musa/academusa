import {
  Activity,
  Timer,
  TrendingUp,
  Flame,
  MoveUp,
  MoveDown,
  BicepsFlexed,
  ListChecks,
  Map,
} from "lucide-react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

const name = "Alex";
const trains = "5/4";
const average_train = 20;
const average_minutes = 45;
const train_target = 60;
const personal_records = 3;
const ocupancy_rate = 30;

const todayWorkout = [
  { exercise: "Supino Reto", equipment: "Barra Livre", sets: 4, reps: 12 },
  { exercise: "Crucifixo Inclinado", equipment: "Halteres", sets: 3, reps: 15 },
  { exercise: "Tríceps Testa", equipment: "Barra W", sets: 3, reps: 12 },
  { exercise: "Tríceps Corda", equipment: "Polia Alta", sets: 3, reps: 15 },
  { exercise: "Rosca Direta", equipment: "Barra EZ", sets: 4, reps: 10 },
];

export default function Home() {
  return (
    <div className="bg-gray-50 p-6 justify-center px-12">
      <div className="flex w-full h-min" id="welcome-card">
        <Card className="bg-blue-700 h-min w-full py-9">
          <p className="font-medium text-3xl">Bem vindo de volta, {name}!</p>
          <p className="mt-2">Pronto para começar seu treino?</p>
        </Card>
      </div>

      <div
        className="flex flex-col md:grid md:grid-cols-2 md:gap-2 lg:flex lg:flex-row"
        id="metrics-cards"
      >
        <Card className="bg-white h-[25vh] w-full  flex flex-col">
          <div className="top flex">
            <p className="font-light text-start text-base text-gray-600">
              Treinos Esta Semana
            </p>
            <Activity className="h-6 w-6 text-blue-600 ml-auto" />
          </div>

          <p className="font-normal text-2xl mt-3 text-black flex flex-1">
            {trains}
          </p>

          <p
            className={`flex items-center gap-1 text-sm mt-2 ${average_train > 0 ? "text-green-600" : "text-red-600"}`}
          >
            {average_train < 0 ? <MoveDown size={10} /> : <MoveUp size={10} />}
            <span>{Math.abs(average_train)}% da semana passada</span>
          </p>
        </Card>

        <Card className="bg-white h-[25vh] w-full flex flex-col">
          <div className="top flex">
            <p className="font-light text-start text-gray-600">Tempo Médio</p>
            <Timer className="h-6 w-6 text-purple-600 ml-auto" />
          </div>
          <div className="mid flex-1">
            <p className="font-normal text-2xl mt-3 text-black">
              {average_minutes}min
            </p>
          </div>
          <div className="bottom">
            <p className="text-sm text-purple-600">Meta: {train_target}min</p>
          </div>
        </Card>

        <Card className="bg-white h-[25vh] w-full flex flex-col">
          <div className="top flex">
            <p className="font-light text-start text-gray-600">
              Recordes Pessoais
            </p>
            <TrendingUp className="h-6 w-6 text-orange-600 ml-auto" />
          </div>
          <div className="mid flex-1">
            <p className="font-normal text-2xl mt-3 text-black">
              {personal_records}
            </p>
          </div>
          <div className="bottom">
            <p className="text-sm text-orange-600">Novos esse mês</p>
          </div>
        </Card>

        <Card className="bg-white h-[25vh] w-full flex flex-col">
          <div className="top flex">
            <p className="font-light text-start text-gray-600">
              Lotação da Academia
            </p>
            <Flame className="h-6 w-6 text-red-600 ml-auto" />
          </div>
          <div className="mid flex-1">
            <p className="font-normal text-2xl mt-3 text-black">
              {ocupancy_rate}%
            </p>
          </div>
          <div className="bottom">
            <p
              className={`text-sm font-medium ${
                ocupancy_rate < 35
                  ? "text-green-600"
                  : ocupancy_rate < 70
                    ? "text-amber-500"
                    : "text-red-600"
              }`}
            >
              {ocupancy_rate < 35
                ? "Baixa - ótimo momento!"
                : ocupancy_rate < 70
                  ? "Média"
                  : "Alta"}
            </p>
          </div>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row" id="middle-cards">
        <Card className="bg-white w-full flex flex-col">
          <div className="bg-red-200 rounded w-fit p-2">
            <Map className="h-6 w-6 text-red-600" />
          </div>
          <span className="font-medium mt-3 text-black md:text-base">
            Ver mapa da academia
          </span>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Veja a disponibilidade de equipamentos e densidade de pessoas em
            tempo real
          </p>
        </Card>

        <Card className="bg-white w-full flex flex-col">
          <div className="bg-pink-200 rounded w-fit p-2">
            <ListChecks className="h-6 w-6 text-pink-600" />
          </div>
          <span className="font-medium mt-3 text-black text-xs md:text-base ">
            Gerenciar treino
          </span>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Crie e personalize sua rotina de treino adaptativa
          </p>
        </Card>

        <Card className="bg-white w-full flex flex-col">
          <div className="bg-purple-200 rounded w-fit p-2">
            <BicepsFlexed className="h-6 w-6 text-purple-600" />
          </div>
          <span className="font-medium mt-3 text-black text-sm md:text-base">
            Explorar exercícios
          </span>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Encontre exercícios alternativos quando o equipamento estiver
            ocupado
          </p>
        </Card>
      </div>

      <div className="flex w-full" id="workout">
        <Card className="bg-white w-full flex flex-col">
          <h2 className="text-xl font-normal text-black mb-4">
            Treino de Hoje
          </h2>

          <div className="flex flex-col gap-3 mb-4">
            {todayWorkout.map((exercise, index) => (
              <div
                key={index}
                className="bg-gray-100 w-full p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <p className="font-normal text-black">{exercise.exercise}</p>
                  <p className="text-sm text-gray-500">{exercise.equipment}</p>
                </div>
                <span className="font-normal text-gray-700">
                  {exercise.sets}x{exercise.reps}
                </span>
              </div>
            ))}
          </div>

          <Link to="/home/training">
            <Button className="!bg-blue-700 text-white w-full">
              Iniciar Treino
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
