async function getVans() {
  const res = await fetch(`/api/vans`);

  if (!res.ok) {
    throw new Response("Failed to fetch vans", { status: res.status });
  }

  const data = await res.json();
  return data.vans;
}

export default getVans;
