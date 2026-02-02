import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input as ShadInput } from "@/components/ui/input";

interface InputProps extends React.ComponentProps<"input"> {
  id: string;
  label: string;
  type?: string;
  hasLabel?: boolean;
  placeholder?: string;
  error?: {
    hasError?: boolean;
    message: string;
  };
  fullsize?: boolean;
}

export function Input({
  id,
  label,
  type = "text",
  hasLabel,
  placeholder,
  error,
  fullsize,
  ...props
}: InputProps) {
  return (
    <Field className={`${fullsize ? "w-full" : "w-auto"}`}>
      {hasLabel && (
        <FieldLabel htmlFor={id} className="text-yellow-500/80">
          {label}
        </FieldLabel>
      )}
      <ShadInput
        id={id}
        type={type}
        placeholder={placeholder}
        {...props}
        aria-invalid={error?.hasError}
      />
      {error?.hasError && (
        <FieldDescription className="text-red-400">
          {error.message}
        </FieldDescription>
      )}
    </Field>
  );
}
