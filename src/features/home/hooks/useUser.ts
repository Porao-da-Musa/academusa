import { useEffect, useState } from "react";
import { supabase } from "../../../services/supabaseClient";

export function useUser() {
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

  return { name };
}
