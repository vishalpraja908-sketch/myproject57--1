

function Select({sort,handleSortChange}) {
  return (
    <div className="flex justify-end mb-4 mr-20">
      <select  onChange ={handleSortChange}className="border border-gray-300 rounded px-3 py-2 text-gray-700"
        value={sort} >
        <option value="default">Default sorting</option>
        <option value="title">Sort by title</option>
          <option value="price">Sort by price</option>
      </select>
    </div>
  );
}

export default Select;
