import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react";

export default forwardRef(function Checkbox(
  { className = "", ...props }: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      {...props}
      ref={ref}
      type="checkbox"
      className={
        "rounded border-gray-300 text-primary shadow-sm focus:ring-primary " +
        className
      }
    />
  );
});
