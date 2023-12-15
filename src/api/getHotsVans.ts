export async function getHostVans(id?: string) {
  const url = id ? `/api/host/vans/${id}` : `/api/host/vans`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Response("Failed to fetch vans", { status: res.status });
  }

  const data = await res.json();
  return data.vans;
}
