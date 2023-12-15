export async function getVans(id?: string) {
  const url = id ? `/api/vans/${id}` : `/api/vans`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Response("Failed to fetch vans", { status: res.status });
  }

  const data = await res.json();
  return data.vans;
}
