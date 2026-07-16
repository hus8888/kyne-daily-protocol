import { useState } from "react";

const signatureHtml = `<table cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border-collapse: collapse;">
  <tr>
    <td style="padding-right: 24px; border-right: 2px solid #d4a574; vertical-align: middle;">
      <div style="font-size: 26px; font-weight: 900; letter-spacing: 8px; color: #0a0a0a;">KYNE</div>
      <div style="font-size: 7px; letter-spacing: 3px; color: #d4a574; text-transform: uppercase; margin-top: 3px;">KINETIC YIELD NUTRIENT ENGINEERING</div>
    </td>
    <td style="padding-left: 24px; vertical-align: middle;">
      <div style="font-size: 16px; font-weight: 700; color: #0a0a0a; letter-spacing: 1px;">Hus Ileri</div>
      <div style="font-size: 9px; color: #999999; letter-spacing: 3px; text-transform: uppercase; margin-top: 2px;">Founder</div>
      <div style="margin-top: 8px; border-top: 1px solid #f0f0f0; padding-top: 8px;">
        <a href="mailto:hus@kynestrips.com" style="font-size: 11px; color: #d4a574; text-decoration: none;">hus@kynestrips.com</a>
        <span style="color: #dddddd; margin: 0 6px;">|</span>
        <a href="https://kynestrips.com" style="font-size: 11px; color: #d4a574; text-decoration: none;">kynestrips.com</a>
      </div>
      <div style="margin-top: 5px; font-size: 10px; color: #aaaaaa; font-style: italic; letter-spacing: 1px;">Know Yourself. Nourish. Evolve.</div>
    </td>
  </tr>
</table>`;

export default function Signature() {
  const [copied, setCopied] = useState(false);

  const copySignature = async () => {
    // Create a temporary div to hold the rendered HTML
    const div = document.createElement("div");
    div.innerHTML = signatureHtml;
    div.style.position = "fixed";
    div.style.left = "-9999px";
    document.body.appendChild(div);

    const range = document.createRange();
    range.selectNode(div);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // fallback
    }

    window.getSelection()?.removeAllRanges();
    document.body.removeChild(div);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f9f7f4",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      padding: "40px 20px"
    }}>
      <div style={{ marginBottom: "12px", fontSize: "11px", letterSpacing: "3px", color: "#999", textTransform: "uppercase" }}>
        Email Signature Preview
      </div>

      {/* Signature preview */}
      <div style={{
        background: "#ffffff",
        border: "1px solid #eeeeee",
        borderRadius: "8px",
        padding: "32px 40px",
        marginBottom: "32px",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)"
      }}
        dangerouslySetInnerHTML={{ __html: signatureHtml }}
      />

      {/* Copy button */}
      <button
        onClick={copySignature}
        style={{
          background: copied ? "#2d7d46" : "#0a0a0a",
          color: "#ffffff",
          border: "none",
          borderRadius: "4px",
          padding: "14px 40px",
          fontSize: "12px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "background 0.3s",
          fontWeight: 700
        }}
      >
        {copied ? "✓ Copied — Paste into Gmail" : "Copy Signature"}
      </button>

      <div style={{ marginTop: "20px", fontSize: "11px", color: "#bbb", textAlign: "center", maxWidth: "400px" }}>
        After copying, go to Gmail → Settings → Signature → Create new → paste with Ctrl+V / Cmd+V
      </div>
    </div>
  );
}
