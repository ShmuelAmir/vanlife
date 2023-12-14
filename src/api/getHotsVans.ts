async function getHostVans() {
  const res = await fetch(`/api/host/vans`);

  if (!res.ok) {
    throw new Response("Failed to fetch vans", { status: res.status });
  }

  const data = await res.json();
  return data.vans;
}

export default getHostVans;
