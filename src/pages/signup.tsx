import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SignUp() {
  const [zelleOpen, setZelleOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const familyMembership = {
    id: "family",
    name: "Family Membership",
    price: "$200/year",
    benefits: [
      "Access to all community events for the entire family",
      "Support community event organization and activities",
      "Connect with other Marwari families in Colorado",
      "Priority registration for popular events",
      "Quarterly community newsletter",
      "Access to member-only family gatherings",
      "Cultural preservation programs for children",
      "Networking opportunities with local businesses"
    ]
  };

  return (
    <>
      <Head>
        <title>Sign Up - Marwari Community of Colorado</title>
        <meta name="description" content="Join the Marwari Community of Colorado and become part of our vibrant community" />
        <link rel="icon" href="/MarwariCClogo.jpg" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* Indian Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-6xl text-orange-300 transform rotate-12">🕉️</div>
          <div className="absolute top-60 right-1/4 text-5xl text-red-300 transform -rotate-12">🪔</div>
          <div className="absolute bottom-1/3 left-1/4 text-4xl text-yellow-300 transform rotate-45">🌺</div>
          <div className="absolute bottom-20 right-20 text-5xl text-pink-300 transform -rotate-45">📝</div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 border-b border-orange-200 bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center space-x-3 min-w-0">
                <Image src="/MarwariCClogo.jpg" alt="Marwari Community Logo" width={48} height={48} className="h-12 w-12 rounded-full object-cover border-2 border-orange-300 flex-shrink-0" />
                <Link href="/" className="text-base md:text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
                  Marwari Community of Colorado
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">Home</Link>
                <Link href="/events" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">Events</Link>
                <Link href="/members" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">Members</Link>
                <Link href="/signup" className="text-gray-700 hover:text-orange-600 transition-colors font-medium border-b-2 border-orange-500">Sign Up</Link>
              </div>
              <button className="md:hidden flex-shrink-0 p-2 rounded-lg text-gray-700 hover:bg-orange-50 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                {mobileMenuOpen ? <span className="text-xl leading-none">✕</span> : <div className="w-6 space-y-1.5"><div className="h-0.5 bg-gray-700 rounded"></div><div className="h-0.5 bg-gray-700 rounded"></div><div className="h-0.5 bg-gray-700 rounded"></div></div>}
              </button>
            </div>
            {mobileMenuOpen && (
              <div className="md:hidden border-t border-orange-100 pb-3 flex flex-col">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-2 py-3 text-gray-700 hover:text-orange-600 font-medium hover:border-l-2 hover:border-orange-300 pl-3">Home</Link>
                <Link href="/events" onClick={() => setMobileMenuOpen(false)} className="px-2 py-3 text-gray-700 hover:text-orange-600 font-medium hover:border-l-2 hover:border-orange-300 pl-3">Events</Link>
                <Link href="/members" onClick={() => setMobileMenuOpen(false)} className="px-2 py-3 text-gray-700 hover:text-orange-600 font-medium hover:border-l-2 hover:border-orange-300 pl-3">Members</Link>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className="px-2 py-3 text-gray-700 hover:text-orange-600 font-medium border-l-2 border-orange-500 pl-3">Sign Up</Link>
              </div>
            )}
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-orange-400"></div>
              <span className="mx-4 text-4xl">🏡</span>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Join Our Family Community
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Bring your family into our vibrant Marwari community in Colorado
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Membership + Nonprofit Status — combined card */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="border-2 border-orange-600 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg overflow-hidden">
                {/* Membership header */}
                <div className="text-center px-8 pt-8 pb-6">
                  <div className="text-5xl mb-3">👨‍👩‍👧‍👦</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{familyMembership.name}</h2>
                  <p className="text-4xl font-bold text-orange-600 mb-3">{familyMembership.price}</p>
                  <p className="text-gray-700">
                    Your membership helps support community events and activities while giving your entire family access to our cultural celebrations and gatherings.
                  </p>
                </div>

                {/* Divider */}
                <div className="mx-6 border-t border-orange-200 my-2"></div>

                {/* 501(c)(3) info */}
                <div className="px-8 pb-8 pt-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xl">🏛️</span>
                    <h3 className="text-lg font-bold text-gray-900">501(c)(3) Nonprofit Organization</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    The Marwari Community of Colorado is a registered 501(c)(3) nonprofit organization. Your membership dues and donations may be tax-deductible to the extent permitted by law. Contributions of <strong>$250 or more</strong> will receive an official tax receipt at year-end. Please consult your tax advisor regarding deductibility.
                  </p>
                  <p className="text-sm text-gray-600 mb-3 italic">
                    Your support helps us celebrate tradition, share our taste, and strengthen togetherness within our growing community in Colorado.
                  </p>
                  <div className="inline-block bg-white border border-orange-200 rounded-lg px-5 py-2">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">EIN</p>
                    <p className="text-xl font-bold text-orange-600">41-3753661</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-orange-200">
              {/* Additional Information */}
              <div className="mb-8 p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">What Happens Next?</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl mb-2">📝</div>
                    <h4 className="font-semibold text-gray-900 mb-1">1. Submit Form</h4>
                    <p className="text-sm text-gray-600">Complete the registration form below</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">💰</div>
                    <h4 className="font-semibold text-gray-900 mb-1">2. Payment Info</h4>
                    <p className="text-sm text-gray-600">Send $200 via Zelle using the QR code below</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🎉</div>
                    <h4 className="font-semibold text-gray-900 mb-1">3. Welcome!</h4>
                    <p className="text-sm text-gray-600">Join our community events and activities</p>
                  </div>
                </div>

                {/* Zelle QR Code */}
                <div className="mt-6 flex flex-col items-center">
                  <h4 className="font-semibold text-gray-900 mb-3">Pay via Zelle</h4>
                  <button
                    onClick={() => setZelleOpen(true)}
                    className="group relative rounded-xl overflow-hidden border-2 border-orange-300 shadow-md hover:shadow-xl hover:border-orange-500 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300"
                    aria-label="Tap to expand Zelle QR code"
                  >
                    <Image
                      src="/MCCZelle.jpg"
                      alt="Zelle Payment QR Code"
                      width={200}
                      height={200}
                      className="block"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100">
                      <span className="bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full">Tap to scan</span>
                    </div>
                  </button>
                  <p className="mt-2 text-xs text-gray-500">Tap the QR code to expand</p>
                </div>

                {/* Zelle Lightbox */}
                {zelleOpen && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    onClick={() => setZelleOpen(false)}
                  >
                    <div
                      className="relative bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Scan to Pay via Zelle</h3>
                      <p className="text-sm text-gray-500 mb-4">Hold your phone camera up to the QR code</p>
                      <Image
                        src="/MCCZelle.jpg"
                        alt="Zelle Payment QR Code"
                        width={340}
                        height={340}
                        className="rounded-xl border border-orange-200"
                      />
                      <button
                        onClick={() => setZelleOpen(false)}
                        className="mt-5 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-colors duration-200"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-2 text-center">Family Registration Form</h2>
              <p className="text-gray-600 mb-6 text-center">
                Please fill out our official registration form below to join the Marwari Community of Colorado
              </p>

              {/* Embedded Google Form */}
              <div className="w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdUZkmTXw3FEJNA24TsnjmI8sZe8uFMAgLHecj1Axqc_wDmVw/viewform?embedded=true"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Marwari Community Registration Form"
                  style={{ minHeight: "600px" }}
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
