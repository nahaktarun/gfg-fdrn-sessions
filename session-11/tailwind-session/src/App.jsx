// 1. about the Margin:
// - `m-{size}`: All sides
// - `mx-{size}`: Horizontal
// - `my-{size}`: Vertical
// - `mt-{size}`: Top
// - `mr-{size}`: Right
// - `mb-{size}`: Bottom
// - `ml-{size}`: Left

// 2. Padding:
// - `p-{size}`: All sides
// - `px-{size}`: Horizontal
// - `py-{size}`: Vertical
// - `pt-{size}`: Top
// - `pr-{size}`: Right
// - `pb-{size}`: Bottom
// - `pl-{size}`: Left
// sizes -> 0, 0.5 ,...... 96

// 3. Typography
// 3.1 Font size
// text-xs -> extra small
// text-sm -> small
// text-base -> base size (parent size of text)
// text-lg -> larger text
// text-xl -> text extra large
// text-2xl to text-9xl -> larger text sizes.
// 3.2 font weight (100-800):
// font-thin -> 100
// font-light -> 300
// font-normal -> 400
// font-medium -> 500
// font-semibold -> 600
// font-bold -> 700
// font-extrabold -> 800

// 3.3 Alignment:
// text-left
// text-right
// text-center
// text-justify : justify the content parent alignment of the text container.

// 3.4. text color:
// text-{color}-{shade}(100-800)
// text-blue-100

// bg-{color}-{shade}

// inline css is given higher precedence - CSS

// 4. Border
// 4.1 border width:
// border : 1px border around the component
// border-{size} : Boarder size will be between (1-8)
// border-{side}-{size}
// 4.2 colors to border
// border-{color}-{shade}
// border-blue-100

function Container() {
  return (
    <div>
      <div className="mb-8 ">
        <h3 className="text-xl font-semibold mb-4">container</h3>
        <div className="container mx-auto bg-gray-200 p-4">Centered Div</div>
      </div>

      {/* Display -> block, inline, inline-block */}
      <div className="mb-8">
        <div className="">
          <div className="block bg-blue-200">Block element</div>
          <span className="inline bg-green-200"> Inline</span>
          <div className="inline-block bg-red-200">Block inline</div>
          <span className="block bg-blue-200">Block element</span>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex flex-row justify-center">
          <div className="bg-blue-300 p-4">Blue</div>
          <div className="bg-red-300 p-4">Blue</div>
          <div className="bg-green-300 p-4">Blue</div>
        </div>
        <div className="flex-col justify-center">
          <div className="bg-blue-300 p-4">Blue</div>
          <div className="bg-red-300 p-4">Blue</div>
          <div className="bg-green-300 p-4">Blue</div>
        </div>
      </div>

      {/* Grids: -> */}
      <div className="mb-8">
        <div className="grid sm:grid-cols-3 md:grid-cols-2">
          <div className="bg-blue-300 p-4">Blue</div>
          <div className="bg-blue-300 p-4">Blue</div>
          <div className="bg-blue-300 p-4">Blue</div>
          <div className="bg-blue-300 p-4">Blue</div>
          <div className="bg-blue-300 p-4">Blue</div>
        </div>
      </div>

      {/* Responsive design */}

      <div className="mb-8">
        <div className="bg-blue-400 text-white w-full sm:w-3/4 md:w-2/3 lg:w-1/3 xl:w-2/3">
          Responsive Div
        </div>
      </div>
    </div>
  );
}

// Bigger display to smaller display size

function App() {
  return (
    <div>
      <Container />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
