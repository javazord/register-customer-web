export default function Dialog({ erro, msg, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded p-6 max-w-md w-full relative">
        <h2 className="text-xl font-bold mb-4">{erro ? "Erro" : "Message"}</h2>

        {msg && <p className="mb-6">{msg}</p>}

        {erro && (
          <pre className="bg-gray-100 p-2 mb-2 rounded text-sm text-red-500 overflow-auto max-h-40">
            {erro}
          </pre>
        )}

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="text-sm bg-red-600 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
