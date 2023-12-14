import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Van } from "../types/Van";

function useVan() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["vans", id],
    queryFn: () =>
      fetch(`/api/vans/${id}`)
        .then((res) => res.json())
        .then((data) => data.vans) as Promise<Van>,
  });

  return { data, isLoading, isError };
}

export default useVan;
