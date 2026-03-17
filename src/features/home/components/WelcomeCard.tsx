import { Card } from "@shared/ui/Card";
import { useEffect, useState } from "react";
import { supabase } from "../../../services/supabaseClient";

export function WelcomeCard() {
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        setName("");
        return;
      }

      const userName = data.user.user_metadata?.name;
      setName(userName?.trim() || "");
    }

    fetchUser();
  }, []);

  return (
    <Card className="bg-blue-700 h-min w-full py-9">
      <p className="font-medium text-3xl">
        {name ? `Bem-vindo(a) de volta, ${name}!` : "Bem-vindo(a) de volta!"}
      </p>
      <p className="mt-2">Pronto para começar seu treino?</p>
    </Card>
  );
}
