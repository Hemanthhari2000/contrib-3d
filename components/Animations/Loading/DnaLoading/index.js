import Head from "next/head";
import { Triangle } from "react-loader-spinner";

const TriangleLoader = () => {
  return (
    <>
      <Head>
        <title>Contrib 3D - Loading...</title>
      </Head>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </>
  );
};

export default TriangleLoader;
