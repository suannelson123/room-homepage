import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


const App = () => {


  return (
    <>
      <div className=" w-full min-h-[100vh] mx-[auto]">
        <Navbar />
        <Hero />
      </div>


    </>
  );
};

export default App;
