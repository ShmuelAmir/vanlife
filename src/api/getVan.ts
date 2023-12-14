async function getVans(id: string) {
  const res = await fetch(`/api/vans/${id}`);

  if (!res.ok) {
    throw {
      message: "Failed to fetch the van",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export default getVans;
