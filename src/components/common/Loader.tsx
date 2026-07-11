export default function Loader({ label = 'Loading' }: { label?: string }) {
  return (
    <div className="flex min-h-[40vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-line" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" />
        </div>
        <p className="text-sm font-medium text-muted">{label}</p>
      </div>
    </div>
  );
}
