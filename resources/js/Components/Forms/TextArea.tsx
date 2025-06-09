import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  TextareaHTMLAttributes,
} from "react";

export default forwardRef(function TextArea(
  {
    className = "",
    isFocused = false,
    ...props
  }: TextareaHTMLAttributes<HTMLTextAreaElement> & { isFocused?: boolean },
  ref
) {
  const localRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <textarea
      {...props}
      className={
        "border-gray-300 focus:border-primary focus:ring-primary rounded-md shadow-sm " +
        className
      }
      ref={localRef}
    />
  );
});
