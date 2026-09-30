/**
 * Visible marker for missing information, rendered in development only.
 * Production builds render nothing, so visitors never see it.
 */
export function Todo({ children }: { children: string }) {
  if (process.env.NODE_ENV === "production") return null;
  return <span className="todo">TODO: {children}</span>;
}
