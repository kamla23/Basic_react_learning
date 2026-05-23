import { useEffect, useState } from "react";

export default function UserFinder() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null); // 🔥 important (reset old error)

    try {
      const response = await fetch("https://randomuser.me/api/");

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await response.json();
      setUser(data.results[0]);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchUser();
    }, 0);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      
      {/* 🔄 Loading State (Skeleton) */}
      {loading && (
        <div>
          <div style={styles.circleSkeleton}></div>
          <div style={styles.rectSkeleton}></div>
        </div>
      )}

      {/* ❌ Error State */}
      {error && <p>{error}</p>}

      {/* ✅ Success State */}
      {user && !loading && !error && (
        <div>
          <img
            src={user.picture.large}
            alt="user"
            style={{ borderRadius: "50%" }}
          />
          <h3>
            {user.name.first} {user.name.last}
          </h3>
        </div>
      )}

      {/* 🔘 Button */}
      <button onClick={fetchUser} style={{ marginTop: "20px" }}>
        Fetch New User
      </button>
    </div>
  );
}

const styles = {
  circleSkeleton: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#ccc",
    margin: "0 auto 10px",
  },
  rectSkeleton: {
    width: "150px",
    height: "20px",
    background: "#ccc",
    margin: "0 auto",
  },
};