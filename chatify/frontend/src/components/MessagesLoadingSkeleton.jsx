function MessagesLoadingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
          <div className="h-10 w-32 rounded-2xl bg-gray-200 animate-pulse" />
        </div>
      ))}
    </div>
  );
}

export default MessagesLoadingSkeleton;
