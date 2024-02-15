import { useState } from "react";
import { Chords, Lyrics } from "./ChordsLiric";
import { useChordLyricContext } from "../context/ChordLiricContext";

const ProcessString = ({ str }) => {
  const [selectLine, setSelectLine] = useState(-1);
  const { handleSelectedChord } = useChordLyricContext();

  return str.split("\n").map((line, index) => {
    //Chords
    if (line.includes("<ch>")) {
      const chordsWithSpaces = line
        .replace(/<\/?ch>/g, "")
        .replace(/([A-Za-z]+)(?:\s*-\s*(\d+))?/g, (_, chords, spaces) => {
          const chordWithSpaces = spaces
            ? `${chords} ${" ".repeat(Number(spaces))}`
            : chords;
          return chordWithSpaces;
        })
        .replace(/-/g, " "); // Ganti tanda '-' dengan spasi
      return (
        <span
          key={index}
          onClick={() => setSelectLine(index)}
          className="w-full"
        >
          <Chords isLine={selectLine === index}>{chordsWithSpaces}</Chords>
        </span>
      );
      //Lyrics
    } else if (line.includes("<ly>")) {
      const liricsWithSpaces = line
        .replace(/<\/?ly>/g, "")
        .replace(/([A-Za-z]+)(?:\s*-\s*(\d+))?/g, (_, chords, spaces) => {
          const liricWithSpaces = spaces
            ? `${chords} ${" ".repeat(Number(spaces))}`
            : chords;
          return liricWithSpaces;
        })
        .replace(/-/g, " "); // Ganti tanda '-' dengan spasi
      return (
        <div
          key={index}
          onClick={() => {
            handleSelectedChord();
          }}
          className="h-[15px] flex items-center"
        >
          <Lyrics>{liricsWithSpaces}</Lyrics>
        </div>
      );
      // Enter
    } else if (line.includes("<br/>")) {
      return (
        <div
          key={index}
          className="h-4 w-full"
          onClick={() => handleSelectedChord()}
        ></div>
      );
    } else {
      return null;
    }
  });
};

export default ProcessString;