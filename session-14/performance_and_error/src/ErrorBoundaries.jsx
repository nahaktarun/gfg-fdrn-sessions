import React, { useEffect, useState } from "react";

// Error Boundaries :
// what is error boundaries ?
// - catch the javascript error -> ErrorBoundaries(child component) -> componentTree(causing the error) -> display the error in fallback page. (dev env)
// - Logging of errors.

function ErrorBoundary({ fallback, children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.log("Uncaught error:", error);
      setHasError(true);
    };
    window.addEventListener("error", errorHandler);

    return () => window.removeEventListener("error", errorHandler);
  }, []);

  if (hasError) return fallback;
  return children;
}
// errorLens
function ErrorProneComponent({ shouldThrow = false }) {
  if (shouldThrow) throw new Error("Error Occurred and component crashed...");
  return <div>No error found</div>;
}

function ErrorBoundariesComp() {
  const [shouldThrow, setShouldThrow] = useState(false);

  return (
    <>
      <ErrorBoundary
        fallback={<h2>Something went wrong within the component</h2>}
      >
        <ErrorProneComponent shouldThrow={shouldThrow} />
      </ErrorBoundary>
      <button
        onClick={() => {
          setShouldThrow(true);
        }}
      >
        Throw error
      </button>
    </>
  );
}

export default ErrorBoundariesComp;
