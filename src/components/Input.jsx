import { useId, forwardRef } from "react";
import RTE from "./RTE";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
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
      {type === "rte" ? (
        <RTE {...props} />
      ) : (
        <input
          type={type}
          className={`bg-transparent outline-none border-[1px] border-zinc-500 py-2 px-[5px] placeholder:text-[14px] rounded-lg ${className}`}
          id={id}
          ref={ref}
          {...props}
          required
        />
      )}
    </div>
  );
});

export default Input;
