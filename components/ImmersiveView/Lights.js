const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        intensity={0.7}
        color={"white"}
        position={[0, 10, -5]}
        rotation={[]}
      />
      <directionalLight
        intensity={0.6}
        color={"white"}
        position={[0, 10, 5]}
        rotation={[]}
      />
    </>
  );
};

export default Lights;
