import languageSelect from '../../assets/icons/language-select.svg'

const RandomSelect = ({ selectedOption, setSelectedOption, options, logo}) => {
  return (
    <div className={`relative border border-zinc-400 bg-zinc-800 rounded-[4px] ${logo ? "h-full w-[135px]" : "h-[33px] w-[254.4px]"}`}>
      {logo && <div className="absolute top-2 left-2">{logo}</div>}

      <select 
        onChange={(e) => {
          const selectedItem = options.find(item => item.value === e.target.value);
          setSelectedOption({title:selectedItem.title,value:e.target.value});
        }} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
        {options.map(item => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>

      <p  className={`absolute top-1 text-white font-roboto text-[16px] left-0 pointer-events-none ${ logo ? "left-10" : "left-2"}`}>
        {selectedOption.title}
      </p>

      <img 
        src={languageSelect} 
        alt="Dropdown Icon" 
        className="absolute top-1/2 right-2 -translate-y-1/2 w-4 h-4 pointer-events-none" 
      />
    </div>
  );
};

export default RandomSelect;
