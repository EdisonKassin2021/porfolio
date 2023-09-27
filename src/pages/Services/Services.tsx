import { useEffect, useState } from "react";
import CustomTextfield from "../../components/CustomTextfield/CustomTextfield";

const Services = () => {
  const [selectedText, setSelectedText] = useState("");
  const [text, setText] = useState("");

  const [selectionStart, setSelectionStart] = useState<null | number>(null);
  const [selectionEnd, setSelectionEnd] = useState<null | number>(null);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      const isClickInside = e.target.closest("p");
      if (!isClickInside) {
        setSelectedText("");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection) {
      const text = selection.toString();
      setSelectedText(text);

      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const startOffset = range.startOffset;
        const endOffset = range.endOffset;
        setSelectionStart(startOffset);
        setSelectionEnd(endOffset);
      }
    }
  };

  const handleTextChange = (value: any, _name: string) => {
    setText(value);
    setSelectedText("");
  };

  return (
    <div onMouseUp={handleTextSelection}>
      <div>Service</div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ullam
        similique nisi nobis officiis quod odio quae numquam soluta, reiciendis
        maiores ipsum eius voluptates corporis sapiente vitae culpa illo
        voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Vero a sapiente aliquid delectus? Fuga aperiam ex qui quas ratione quo
        ullam adipisci atque ab sequi? Reiciendis laudantium quaerat maxime
        totam.
      </div>

      <div>
        <CustomTextfield
          name="ok"
          id="ok"
          value={text}
          onMouseDown={() => setSelectedText("")}
          onChange={handleTextChange}
          onMouseUp={handleTextSelection} // Gérer la sélection au clic de la souris
          onTouchEnd={handleTextSelection} // Gérer la sélection sur les appareils tactiles
        />
      </div>

      <div>Texte saisi : {text}</div>
      <div>Texte sélectionné : {selectedText || "Aucune sélection"}</div>
      <div>
        Position de début de la sélection :{" "}
        {selectionStart !== null ? selectionStart : "N/A"}
      </div>
      <div>
        Position de fin de la sélection :{" "}
        {selectionEnd !== null ? selectionEnd : "N/A"}
      </div>
    </div>
  );
};

export default Services;
