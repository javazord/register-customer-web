import Navbar from "./views/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <div className="h-screen bg-slate-900">
        <Navbar />
        <AppRoutes />
      </div>
    </>
  );
}
