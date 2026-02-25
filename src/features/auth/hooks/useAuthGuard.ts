import { useEffect, useState } from "react";
import { supabase } from "../../../services/supabaseClient";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";

type UseAuthGuardReturn = {
  loading: boolean;
  authenticated: boolean;
};

export function useAuthGuard(): UseAuthGuardReturn {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (!isMounted) return;

      setAuthenticated(!error && Boolean(user));
      setLoading(false);
    };

    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        if (!isMounted) return;
        setAuthenticated(Boolean(session));
      },
    );

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return { loading, authenticated };
}
