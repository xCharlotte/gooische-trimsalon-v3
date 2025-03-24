import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  InputHTMLAttributes,
} from "react";

export default forwardRef(function TextInput(
  {
    type = "text",
    className = "",
    isFocused = false,
    ...props
  }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
  ref
) {
  const localRef = useRef<HTMLInputElement>(null);

  /**
   * //NOTE:
   * By default, the ref points to the entire component, which causes issues with react-hook-form.
   * Using useImperativeHandle, we ensure that the ref directly points to the <input> element.
   * This allows react-hook-form to properly manage the input (validation, retrieving values, etc.).
   */
  useImperativeHandle(ref, () => localRef.current as HTMLInputElement);

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <input
      {...props}
      type={type}
      className={
        "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
        className
      }
      ref={(el) => {
        localRef.current = el; // Save in localRef
        if (typeof ref === "function") {
          ref(el); // Support callback refs
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
        }
      }}
    />
  );
});
