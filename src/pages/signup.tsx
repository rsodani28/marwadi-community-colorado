import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
  const familyMembership = {
    id: "family",
    name: "Family Membership",
    price: "$200/year",
    benefits: [
      "Access to all community events for the entire family",
      "Support community event organization and activities",
      "Connect with other Marwadi families in Colorado",
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
        <title>Sign Up - Marwadi Community of Colorado</title>
        <meta name="description" content="Join the Marwadi Community of Colorado and become part of our vibrant community" />
        <link rel="icon" href="/favicon.ico" />
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
                <Link href="/signup" className="text-gray-700 hover:text-orange-600 transition-colors font-medium border-b-2 border-orange-500">
                  Sign Up
                </Link>
                <Link href="/support" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
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
              <span className="mx-4 text-4xl">🏡</span>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Join Our Family Community
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bring your family into our vibrant Marwadi community in Colorado
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Family Membership Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Family Membership</h2>
              <div className="max-w-2xl mx-auto">
                <div className="border-2 border-orange-600 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{familyMembership.name}</h3>
                    <p className="text-4xl font-bold text-orange-600 mb-4">{familyMembership.price}</p>
                    <p className="text-lg text-gray-700 mb-6">
                      Your membership helps support community events and activities while giving your entire family access to our cultural celebrations and gatherings.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {familyMembership.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-orange-600 mt-1">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/80 rounded-lg border border-orange-200">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>What Your Membership Supports:</strong><br />
                      Event venue rentals • Traditional food and catering • Cultural programs • Youth activities • Community outreach
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-orange-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Family Registration Form</h2>
              <p className="text-gray-600 mb-6 text-center">
                Please fill out our official registration form below to join the Marwadi Community of Colorado
              </p>
              
              {/* Embedded Google Form */}
              <div className="flex justify-center">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfyQ0Yon94j882q3zDZSyfopCaCv2PUY50ui7POm0c0EETEDA/viewform?embedded=true" 
                  width="640" 
                  height="646" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="border border-gray-300 rounded-lg shadow-sm max-w-full"
                  title="Marwadi Community Registration Form"
                >
                  Loading…
                </iframe>
              </div>
              
              {/* Additional Information */}
              <div className="mt-8 p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">What Happens Next?</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl mb-2">📝</div>
                    <h4 className="font-semibold text-gray-900 mb-1">1. Submit Form</h4>
                    <p className="text-sm text-gray-600">Complete the registration form above</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">💰</div>
                    <h4 className="font-semibold text-gray-900 mb-1">2. Payment Info</h4>
                    <p className="text-sm text-gray-600">Receive payment instructions via email</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🎉</div>
                    <h4 className="font-semibold text-gray-900 mb-1">3. Welcome!</h4>
                    <p className="text-sm text-gray-600">Join our community events and activities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
