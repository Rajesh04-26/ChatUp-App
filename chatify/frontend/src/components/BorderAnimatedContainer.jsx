function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full bg-gray rounded-3xl shadow-xl overflow-hidden">
      {children}
    </div>
  );
}

export default BorderAnimatedContainer;
