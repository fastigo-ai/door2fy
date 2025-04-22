import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const Loader = ({ loading }) => {
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
        <FadeLoader
          color="#06b6d4" // Tailwind yellow-400
          loading={loading}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  );
};

export default Loader;
