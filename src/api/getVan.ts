async function getVans(id: string) {
  const res = await fetch(`/api/vans/${id}`);

  if (!res.ok) {
    throw new Response("Failed to fetch the van", { status: res.status });
  }
  const data = await res.json();
  return data.vans;
}

export default getVans;
