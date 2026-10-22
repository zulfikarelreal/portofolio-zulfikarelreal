import { useEffect, useRef } from "react";
import cvFile from "../assets/CV - Muhammad Agung Zulfikar.pdf";
import certIsms from "../assets/cert-isms.jpg";
import certJavaFund from "../assets/cert-java-fundamentals.jpg";
import certJavaProg from "../assets/cert-java-programming.jpg";
import certBnsp from "../assets/cert-bnsp.jpg";
import certBrother from "../assets/cert-brother certificate of technical competency.jpg";
import "./Experience.css";

const timeline = [
  {
    date: "Juni 2026 – sekarang",
    tag: "work",
    tagLabel: "Kerja",
    title: "Customer Service Engineer",
    company:
      "Brother Customer Care Center Semarang (PT Teknika Sarana Gardian)",
    items: [
      "Memperbaiki dan troubleshooting printer/produk Brother di CCC maupun lokasi pelanggan",
      "Maintenance dan pengujian unit setelah perbaikan",
      "Memberi edukasi teknis kepada pelanggan tentang unit yang diservis",
      "Menyelesaikan puluhan perbaikan unit printer dan produk Brother",
    ],
  },
  {
    date: "April – Juni 2026",
    tag: "work",
    tagLabel: "Kerja",
    title: "Proktor & Tim IT Ujian CAT/CBT",
    company: "UNIMUS — Psikologi & Akademik Polda Jateng (POLRI T.A. 2026)",
    items: [
      "Mengawasi ujian CAT/CBT Psikologi Polda Jateng dan Polri tingkat nasional",
      "Menyiapkan dan memeriksa komputer, software, CCTV, mikrofon, dan speaker",
      "Menangani troubleshooting perangkat dan membantu peserta saat ada kendala teknis",
    ],
  },
  {
    date: "2024 – sekarang",
    tag: "edu",
    tagLabel: "Pendidikan",
    title: "S1 Informatika (Kelas Karyawan)",
    company: "Universitas Muhammadiyah Semarang",
    desc: "IPK 3,93 / 4,00 — semester 5, sedang berjalan",
  },
  {
    date: "Agu 2022 – Feb 2026",
    tag: "work",
    tagLabel: "Kerja",
    title: "Teknisi, Marketing & Frontliner",
    company: "Home Computer Semarang",
    items: [
      "Merakit PC, instalasi OS/software, dan QC hardware/software",
      "Konsultasi spesifikasi komputer sesuai kebutuhan dan anggaran pelanggan",
      "Mengelola stok, pencatatan penjualan, inventori, dan koordinasi dengan distributor",
      "Membuat konten promosi dan mengelola pemasaran digital",
      "Menyelesaikan ratusan perakitan dan reparasi PC; omzet bulanan tertinggi sekitar Rp145 juta",
    ],
  },
  {
    date: "2019 – 2023",
    tag: "work",
    tagLabel: "Kerja",
    title: "Owner, Toko Voucher Games",
    company: "Zulfikar Elreal (Itemku & Shopee)",
    companyHref: "https://www.itemku.com/t/zulfikar-elreal",
    items: [
      "Mengelola penjualan voucher game lewat e-commerce (Itemku, Shopee) dan media sosial",
      "Mengelola listing, iklan online, koordinasi supplier, dan pelayanan pelanggan",
      "Mengatur supply, stok digital, dan operasional harian toko",
      "Menyelesaikan lebih dari 20.000 transaksi; omzet bulanan tertinggi sekitar Rp190 juta",
    ],
  },
  {
    date: "Juni – Des 2021",
    tag: "intern",
    tagLabel: "Magang",
    title: "Staff Toko Magang",
    company: "Rajawali Com",
    items: [
      "Perakitan, instalasi OS/software, dan maintenance PC/laptop",
      "Quality control perangkat keras, melayani transaksi, dan pengiriman perangkat",
    ],
  },
  {
    date: "2019 – 2022",
    tag: "edu",
    tagLabel: "Pendidikan",
    title: "Teknik Komputer dan Jaringan",
    company: "SMK Negeri 5 Semarang",
  },
];

const certs = [
  {
    icon: "bx bxs-wrench",
    title: "Technical Competency — Brother",
    desc: "Certificate of Technical Competency, Brother International Sales Indonesia",
    img: certBrother,
  },
  {
    icon: "bx bxs-award",
    title: "BNSP — KKNI Level II",
    desc: "Sertifikat Kompetensi Konfigurasi Perangkat Jaringan Komputer",
    img: certBnsp,
  },
  {
    icon: "bx bxs-shield-alt-2",
    title: "ISMS ISO 27001:2022",
    desc: "Certificate of Participation, Information Security Management System",
    img: certIsms,
  },
  {
    icon: "bx bxl-java",
    title: "Java Fundamentals",
    desc: "Award of Final Exam Completion, Oracle Academy",
    img: certJavaFund,
  },
  {
    icon: "bx bx-code-block",
    title: "Java Programming (English)",
    desc: "Award of Completion, Oracle Academy",
    img: certJavaProg,
  },
];

export default function Experience({ onOpenCert }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting),
        ),
      { threshold: 0.1 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section experience" id="experience" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal">Pengalaman dan pendidikan</h2>

        <div className="timeline">
          {timeline.map((item) => (
            <div className="timeline-item reveal" key={item.title + item.date}>
              <div className="tl-dot" />
              <div className="tl-date">{item.date}</div>
              <div className="tl-card">
                <span className={`tl-tag ${item.tag}`}>{item.tagLabel}</span>
                <h3>{item.title}</h3>
                <p className="tl-company">
                  {item.companyHref ? (
                    <a
                      href={item.companyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company} ↗
                    </a>
                  ) : (
                    item.company
                  )}
                </p>
                {item.desc && <p className="tl-desc">{item.desc}</p>}
                {item.items && (
                  <ul className="tl-list">
                    {item.items.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="cert-section">
          <h3 className="cert-title reveal">Sertifikat</h3>
          <div className="cert-grid">
            {certs.map((c) => (
              <div
                className="cert-card reveal cursor-target"
                key={c.title}
                onClick={() => onOpenCert({ title: c.title, img: c.img })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  onOpenCert({ title: c.title, img: c.img })
                }
              >
                <span className="cert-icon">
                  <i className={c.icon}></i>
                </span>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
                <span className="cert-badge">Lihat</span>
              </div>
            ))}
          </div>

          <div className="cv-bar reveal">
            <div className="cv-bar-info">
              <h4>Curriculum Vitae</h4>
              <p>Muhammad Agung Zulfikar</p>
            </div>
            <div className="cv-bar-actions">
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost cursor-target"
              >
                <i className="bx bx-show"></i> Lihat CV
              </a>
              <a
                href={cvFile}
                download="CV-Muhammad-Agung-Zulfikar.pdf"
                className="btn btn-primary cursor-target"
              >
                <i className="bx bx-download"></i> Unduh CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
