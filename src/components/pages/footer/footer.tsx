import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div className="space-y-6">
          <Image src="/images/kmi-footer-icon.svg" alt="Konsultan Manajemen Indonesia / KMI Logo" width={300} height={200} className="mt-4" />
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-1 gap-10">

          {/* CONTACT INFO */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">
              Contact Info
            </h4>

            <div className="space-y-3 text-gray-700 text-sm">

              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.37 0 .02 5.37.02 12c0 2.12.55 4.19 1.6 6.01L0 24l6.2-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 21.82c-1.8 0-3.57-.48-5.13-1.39l-.37-.22-3.68.96.98-3.59-.24-.37A9.82 9.82 0 1121.82 12 9.83 9.83 0 0112 21.82z" />
                </svg>
                <div>
                  <span className="font-semibold">WhatsApp:</span><br />
                </div>
                <span>+62 811 3198182</span>
              </div>

              <div className="flex items-center gap-3">
                {/* Phone */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.12.86.33 1.7.63 2.5a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.3 1.64.51 2.5.63A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <span className="font-semibold">Phone 1:</span><br />
                </div>
                <a href="tel:+622184930968" className="hover:underline">
                  +62 21 84930968
                </a>
              </div>

              <div className="flex items-center gap-3">
                {/* Phone */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.12.86.33 1.7.63 2.5a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.3 1.64.51 2.5.63A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <span className="font-semibold">Phone 2:</span><br />
                </div>
                <a href="tel:+622180477311" className="hover:underline">
                  +62 21 80477311
                </a>
              </div>

              <div className="flex items-center gap-3">
                {/* Email */}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7L12 13L21 7" />
                </svg>
                <div>
                  <span className="font-semibold">Email:</span><br />
                </div>
                <a href="mailto:admin@konsultanmanajemenindonesia.com" className="hover:underline">
                  admin@konsultanmanajemenindonesia.com
                </a>
              </div>
            </div>
          </div>

          {/* OFFICE */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">
              Office
            </h4>

            <div className="flex gap-3 text-sm text-gray-700">
              {/* Location */}
              <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z" />
                <circle cx="12" cy="11" r="2" />
              </svg>

              <div>
                <p>Ruko Lumibiz Blok U2/50</p>
                <p>Legenda Wisata, Jl. Alternatif</p>
                <p>Cibubur - Cileungsi, Jawa Barat.</p>

                <Link
                  href="https://maps.app.goo.gl/5zJGxFegBHif3DaN6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline mt-1 inline-block"
                >
                  Direct me there
                </Link>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="flex gap-4 pt-4 text-gray-800">

              <Link href="https://linkedin.com/in/konsultan-manajemen-indonesia-0a4a84169" target="_blank" rel="noopener noreferrer">
                {/* LinkedIn */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6C22 7.6 24 10 24 14v10h-5v-9c0-2.2-.04-5-3-5-3 0-3.46 2.3-3.46 4.8V24H8z" />
                </svg>
              </Link>

              <Link href="https://www.tiktok.com/@ie.attorneys.at.law" target="_blank" rel="noopener noreferrer">
                {/* TikTok */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 1c1.1 2.3 3.4 3.8 6 4v4c-2.1-.1-4-.7-6-1.9V15a7 7 0 11-7-7c.5 0 1 .05 1.5.15v4.1a3 3 0 10 2.5 2.95V1h3z" />
                </svg>
              </Link>

              <Link href="https://www.instagram.com/konsultan.manajemen.indonesia/" target="_blank" rel="noopener noreferrer">
                {/* Instagram */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
              </Link>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-sm text-gray-600">

          <p>
            © PT.Konsultan Sistem Manajemen Indonesia. All Rights Reserved
          </p>

          <Link
            href="/admin"
            className="hover:text-gray-900 transition"
          >
            Admin Login
          </Link>

        </div>
      </div>
    </footer>
  )
}