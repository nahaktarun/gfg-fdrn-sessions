import { useState, useRef } from "react";
function Controlled_UnControlled_3() {
  const [controlledValue, setControlledValue] = useState("");

  const [unControlledValue, setUnControlledValue] = useState("");

  const unControlledValuesRef = useRef(null);

  const handleControlledSubmit = (e) => {
    e.preventDefault();
    alert(`${controlledValue}`);
  };

  const handleUnControlledSubmit = (e) => {
    e.preventDefault();
    const value = unControlledValuesRef.current.value;
    setUnControlledValue(value);
    alert(`${value}`);
  };
  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold mb-4">Controlled Component</h1>
          <form className="space-y-4" onSubmit={handleControlledSubmit}>
            <div>
              <label className="block mb-2">Name:</label>
              <input
                type="text"
                value={controlledValue}
                onChange={(e) => setControlledValue(e.target.value)}
                placeholder="Enter Your name"
                className="w-full p-2 border rounded"
              />
              <p className="mt-2 text-sm text-gray-600">
                Current Value: {controlledValue}
              </p>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold mb-4">
            Un-Controlled Component
          </h1>
          <form className="space-y-4" onSubmit={handleUnControlledSubmit}>
            <div>
              <label className="block mb-2">Name:</label>
              <input
                type="text"
                ref={unControlledValuesRef}
                defaultValue=""
                placeholder="Enter Your name"
                className="w-full p-2 border rounded"
              />
              {unControlledValue && (
                <p className="mt-2 text-sm text-gray-600">
                  Current Value: {unControlledValue}
                </p>
              )}

              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Controlled_UnControlled_3;
