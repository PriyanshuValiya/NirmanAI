import Form from "@/components/Form";
import Output from "@/components/Output";
import { useParams } from "react-router-dom";
import sampleOutlets from "../../datas/data.js";
import { chatSession } from "../utils/AiModel.js";
import { useState } from "react";

function CreatePage() {
  const { id } = useParams();
  const [load, setLoad] = useState(false);
  const [aiOutput, setAiOutput] = useState("");

  const selectTemp = sampleOutlets.find((item) => item.slug == id);

  const GenerateAIContent = async (formData) => {
    setLoad(true);

    try {
      const SelectedPrompt = selectTemp?.aiPrompt;
      const finalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

      const result = await chatSession.sendMessage(finalAIPrompt);
      setAiOutput(result?.response.text());
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      <div className="flex">
        <Form
          selectTemp={selectTemp}
          load={load}
          userFormInput={(val) => GenerateAIContent(val)}
        />
        <Output aiOutput={aiOutput} />
      </div>
    </>
  );
}

export default CreatePage;
