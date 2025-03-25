import { forwardRef, useId } from "react";

const Select = forwardRef(function Select(
  { label, className = "", options = [], ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full flex gap-[4px] flex-col">
      {label && (
        <label className="font-semibold" htmlFor={id}>
          {label}
        </label>
      )}

      <select
        className={`bg-transparent outline-none border-[1px] border-zinc-500 py-[4px] px-[5px] rounded-lg text-white bg-zinc-950 ${className}`}
        id={id}
        ref={ref}
        {...props}
        required
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
