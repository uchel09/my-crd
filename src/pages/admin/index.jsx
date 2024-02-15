import { useChordLyricContext } from "../../context/ChordLiricContext";
import ProcessString from "../../components/ProccessingChord";
import { TransposeControl } from "../../components/TranposeControl";
import BaseLayout from "../../components/Layouts/baseLayout";
import MyInput from "../../components/MyInput";
import { useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const { handleSelectedChord } = useChordLyricContext();
  const [chordLyric, setChordLyric] = useState("");
  const [singerName, setSingerName] = useState("");
  const [genre, setGenre] = useState("");
  const [songTitle, setSongTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/chords-lyrics",
        {
          singerName,
          songTitle,
          genre,
          chordLyric,
        }
      );
      console.log("Response:", response.data);
      // Reset form fields after successful submission
      setChordLyric("");
      setSingerName("");
      setGenre("");
      setSongTitle("");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <BaseLayout>
      <div className="flex md:flex-row flex-col w-full">
        {/* form  */}
        <form
          className="w-full md:w-1/2 bg-white flex flex-col justify-between p-2"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full flex-col md:flex-row gap-4">
            <div className="flex flex-col  gap-y-4 md:w-[30%] w-full">
              <MyInput
                label="Singer"
                value={singerName}
                onChange={() => setSingerName(event.target.value)}
                name="singer-name"
              />
              <MyInput
                label="Song Title"
                value={songTitle}
                onChange={() => setSongTitle(event.target.value)}
                name="song-title"
              />
              <MyInput
                label="Genre"
                value={genre}
                onChange={() => setGenre(event.target.value)}
                name="genre"
              />
            </div>
            <div className="md:w-[70%] w-full flex flex-col">
              <label htmlFor="chordLyric" className="text-[20px]">
                Lirik dan Chord:
              </label>
              <textarea
                id="chordLyric"
                name="chordLyric"
                type="text"
                className="border-2 rounded-xl shadow-lg p-2 focus:border-blue-500 h-[60vh]"
                value={chordLyric}
                onChange={(event) => setChordLyric(event.target.value)}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="py-2 w-full mt-4 bg-blue-400 rounded-full"
          >
            {" "}
            Save Chord{" "}
          </button>
        </form>
        {/* form  */}
        <div className="w-full md:w-1/2 flex flex-col md:h-[80vh] md:overflow-scroll p-2">
          <div onClick={() => handleSelectedChord()}>
            <TransposeControl />
          </div>
          <div onClick={() => handleSelectedChord()} className="w-full mb-4">
            <h1 className="text-[25px] font-bold ">
              {songTitle} - {singerName}
            </h1>
            <h3>genre: {genre}</h3>
          </div>

          <ProcessString str={chordLyric} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default AdminPage;
