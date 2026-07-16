import { useEffect, useState } from "react";

export default function OAuthCallback() {
  const [status, setStatus] = useState("Authorizing...");
  const [code, setCode] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const authCode = params.get("code");
    const error = params.get("error");

    if (error) {
      setStatus("Authorization denied. You can close this tab.");
      return;
    }

    if (authCode) {
      setCode(authCode);
      setStatus("✓ Authorization successful. Copy the code below and send it to OpenClaw.");
    } else {
      setStatus("No code found. Please try again.");
    }
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F8F7F4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter, sans-serif",
      padding: "40px 20px"
    }}>
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <div style={{ fontSize: "28px", fontWeight: 300, letterSpacing: "10px", color: "#261a0f", marginBottom: "32px" }}>KYNE</div>
        <div style={{ fontSize: "16px", color: "#261a0f", marginBottom: "20px" }}>{status}</div>
        {code && (
          <div style={{
            background: "#fff",
            border: "1px solid #d4a574",
            borderRadius: "4px",
            padding: "20px",
            fontSize: "13px",
            fontFamily: "monospace",
            color: "#261a0f",
            wordBreak: "break-all",
            marginTop: "16px"
          }}>
            {code}
          </div>
        )}
        {code && (
          <button
            onClick={() => { navigator.clipboard.writeText(code); }}
            style={{
              marginTop: "16px",
              background: "#261a0f",
              color: "#F8F7F4",
              border: "none",
              borderRadius: "4px",
              padding: "12px 32px",
              fontSize: "12px",
              letterSpacing: "2px",
              cursor: "pointer"
            }}
          >
            COPY CODE
          </button>
        )}
      </div>
    </div>
  );
}
