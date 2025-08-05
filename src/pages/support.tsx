import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Support() {
  const [expandedQR, setExpandedQR] = useState<string | null>(null);

  const qrCodes = [
    {
      id: "qr1",
      name: "Primary Donation",
      image: "/QRs/1943ecb1-f6ca-4d38-b6b2-924b0e5495b3.png",
      description: "Scan to support the Marwadi Community of Colorado"
    },
    {
      id: "qr2", 
      name: "Alternative Donation",
      image: "/QRs/2770e0c2-8cab-472d-b6a0-77e9f1eed6f1.png",
      description: "Another way to donate to the Marwadi Community of Colorado"
    }
  ];

  const toggleQR = (qrId: string) => {
    setExpandedQR(expandedQR === qrId ? null : qrId);
  };

  return (
    <>
      <Head>
        <title>Support Us - Marwadi Community of Colorado</title>
        <meta name="description" content="Support the Marwadi Community of Colorado through donations and volunteering" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* Indian Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-6xl text-orange-300 transform rotate-12">🕉️</div>
          <div className="absolute top-60 right-1/4 text-5xl text-red-300 transform -rotate-12">🪔</div>
          <div className="absolute bottom-1/3 left-1/4 text-4xl text-yellow-300 transform rotate-45">🌺</div>
          <div className="absolute bottom-20 right-20 text-5xl text-pink-300 transform -rotate-45">💝</div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 border-b border-orange-200 bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image 
                  src="/MarwariCClogo.jpg" 
                  alt="Marwadi Community Logo" 
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover border-2 border-orange-300"
                />
                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Marwadi Community of Colorado
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
                  Home
                </Link>
                <Link href="/events" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
                  Events
                </Link>
                <Link href="/members" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
                  Members
                </Link>
                <Link href="/signup" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
                  Sign Up
                </Link>
                <Link href="/support" className="text-gray-700 hover:text-orange-600 transition-colors font-medium border-b-2 border-orange-500">
                  Support Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-orange-400"></div>
              <span className="mx-4 text-4xl">💝</span>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Support Our Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us grow and strengthen the Marwadi Community of Colorado through your generous 
              donations. Your support helps preserve our heritage, organize community events, and build a brighter future for our families.
            </p>
          </div>

          {/* Donation QR Codes Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-orange-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Donate to the <span className="text-orange-600">Marwadi Community of Colorado</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Scan any of the QR codes below to make a secure donation. Your contribution directly supports our community events, cultural programs, and family activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {qrCodes.map((qr) => (
                <div key={qr.id} className="text-center">
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{qr.name}</h3>
                    
                    {/* Mini QR Code */}
                    <div className="mb-4">
                      <Image 
                        src={qr.image}
                        alt={qr.name}
                        width={expandedQR === qr.id ? 256 : 128}
                        height={expandedQR === qr.id ? 256 : 128}
                        className={`mx-auto transition-all duration-300 ${
                          expandedQR === qr.id ? 'w-64 h-64' : 'w-32 h-32'
                        } border-2 border-orange-300 rounded-lg`}
                      />
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{qr.description}</p>
                    
                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleQR(qr.id)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        expandedQR === qr.id
                          ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                          : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      }`}
                    >
                      {expandedQR === qr.id ? '📱 Collapse QR Code' : '🔍 Expand to Scan'}
                    </button>
                    
                    {expandedQR === qr.id && (
                      <div className="mt-4 p-4 bg-white/80 rounded-lg border border-orange-200">
                        <p className="text-sm text-gray-700">
                          <strong>📱 To scan:</strong> Open your phone&apos;s camera app and point it at the QR code above. A notification will appear to open the payment link.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">💝 Thank You for Your Support!</h3>
                <p className="text-gray-700 mb-4">
                  Every donation, no matter the size, makes a meaningful difference in preserving our Marwadi heritage and strengthening our community bonds in Colorado.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <span>✓ Secure payment processing</span>
                  <span>✓ Direct community support</span>
                  <span>✓ Transparent fund usage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 border border-orange-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Donation Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-orange-200">
                  <span className="text-3xl">🎭</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cultural Events & Festivals</h3>
                <p className="text-gray-600">
                  Fund traditional celebrations, venue rentals, decorations, and cultural performances that bring our community together.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-orange-200">
                  <span className="text-3xl">🍽️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Meals & Catering</h3>
                <p className="text-gray-600">
                  Support traditional food preparation, catering services, and shared meals that create lasting bonds among families.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-orange-200">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Family Programs & Activities</h3>
                <p className="text-gray-600">
                  Enable youth programs, family outings, educational workshops, and activities that strengthen our community bonds.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-12">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-orange-200 overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 text-4xl text-orange-300 transform rotate-12">💝</div>
                <div className="absolute bottom-4 left-4 text-3xl text-red-300 transform -rotate-12">🙏</div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <Image 
                    src="/MarwariCClogo.jpg" 
                    alt="Community" 
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-300"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Questions About Donations?
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  If you have any questions about donating or need assistance with the QR codes,<br />
                  <span className="text-orange-600">please don&apos;t hesitate to reach out to our community leaders.</span>
                </p>
                <Link
                  href="/members"
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
                >
                  📞 Contact Leadership
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
