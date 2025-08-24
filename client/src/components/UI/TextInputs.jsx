export default function TextInputs({ heroData, handleChange }) {
  const fields = [
    { name: "nickname", label: "Nickname" },
    { name: "realName", label: "Real Name" },
    { name: "origin_description", label: "Origin Description" },
    { name: "superpowers", label: "Superpowers" },
    { name: "catchPhrase", label: "Catch Phrase" },
  ];

  return (
    <>
      {fields.map((field) => (
        <div key={field.name} className="mt-2">
          <label>{field.label}</label>
          <input
            name={field.name}
            value={heroData[field.name]}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>
      ))}
    </>
  );
}
