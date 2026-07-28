export default function FieldError({ errors }: { errors: unknown[] }) {
  if (errors.length === 0) return null;

  const [error] = errors;
  const message = typeof error === 'string' ? error : (error as { message?: string } | undefined)?.message;

  if (!message) return null;

  return <span className="text-xs text-destructive">{message}</span>;
}
