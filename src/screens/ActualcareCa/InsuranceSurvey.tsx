import React, { useState } from "react";

export const InsuranceSurvey = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      {!submitted ? (
        <form
          name="insurance-survey"
          method="POST"
          data-netlify="true"
          onSubmit={() => setSubmitted(true)}
        >
          <input type="hidden" name="form-name" value="insurance-survey" />

          <label className="block mb-2 mt-4">Where are you employed?</label>
          <input name="employment" type="text" className="w-full border p-2" />

          <label className="block mb-2 mt-4">How old are you?</label>
          <input name="age" type="text" className="w-full border p-2" />

          <label className="block mb-2 mt-4">Are you a university student?</label>
          <input name="is_student" type="text" className="w-full border p-2" />

          <label className="block mb-2 mt-4">What university do you attend?</label>
          <input name="university" type="text" className="w-full border p-2" />

          <label className="block mb-2 mt-4">If you’re under 25, where are your parents employed?</label>
          <input name="parent_employment" type="text" className="w-full border p-2" />

          <label className="block mb-2 mt-4">Do you know the name of the insurance provider your (or your parent’s) company uses?</label>
          <input name="insurance_provider" type="text" className="w-full border p-2" />

          <label className="block mb-2 mt-4">
            Is there anything else you'd like us to know regarding concerns about your coverage?
          </label>
          <textarea name="coverage_concerns" rows={4} className="w-full border p-2" />

          <button type="submit" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-lg mb-4">Thanks! You're all set. Please book your intake call below.</p>
          <a
            href="https://calendly.com/actualcare/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded"
          >
            Book Intake Call
          </a>
        </div>
      )}
    </div>
  );
};