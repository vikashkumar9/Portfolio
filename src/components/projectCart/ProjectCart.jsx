import React from "react";

export const ProjectCart = (props) => {
  return (
    <div className="bg-lightGray rounded-lg shadow-lg overflow-hidden  w-full max-w-md mx-auto">
      {/* Image Section */}
      <div className="h-48 md:h-64 bg-cover bg-center" style={{ backgroundImage: `url(${props.image})` }}>
      </div>

      {/* Text Section */}
      <div className="p-2">
        <h5 className="text-lg font-bold text-black">{props.title}</h5>
        <p className="text-gray-200 mt-2">{props.description}</p>
      </div>
    </div>
  );
};
