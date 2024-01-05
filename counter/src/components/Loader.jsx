import React, { useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  const [loading, setLoading] = useState(false);

  const simulateAPICall = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  };

  return (
    <Box>
      <button onClick={simulateAPICall}>Simulate API Call</button>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}

export default Loader;

