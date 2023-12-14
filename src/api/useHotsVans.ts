import { useQuery } from "@tanstack/react-query";

import { Van } from "../types/Van";

function useHostVans() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["host", "vans"],
    queryFn: () =>
      fetch(`/api/host/vans`)
        .then((res) => res.json())
        .then((data) => data.vans) as Promise<Van[]>,
  });

  return { data, isLoading, isError };
}

export default useHostVans;
