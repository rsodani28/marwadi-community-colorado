import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Head>
        <title>Marwadi Community of Colorado</title>
        <meta name="description" content="Welcome to the Marwadi Community of Colorado - Connecting our heritage, building our future" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* Traditional Marwadi Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          {/* Geometric Patterns */}
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-orange-300 transform rotate-45 animate-pulse-once"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-3 border-red-300 rounded-full animate-bounce-once"></div>
          <div className="absolute bottom-32 left-1/4 w-28 h-28 border-4 border-yellow-300 transform rotate-12 animate-pulse-once"></div>
          <div className="absolute bottom-20 right-1/4 w-20 h-20 border-3 border-pink-300 rounded-full animate-bounce-once"></div>
          
          {/* Traditional Paisley-inspired Patterns */}
          <svg className="absolute top-1/3 right-1/4 w-24 h-24 text-orange-200 animate-spin-slow" viewBox="0 0 100 100">
            <path d="M50 10 Q70 30 50 50 Q30 30 50 10" fill="currentColor" opacity="0.3"/>
            <path d="M50 50 Q70 70 50 90 Q30 70 50 50" fill="currentColor" opacity="0.3"/>
          </svg>
          
          <svg className="absolute bottom-1/3 left-1/3 w-20 h-20 text-red-200 animate-spin-slow" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.4"/>
            <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 border-b border-orange-200 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
          <div className="container mx-auto px-4">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image 
                  src="/MarwariCClogo.jpg" 
                  alt="Marwadi Community Logo" 
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover border-3 border-orange-300 shadow-lg hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Marwadi Community of Colorado
                  </h1>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium border-b-2 border-orange-500 hover:scale-105">
                  Home
                </Link>
                <Link href="/events" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium hover:border-b-2 hover:border-orange-300 hover:scale-105">
                  Events
                </Link>
                <Link href="/members" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium hover:border-b-2 hover:border-orange-300 hover:scale-105">
                  Members
                </Link>
                <Link href="/signup" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium hover:border-b-2 hover:border-orange-300 hover:scale-105">
                  Sign Up
                </Link>
                <Link href="/support" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium hover:border-b-2 hover:border-orange-300 hover:scale-105">
                  Support Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-1 h-16 bg-gradient-to-b from-orange-500 to-red-500 mr-4 animate-pulse-once"></div>
                <div>
                  <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl animate-slide-in-left">
                    Welcome
                  </h2>
                  <p className="text-lg text-orange-600 font-medium">To the Marwadi Community</p>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-gray-800 mb-2 animate-slide-in-right">
                <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Marwadi
                </span> Community
              </h3>
              <p className="text-xl text-orange-600 font-semibold mb-6">of Colorado</p>
              
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-orange-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 animate-fade-in">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Connecting our <span className="font-semibold text-orange-600">heritage</span>, 
                  building our <span className="font-semibold text-red-600">future</span>. 
                  Join our vibrant community in Colorado where traditions meet modern life.
                </p>
                <div className="flex items-center justify-center lg:justify-start mt-4">
                  <span className="text-2xl mr-2 animate-bounce-once">🙏</span>
                  <p className="text-orange-600 font-medium italic">
                    &ldquo;The world is one family&rdquo;
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
                <Link
                  href="/signup"
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                >
                  <span className="relative z-10">🚀 Join Our Community</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </Link>
                <Link
                  href="/events"
                  className="group rounded-lg border-2 border-orange-500 bg-white/90 backdrop-blur-sm px-8 py-4 text-base font-semibold text-orange-600 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
                >
                  <span className="flex items-center">
                    🎉 View Events
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-right">
              <div className="relative z-10 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-orange-200 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <Image 
                  src="/MarwarResize.jpg" 
                  alt="Marwadi Community of Colorado" 
                  width={600}
                  height={400}
                  className="w-full max-h-96 rounded-xl object-contain"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce-once"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-red-400 to-pink-500 rounded-full animate-bounce-once" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              {/* Background Decorative Pattern */}
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl opacity-30"></div>
              </div>
              
              {/* Traditional Patterns */}
              <div className="absolute top-0 right-0 text-4xl text-orange-400 opacity-30 transform rotate-12 animate-spin-slow">
                ✨
              </div>
              <div className="absolute bottom-0 left-0 text-3xl text-red-400 opacity-30 transform -rotate-12 animate-spin-slow" style={{animationDelay: '1s'}}>
                ⭐
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Events Section with Large Image */}
        <section className="relative z-10 py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="animate-fade-in-up">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-16 bg-gradient-to-b from-orange-500 to-red-500 mr-4 animate-pulse-once"></div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      Cultural <span className="text-orange-600">Events</span>
                    </h3>
                    <p className="text-orange-600 font-medium">Celebrating Our Heritage</p>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-orange-200 shadow-xl mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Experience the vibrant traditions of our Marwadi community through festivals, 
                    cultural celebrations, and gatherings that bring our heritage to life in Colorado.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">4+</div>
                      <div className="text-sm text-gray-600">Annual Events</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">150+</div>
                      <div className="text-sm text-gray-600">Participants</div>
                    </div>
                  </div>
                  
                  <Link
                    href="/events"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                  >
                    🎭 Explore Events
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>

              {/* Large Community Image */}
              <div className="relative animate-fade-in-right">
                <div className="relative z-10 group">
                  <Image 
                    src="/PeoplePhotos/20250419_183216.jpg" 
                    alt="Community Cultural Event" 
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xl font-bold">Cultural Celebration</p>
                    <p className="text-sm">Community gathering in action</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse-once"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-30 animate-bounce-once"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Network Section with Large Image */}
        <section className="relative z-10 bg-white py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Large Community Image - Left Side */}
              <div className="relative animate-fade-in-left lg:order-1">
                <div className="relative z-10 group">
                  <Image 
                    src="/PeoplePhotos/20250419_183818.jpg" 
                    alt="Community Network and Connections" 
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xl font-bold">Building Connections</p>
                    <p className="text-sm">Strengthening our community bonds</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-20 animate-pulse-once"></div>
              </div>

              {/* Content - Right Side */}
              <div className="animate-fade-in-up lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 mr-4 animate-pulse-once"></div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      Member <span className="text-blue-600">Network</span>
                    </h3>
                    <p className="text-blue-600 font-medium">Building Lasting Connections</p>
                  </div>
                </div>
                
                <div className="bg-blue-50/90 backdrop-blur-sm p-8 rounded-2xl border border-blue-200 shadow-xl mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Connect with fellow Marwadi community members across Colorado. Build meaningful 
                    friendships, professional networks, and support systems that last a lifetime.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 text-xl">🤝</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Professional Networking</div>
                        <div className="text-sm text-gray-600">Connect with business owners and professionals</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-purple-600 text-xl">👨‍👩‍👧‍👦</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Family Connections</div>
                        <div className="text-sm text-gray-600">Build friendships for the whole family</div>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href="/members"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    👥 Meet Members
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Unity Section with Large Image */}
        <section className="relative z-10 py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="animate-fade-in-up">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-16 bg-gradient-to-b from-green-500 to-teal-500 mr-4 animate-pulse-once"></div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      Community <span className="text-green-600">Unity</span>
                    </h3>
                    <p className="text-green-600 font-medium">Stronger Together</p>
                  </div>
                </div>
                
                <div className="bg-green-50/90 backdrop-blur-sm p-8 rounded-2xl border border-green-200 shadow-xl mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Experience the power of unity in our Marwadi community. Together, we preserve 
                    traditions, support each other, and create a home away from home in Colorado.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <Link
                      href="/signup"
                      className="flex items-center justify-center p-4 bg-green-100 hover:bg-green-200 rounded-lg transition-colors group"
                    >
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">🏡</span>
                      <div className="text-left">
                        <div className="font-semibold text-green-800">Join Us</div>
                        <div className="text-sm text-green-600">Become a member</div>
                      </div>
                    </Link>
                    <Link
                      href="/support"
                      className="flex items-center justify-center p-4 bg-teal-100 hover:bg-teal-200 rounded-lg transition-colors group"
                    >
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">💝</span>
                      <div className="text-left">
                        <div className="font-semibold text-teal-800">Support</div>
                        <div className="text-sm text-teal-600">Help our mission</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Large Community Image */}
              <div className="relative animate-fade-in-right">
                <div className="relative z-10 group">
                  <Image 
                    src="/PeoplePhotos/IMG_7667.jpeg" 
                    alt="Community Unity and Togetherness" 
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xl font-bold">United We Stand</p>
                    <p className="text-sm">The strength of our community</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-20 animate-bounce-once"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="relative bg-white py-20 overflow-hidden">
          {/* Traditional Pattern Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 border-8 border-orange-300 rounded-full animate-pulse-once"></div>
              <div className="absolute top-20 right-20 w-24 h-24 border-6 border-red-300 rounded-full animate-bounce-once"></div>
              <div className="absolute bottom-20 left-1/3 w-28 h-28 border-6 border-yellow-300 rounded-full animate-pulse-once"></div>
              <div className="absolute bottom-10 right-1/4 w-20 h-20 border-4 border-pink-300 rounded-full animate-bounce-once"></div>
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center mb-6">
                <Image 
                  src="/MCC1.png" 
                  alt="Community" 
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover border-4 border-orange-300 shadow-lg hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Our Growing <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Community</span>
              </h3>
              <p className="text-orange-600 font-medium text-lg">Building Stronger Connections</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              <div className="text-center group animate-fade-in-up">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300 animate-bounce-once">
                    👥
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold animate-pulse-once">
                    +
                  </div>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  150+
                </div>
                <div className="text-gray-600 text-lg font-medium">Active Members</div>
              </div>

              <div className="text-center group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300 animate-bounce-once">
                    🎉
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold animate-pulse-once">
                    ✓
                  </div>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  4+
                </div>
                <div className="text-gray-600 text-lg font-medium">Annual Events</div>
              </div>

              <div className="text-center group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300 animate-bounce-once">
                    🏆
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-xs font-bold animate-pulse-once">
                    ★
                  </div>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  2+
                </div>
                <div className="text-gray-600 text-lg font-medium">Years Strong</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 animate-fade-in">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-3xl border border-orange-200 shadow-xl max-w-2xl mx-auto">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Join Our Community?
                </h4>
                <p className="text-gray-600 mb-6">
                  Be part of something special. Connect with fellow Marwadi families and experience the warmth of our community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/signup"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    🚀 Join Today
                  </Link>
                  <Link
                    href="/events"
                    className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
                  >
                    📅 View Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
