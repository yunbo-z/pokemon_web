import React from "react";

const PokeCard = (props) => {
  const { item, imageSrc, description } = props;
  return (
    <div className="bg-[#CA8446]/80 w-2xl h-96 rounded-2xl pt-18 px-11 py-10 flex flex-col items-center justify-between relative text-black">
      {description ?
        <p style={{ fontFamily: 'Jua' }} className="text-lg">{description}</p>
        :
        <div style={{ fontFamily: 'Jua' }} className="w-full bg-gray-300/50 px-5 py-3">Loading</div>
      }
      <div className="flex flex-col absolute bottom-3 right-15">
        {imageSrc ?
          <img
            src={imageSrc}
            alt={"Illustration of the Pokemon " + item?.name}
            title={item?.name}
            className="self-end w-66"
          />
          :
          <div className="w-66 h-52 bg-gray-300/70 flex place-items-center justify-center">Loading...</div>
        }
        <p style={{ fontFamily: 'Jua' }} className="text-xl font-bold text-center">{item ? item.name.toUpperCase() : "Loading"}</p>
      </div>
    </div>
  );
};
export default PokeCard;
