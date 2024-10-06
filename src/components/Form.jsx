import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

function Form({ selectTemp, userFormInput, load }) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <>
      <div className="h-screen w-5/12 bg-slate-50 border-r-2 border-black">
        <div className="flex pt-3">
          <div>
            <img className="h-20 w-24 mt-4" src={selectTemp?.icon} alt="Img" />
          </div>
          <div>
            <div className="flex justify-between px-5 pt-3">
              <h1 className="text-2xl font-semibold">{selectTemp?.name}</h1>
              <h4 className="text-sm">{selectTemp?.category}</h4>
            </div>
            <h3 className="px-5 mt-2">{selectTemp?.desc}</h3>
          </div>
        </div>

        <form onSubmit={handleOnSubmit}>
          <div className="px-9 mt-8">
            <div>
              <h3 className="text-xl font-semibold">
                {selectTemp?.form[0].label}
              </h3>
              <Input
                className="mt-3"
                name={selectTemp?.form[0].name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold">
                {selectTemp.form[1]?.label}
              </h3>
              {selectTemp.form[1]?.label && (
                <Textarea
                  className="mt-3"
                  name={selectTemp.form[1]?.name}
                  required={selectTemp.form[1]?.required}
                  onChange={handleInputChange}
                />
              )}
            </div>

            <Button
              type="submit"
              className="mt-6 w-full bg-purple-500 text-white hover:bg-purple-600 hover:text-white text-lg"
            >
              {load ? <Loader2Icon className="animate-spin"/> : "Generate"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
