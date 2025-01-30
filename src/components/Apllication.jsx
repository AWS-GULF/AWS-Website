import { useRef, useState } from "react";
import elect from "../../public/assets/icons/elect.svg";
export default function JobApplicationForm() {
  const [resume, setResume] = useState(null);
  const fileInputRef = useRef(null);

  const handleResumeUpload = (event) => {
    if (event.target.files.length > 0) {
      setResume(event.target.files[0].name);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="p-4 border rounded-lg mb-6 bg-gray-50 sm:flex flex-col items-center justify-center  ">
      <div className="flex-col sm:w-[65%] w-full ">
      <h2 className="font-semibold flex items-center">
          <span>
            <img src={elect} alt="" />
          </span>{" "}
          Autofill application
        </h2>
        <p className="text-sm text-gray-600">
          Save time by importing your resume in one of the following formats:
          <span className="font-medium">
            {" "}
            .pdf, .doc, .docx, .odt, or .rtf.
          </span>
        </p>

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.doc,.docx,.odt,.rtf"
          onChange={handleResumeUpload}
        />
      </div>

      <div className="sm:w-[35%] w-full">
    
    <button
              onClick={() => fileInputRef.current.click()}
              className="mt-3 bg-primary text-white px-4 py-2 rounded-lg"
            >
              Import resume from ▼
            </button>
    </div>
        {resume && (
          <p className="mt-2 text-sm text-primary">Selected: {resume}</p>
        )}
      </div>

      <h3 className="font-bold text-lg mb-3">Personal information</h3>

      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span>First name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
            <span className="text-red-500">*</span>Last name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border rounded-md p-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
          <span className="text-red-500">*</span>EMAIL
          </label>
          <input
            type="email"
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            NOTES
          </label>
          <textarea className="mt-1 block w-full border rounded-md p-2 h-24"></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg"
        >
          Contact Us Now
        </button>
      </form>
    </div>
  );
}
