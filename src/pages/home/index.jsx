import { useEffect, useState } from "react";
import BaseLayout from "../../components/Layouts/baseLayout";
import axios from "axios";
import ProcessString from "../../components/ProccessingChord";
import { TransposeControl } from "../../components/TranposeControl";
// import { useChordLyricContext } from "../../context/ChordLiricContext";

const Home = () => {
  // const { handleSelectedChord } = useChordLyricContext();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [chordLiricData, setChordLyricData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/chords-lyrics/chord/65c49d405c147d0b56d430ac`
        );
        console.log(response.data.data);
        setChordLyricData(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData(); // Panggil fungsi async di dalam useEffect
  }, []);
  console.log(chordLiricData.chordLyric);
  return (
    <BaseLayout>
      <TransposeControl />
      <ProcessString str={chordLiricData?.chordLyric} />
    </BaseLayout>
  );
};

export default Home;
