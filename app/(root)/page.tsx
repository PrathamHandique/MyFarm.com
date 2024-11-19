import SearchForm from "../components/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{ query?: string }>;}) 
{
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Share your myfarm story,
          <br />
          connect with other myfarmers
        </h1>
        <p className="sub-heading !max-w-3xl">
          Join the community of myfarmers and share your story with
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
