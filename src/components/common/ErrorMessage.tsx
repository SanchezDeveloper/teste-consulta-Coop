interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-destructive text-destructive-foreground p-4 rounded-md text-sm">
      {message}
    </div>
  );
}