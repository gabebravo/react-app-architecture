export default function RqMessage({ message = '' }) {
  return message ? (
    <div className="flex justify-center mt-8">
      <span className="text-4xl">
        {message}
      </span>
    </div>
  ) : null
}