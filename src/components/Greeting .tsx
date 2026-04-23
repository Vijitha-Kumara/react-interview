type Prop = {
  name: string;
  city: string;
};

function Greeting({ name, city }: Prop) {
  return (
    <>
      <h1>
        {name} {city}
      </h1>
    </>
  );
}

export default Greeting;
