import { ImageResponse } from "next/og";

/* =========================
   Link-preview thumbnail (LinkedIn, Facebook, Slack, etc.)
   1200×630 PNG generated at build time.
========================= */

export const alt =
  "Elly Olegario: Data & Business Analytics · Computer Science @ Ateneo de Manila University";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#2f2452";
const INK_SOFT = "#6b5f8e";
const LAV = "#9a7ae0";
const LAV_LIGHT = "#e6daff";
const BUTTER = "#ffe58f";
const BUTTER_DEEP = "#f2c94c";
const SKY = "#c4e4ff";
const SKY_DEEP = "#6aaeea";

/* Fetch a Google Font (only the glyphs we use) as TTF for the image renderer */
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`Font not found: ${family}`);
  const res = await fetch(match[1]);
  return res.arrayBuffer();
}

function Sparkle({ size: s, color, style }: { size: number; color: string; style?: React.CSSProperties }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" style={style}>
      <path
        d="M12 0c.9 6.6 4.4 10.4 12 12-7.6 1.6-11.1 5.4-12 12-.9-6.6-4.4-10.4-12-12C7.6 10.4 11.1 6.6 12 0z"
        fill={color}
      />
    </svg>
  );
}

export default async function OpengraphImage() {
  const displayText = "Hello! I am Elly Olegario";
  const bodyText =
    "DATA & BUSINESS ANALYTICS Computer Science · Ateneo de Manila University Data Science & Analytics Enterprise Systems ellyson.dev A wild Elly appeared!";

  let fonts: { name: string; data: ArrayBuffer; weight: 600 | 700 | 800; style: "normal" }[] = [];
  try {
    const [display, body, bodyBold] = await Promise.all([
      loadGoogleFont("Fredoka", 700, displayText),
      loadGoogleFont("Nunito", 600, bodyText),
      loadGoogleFont("Nunito", 800, bodyText),
    ]);
    fonts = [
      { name: "Fredoka", data: display, weight: 700, style: "normal" },
      { name: "Nunito", data: body, weight: 600, style: "normal" },
      { name: "Nunito", data: bodyBold, weight: 800, style: "normal" },
    ];
  } catch {
    // Fall back to the default font if Google Fonts can't be reached at build time
  }

  const chip = (label: string, bg: string): React.CSSProperties => ({
    display: "flex",
    padding: "10px 22px",
    borderRadius: 999,
    border: `3px solid ${INK}`,
    background: bg,
    color: INK,
    fontSize: 24,
    fontWeight: 800,
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#faf7ff",
          fontFamily: "Nunito",
          color: INK,
          overflow: "hidden",
        }}
      >
        {/* soft color blobs */}
        <div style={{ position: "absolute", top: -220, left: 120, width: 640, height: 640, borderRadius: 999, background: "radial-gradient(circle, rgba(210,191,251,0.75), rgba(250,247,255,0) 70%)" }} />
        <div style={{ position: "absolute", top: 120, right: -200, width: 620, height: 620, borderRadius: 999, background: "radial-gradient(circle, rgba(196,228,255,0.8), rgba(250,247,255,0) 70%)" }} />
        <div style={{ position: "absolute", bottom: -260, left: -160, width: 560, height: 560, borderRadius: 999, background: "radial-gradient(circle, rgba(255,229,143,0.6), rgba(250,247,255,0) 70%)" }} />

        {/* frame */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            borderRadius: 36,
            border: `4px solid ${INK}`,
            display: "flex",
          }}
        />

        {/* left: text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 0 0 88px",
            width: 720,
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              alignSelf: "flex-start",
              padding: "8px 20px",
              borderRadius: 999,
              border: `3px solid ${LAV_LIGHT}`,
              background: "#ffffff",
              color: "#7d5cc7",
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            <Sparkle size={22} color={BUTTER_DEEP} />
            DATA & BUSINESS ANALYTICS
          </div>

          <div style={{ display: "flex", marginTop: 26, fontFamily: "Fredoka", fontSize: 48, fontWeight: 700 }}>
            Hello! I am
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Fredoka",
              fontWeight: 700,
              fontSize: 112,
              lineHeight: 0.95,
              color: LAV,
              marginTop: 4,
            }}
          >
            <span>Elly</span>
            <div style={{ display: "flex", position: "relative", alignSelf: "flex-start" }}>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 6,
                  height: 26,
                  borderRadius: 999,
                  background: BUTTER,
                }}
              />
              <span style={{ position: "relative" }}>Olegario</span>
            </div>
          </div>

          <div style={{ display: "flex", marginTop: 30, fontSize: 27, fontWeight: 600, color: INK_SOFT, whiteSpace: "nowrap" }}>
            Computer Science · Ateneo de Manila University
          </div>

          <div style={{ display: "flex", gap: 14, marginTop: 26 }}>
            <div style={chip("", "#ffffff")}>Data Science & Analytics</div>
            <div style={chip("", SKY)}>Enterprise Systems</div>
          </div>
        </div>

        {/* right: game art */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            height: "100%",
            paddingRight: 70,
            position: "relative",
          }}
        >
          {/* Poké Ball */}
          <svg width="270" height="270" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="#ffffff" stroke={INK} strokeWidth="6" />
            <path d="M5 50a45 45 0 0 1 90 0z" fill="#b89cf2" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
            <ellipse cx="32" cy="26" rx="10" ry="5" fill="#ffffff" opacity="0.55" />
            <circle cx="50" cy="50" r="14" fill="#ffffff" stroke={INK} strokeWidth="6" />
            <circle cx="50" cy="50" r="5" fill={INK} opacity="0.15" />
          </svg>

          {/* Triforce */}
          <svg
            width="96"
            height="84"
            viewBox="0 0 100 87"
            style={{ position: "absolute", top: 70, right: 58 }}
          >
            <polygon points="50,0 75,43.3 25,43.3" fill={BUTTER_DEEP} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
            <polygon points="25,43.3 50,86.6 0,86.6" fill={BUTTER_DEEP} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
            <polygon points="75,43.3 100,86.6 50,86.6" fill={BUTTER_DEEP} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
          </svg>

          <Sparkle size={40} color={SKY_DEEP} style={{ position: "absolute", top: 120, left: 40 }} />
          <Sparkle size={28} color={LAV} style={{ position: "absolute", bottom: 210, right: 70 }} />

          {/* dialogue box */}
          <div
            style={{
              display: "flex",
              position: "relative",
              marginTop: 34,
              padding: "18px 56px 22px 28px",
              borderRadius: 18,
              border: `4px solid ${INK}`,
              background: "#ffffff",
              boxShadow: "7px 7px 0 #d2bffb",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            A wild Elly appeared!
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              style={{ position: "absolute", right: 18, bottom: 12 }}
            >
              <polygon points="0,0 18,0 9,14" fill={LAV} />
            </svg>
          </div>

          <div style={{ display: "flex", marginTop: 26, fontSize: 24, fontWeight: 800, color: "#7d5cc7" }}>
            ellyson.dev
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  );
}
