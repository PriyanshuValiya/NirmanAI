import { useEffect, useState } from "react";
import sampleOutlets from "../../datas/data";
import { set } from "date-fns";
import { Link } from "react-router-dom";

function Cards({ searchInput }) {
  const [templateList, setTemplateList] = useState(sampleOutlets);

  useEffect(() => {
    if (searchInput) {
      const filterData = sampleOutlets.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(sampleOutlets);
    }
  }, [searchInput]);

  return (
    <>
      <div className="flex flex-wrap pl-9">
        {templateList.map((ele) => (
          <Link to={`/content/${ele?.slug}`}>
            <div className="max-w-sm h-40 ml-3 mt-3 mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:border-2">
              <div className="flex items-center space-x-4 p-4">
                <img
                  className="w-16 h-16 object-cover"
                  src={ele.icon}
                  alt="Avatar"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {ele.name}
                  </h2>
                  <p className="text-gray-600 mt-2">{ele.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Cards;
