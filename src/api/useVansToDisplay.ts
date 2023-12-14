import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Van } from "../types/Van";

function useVansToDisplay() {
  const [params] = useSearchParams();

  const {
    data: vans,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["vans"],
    queryFn: () =>
      fetch("/api/vans")
        .then((res) => res.json())
        .then((data) => data.vans) as Promise<Van[]>,
  });

  const type = params.get("type");

  const vansToDisplay = useMemo(() => {
    if (!type) return vans;
    return vans?.filter((van) => van.type === type);
  }, [type, vans]);

  return { data: vansToDisplay, isLoading, isError };
}

export default useVansToDisplay;
