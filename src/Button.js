

function Button() {
  return (
    <div className="flex items-center gap-2 justify-center mt-6 ml-50">
     
      <button className="bg-red-500 text-white px-3 py-1 rounded border border-red-500">
        1
      </button>

   
      <button className="text-red-500 border border-red-500 px-3 py-1 rounded">
        2
      </button>

      
      <button className="text-red-500 border border-red-500 px-3 py-1 rounded">
        →
      </button>
    </div>
  );
}

export default Button;
