export default function RqMessage({ message = '' }) {
  return message ? (
    <div className="flex justify-center">
      <h3 style={{ marginBottom: 20 }}>
        {message}
      </h3>
  </div>
  ) : null
}