import { ImageResponse } from "next/og";
import { company } from "@/config/company";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0f172a",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 720 }}>
          <div style={{ color: "#67e8f9", fontSize: 28, fontWeight: 700 }}>{company.brandName}</div>
          <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.04 }}>
            Business Intelligence e dashboards para gestão.
          </div>
          <div style={{ color: "#cbd5e1", fontSize: 30, lineHeight: 1.35 }}>
            Transformamos dados em decisões.
          </div>
        </div>
        <div
          style={{
            background: "white",
            borderRadius: 16,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            padding: 28,
            width: 330,
          }}
        >
          {["Faturamento", "Margem", "Estoque", "Clientes"].map((item, index) => (
            <div
              key={item}
              style={{
                alignItems: "center",
                display: "flex",
                gap: 14,
              }}
            >
              <div style={{ background: index === 1 ? "#10b981" : "#06b6d4", borderRadius: 8, height: 28, width: 28 }} />
              <div style={{ color: "#0f172a", display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 20, fontWeight: 700 }}>{item}</span>
                <span style={{ color: "#64748b", fontSize: 16 }}>Dados demonstrativos</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
