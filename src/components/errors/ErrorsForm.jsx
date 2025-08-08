export default function ErrorsForm({ error }) {
  return error && <p className="text-red-500 text-sm">{error}</p>;
}
