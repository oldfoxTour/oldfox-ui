import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SuccessModal() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
        <p className="text-lg mb-6">You have received the booking info on your email.</p>
        <button
          onClick={handleGoHome}
          className="bg-[#0584c7] text-white py-3 px-6 rounded-md hover:bg-[#046da6] transition-colors"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
