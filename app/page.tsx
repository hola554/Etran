import { Zap, Globe, Cpu, Wallet, Fingerprint, BarChart3, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden md:fixed inset-y-0 left-0 w-96 bg-[#394508] text-white p-8 md:flex flex-col overflow-hidden">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-16">
          <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
            <Zap className="w-5 h-5" />
          </div>
          <span className="text-xl font-semibold">Etran</span>
        </div>

        {/* Hero Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Money Transfers
            <br />
            Made Simple
          </h1>
          <p className="text-white/80 mb-12">No personal credit checks or founder guarantee.</p>

          <div>
            <h3 className="text-sm font-medium mb-4 text-white/60">Our offerings</h3>
            <div className="flex gap-2">
              <div className="bg-[#619111] rounded-lg p-3 flex-1">
                <Zap className="w-5 h-5 mb-1" />
                <p className="text-xs font-medium">
                  Instant
                  <br />
                  Productivity
                </p>
              </div>
              <div className="bg-[#619111] rounded-lg p-3 flex-1">
                <Globe className="w-5 h-5 mb-1" />
                <p className="text-xs font-medium">
                  Expense
                  <br />
                  Management
                </p>
              </div>
              <div className="bg-[#619111] rounded-lg p-3 flex-1">
                <Cpu className="w-5 h-5 mb-1" />
                <p className="text-xs font-medium">
                  Advanced
                  <br />
                  Technology
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-sm text-white/60 mt-8">
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Social
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Address
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Legal Terms
            </a>
          </div>
        </div>
      </aside>

      <main className="flex-1 md:ml-96 overflow-y-auto w-full">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
                <img
                  src="/Header image.png"
                  alt="Money transfer app in use"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Tagline */}
            <div className="text-center mt-8 sm:mt-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-md mx-auto leading-tight px-4">
                We escalate transfer efficiency and productivity
              </h2>
            </div>

            <div className="flex items-center justify-center mt-8 sm:mt-16 mb-8 sm:mb-16">
              <div className="w-full max-w-4xl px-4 sm:px-8">
                {/* Mobile logo layout - 2x3 grid */}
                <img
                  src="/Logo wall-2.png"
                  alt="Partner logos - Blooming, BuildRight, Flowbot, EXPOR, Redo"
                  className="w-full h-auto sm:hidden"
                />
                {/* Desktop logo layout - horizontal */}
                <img
                  src="/Logo wall.png"
                  alt="Partner logos - Blooming, BuildRight, Flowbot, EXPOR, Redo"
                  className="hidden sm:block w-full h-auto"
                />
              </div>
            </div>

            <div className="text-center mt-12 sm:mt-24 mb-8 sm:mb-12 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get More Done In A Week</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                Maximize your productivity with smarter tools designed to streamline your workflow to automate tasks,
                stay organized.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-24 px-4">
              {/* 2x Card */}
              <div className="bg-[#D2FD9C] rounded-3xl p-8 sm:p-16 flex flex-col items-center justify-center min-h-[280px] sm:min-h-[320px]">
                <img
                  src="\2x.png"
                  alt="2x"
                  className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-6 object-contain"
                />
                <p className="text-gray-900 text-base sm:text-lg font-normal">Double Your Productivity</p>
              </div>

              {/* Efficiency Chart Card */}
              <div className="bg-[#D2FD9C] rounded-3xl p-8 sm:p-16 flex flex-col items-center justify-center min-h-[280px] sm:min-h-[320px]">
                <img
                  src="/vector.png"
                  alt="Efficiency chart"
                  className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-6 object-contain"
                />
                <p className="text-gray-900 text-base sm:text-lg font-normal">Efficiency Increase Per Transfer</p>
              </div>

              {/* Centralize Finances Card */}
              <div className="bg-[#D2FD9C] rounded-3xl p-8 sm:p-16 flex flex-col items-center justify-center min-h-[280px] sm:min-h-[320px]">
                <img
                  src="/circle.png"
                  alt="Centralize finances"
                  className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-6 object-contain"
                />
                <p className="text-gray-900 text-base sm:text-lg font-normal">Centralize Your Finances</p>
              </div>

              {/* 130% Card */}
              <div className="bg-[#D2FD9C] rounded-3xl p-8 sm:p-16 flex flex-col items-center justify-center min-h-[280px] sm:min-h-[320px]">
                <img
                  src="/130.png"
                  alt="130%"
                  className="w-36 h-24 sm:w-48 sm:h-32 mb-4 sm:mb-6 object-contain"
                />
                <p className="text-gray-900 text-base sm:text-lg font-normal">More Activity</p>
              </div>
            </div>

            {/* The Most Reliable App Section */}
            <div className="mt-16 sm:mt-32 mb-12 sm:mb-24 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-20">
                The Most Reliable App
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Card 1 */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src="/Benefit image.png"
                      alt="Etran green payment card"
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      Scale Your Team, Not Your Card Expenses
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Issue virtual and physical cards at no additional cost to support teams of any size.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src="/Benefit image1.png"
                      alt="Tax form 1040-ES document"
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      Effortless Paper Tracking, Mobile Convenience
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Get precise control—at scale—with the ability to lock any card and restrict any type of spend.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-16 sm:mt-32 mb-12 sm:mb-24 px-4">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/image.png"
                  alt="Person using smartphone"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>

            {/* First Class Software */}
            <div className="mt-16 sm:mt-32 mb-12 sm:mb-24 px-4">
              <div className="text-center mb-8 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  First Class Software
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                  Get real-time insights, seamless transactions, and advanced tools to manage your wealth effortlessly.
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Safe Storage */}
                <div className="text-center">
                  <div className="bg-[#394508] rounded-2xl p-8 sm:p-12 mb-3 sm:mb-4 flex items-center justify-center aspect-square">
                    <Wallet className="w-12 h-12 sm:w-16 sm:h-16 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-900 font-medium text-sm sm:text-base">Safe Storage</p>
                </div>

                {/* Secure */}
                <div className="text-center">
                  <div className="bg-[#394508] rounded-2xl p-8 sm:p-12 mb-3 sm:mb-4 flex items-center justify-center aspect-square">
                    <Fingerprint className="w-12 h-12 sm:w-16 sm:h-16 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-900 font-medium text-sm sm:text-base">Secure</p>
                </div>

                {/* Earn Interest */}
                <div className="text-center">
                  <div className="bg-[#394508] rounded-2xl p-8 sm:p-12 mb-3 sm:mb-4 flex items-center justify-center aspect-square">
                    <BarChart3 className="w-12 h-12 sm:w-16 sm:h-16 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-900 font-medium text-sm sm:text-base">Earn Interest</p>
                </div>

                {/* Family Plans */}
                <div className="text-center">
                  <div className="bg-[#394508] rounded-2xl p-8 sm:p-12 mb-3 sm:mb-4 flex items-center justify-center aspect-square">
                    <Users className="w-12 h-12 sm:w-16 sm:h-16 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-900 font-medium text-sm sm:text-base">Family Plans</p>
                </div>
              </div>
            </div>

            {/* Download CTA */}
            <div className="mt-16 sm:mt-32 mb-12 sm:mb-24 px-4">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg relative">
                <img
                  src="/image 442.png"
                  alt="Person using phone outdoors"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-[center_35%]"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 sm:px-12 lg:px-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-white mb-6 sm:mb-8 leading-tight">
                    Download Etran and
                    <br />
                    manage everything
                    <br />
                    from your phone.
                  </h2>
                  <button className="bg-[#D2FD9C] text-[#394508] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-[#c4ed88] transition-colors w-fit text-sm sm:text-base">
                    Get started
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 sm:mt-32 pb-8 sm:pb-16 bg-gray-200 rounded-3xl p-6 sm:p-16 mx-4">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-16 sm:mb-32 gap-8 sm:gap-0">
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded flex items-center justify-center">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="text-left sm:text-right space-y-2">
                  <p className="text-gray-900 font-medium mb-4">Contact</p>
                  <p className="text-gray-700 text-sm sm:text-base">hello@figma.com</p>
                  <p className="text-gray-700 text-sm sm:text-base">Instagram</p>
                  <p className="text-gray-700 text-sm sm:text-base">X</p>
                  <p className="text-gray-700 text-sm sm:text-base">LinkedIn</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 sm:gap-0">
                {/* Etran Large Text */}
                <div>
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">Etran</h2>
                </div>

                {/* Legal Links */}
                <div className="text-left sm:text-right space-y-2">
                  <p className="text-gray-700 text-sm sm:text-base">Terms & Conditions</p>
                  <p className="text-gray-700 text-sm sm:text-base">Privacy</p>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </main>
    </div>
  )
}
