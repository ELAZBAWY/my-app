export const metadata = {
  title: "Article Page",
};

export default function page({ children }) {
  return (
    <div>
      <h2>Articles</h2>
      <div
        style={{
          marginTop: "50px",
          background: "blue",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
