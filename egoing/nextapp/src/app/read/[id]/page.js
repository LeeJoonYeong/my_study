export default async function Read(props) {
  
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${props.params.id}`, { cache: 'no-store' });
  const topics = await resp.json();

  return (
    <>
      <h2>{topics.title}</h2>
      <span>{topics.body}</span>
    </>
  )
}