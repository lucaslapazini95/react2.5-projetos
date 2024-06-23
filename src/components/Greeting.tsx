type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  return <div>Ola {name}</div>;
};

export default Greeting;
