import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Members() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample family data
  const families = [
    {
      id: 1,
      familyName: "The Sodani Family",
      headOfFamily: "Shivani Sodani",
      members: "Family members",
      joinDate: "2025",
      title: "President",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 2,
      familyName: "The Sharma Family",
      headOfFamily: "Uma Sharma",
      members: "Family members",
      joinDate: "2025",
      title: "Member Gathering Committee",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 3,
      familyName: "The Bisani Family",
      headOfFamily: "Meghana Bisani",
      members: "Family members",
      joinDate: "2025",
      title: "Advisor",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 4,
      familyName: "The Agarwal Family",
      headOfFamily: "Purva Agarwal",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 5,
      familyName: "The Javeria Family",
      headOfFamily: "Ruchi Javeria",
      members: "Family members",
      joinDate: "2025",
      title: "Food Committee",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 6,
      familyName: "The Gupta Family",
      headOfFamily: "Abhishika Gupta",
      members: "Family members",
      joinDate: "2025",
      title: "Treasurer",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 7,
      familyName: "The Gupta Family (Neha)",
      headOfFamily: "Neha Gupta",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 8,
      familyName: "The Kabra Family",
      headOfFamily: "Neha Kabra",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 9,
      familyName: "The Kasat Family",
      headOfFamily: "Rashmi Kasat",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 10,
      familyName: "The Agrawal Family",
      headOfFamily: "Manali Agrawal",
      members: "Family members",
      joinDate: "2025",
      title: "Member Gathering Committee",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 11,
      familyName: "The Purohit Family",
      headOfFamily: "Priyanka Purohit",
      members: "Family members",
      joinDate: "2025",
      title: "Food & Decoration Committee",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 12,
      familyName: "The Maheshwari Family",
      headOfFamily: "Kartika Maheshwari",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 13,
      familyName: "The Soni Family",
      headOfFamily: "Supriya Soni",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 14,
      familyName: "The Somani Family",
      headOfFamily: "Anupama Rathi Somani",
      members: "Family members",
      joinDate: "2025",
      title: "Advisor",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 15,
      familyName: "The Agarwal Family (Varsha)",
      headOfFamily: "Varsha Agarwal",
      members: "Family members",
      joinDate: "2025",
      title: "Co-President",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 16,
      familyName: "The Jain Family",
      headOfFamily: "Priya Jain/Maheshwari",
      members: "Family members",
      joinDate: "2025",
      title: "Decoration & Setup Committee",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 17,
      familyName: "The Tambi Family",
      headOfFamily: "Nimisha Ameria/Tambi",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 18,
      familyName: "The Gaur Family",
      headOfFamily: "Akansha Gaur",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 19,
      familyName: "The Kala Family",
      headOfFamily: "Juhi Kala",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 20,
      familyName: "The Choudhary Family",
      headOfFamily: "Nirmal Choudhary",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 21,
      familyName: "The Sahu Family",
      headOfFamily: "Arti Sahu",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 22,
      familyName: "The Gupta Family (Megha)",
      headOfFamily: "Megha Gupta",
      members: "Family members",
      joinDate: "2025",
      title: "Entertainment Committee",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 23,
      familyName: "The Mittal Family",
      headOfFamily: "Tanushri Mittal",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 24,
      familyName: "The Awasthi Family",
      headOfFamily: "Bhumika Awasthi",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 25,
      familyName: "The Tiwari Family",
      headOfFamily: "Priya Tiwari",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    },
    {
      id: 26,
      familyName: "The Mahajan Family",
      headOfFamily: "Archana Mahajan",
      members: "Family members",
      joinDate: "2025",
      title: "Community Member",
      bio: "Fill out Google Form to give your information!",
      profileImage: "/Mar2.png"
    }
  ];

  const filteredFamilies = families.filter(family => {
    const matchesSearch = family.familyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         family.headOfFamily.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         family.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Members - Marwadi Community of Colorado</title>
        <meta name="description" content="Connect with members of the Marwadi Community of Colorado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* Indian Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-6xl text-orange-300 transform rotate-12">🕉️</div>
          <div className="absolute top-60 right-1/4 text-5xl text-red-300 transform -rotate-12">🪔</div>
          <div className="absolute bottom-1/3 left-1/4 text-4xl text-yellow-300 transform rotate-45">🌺</div>
          <div className="absolute bottom-20 right-20 text-5xl text-pink-300 transform -rotate-45">🤝</div>
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
                <Link href="/members" className="text-gray-700 hover:text-orange-600 transition-colors font-medium border-b-2 border-orange-500">
                  Members
                </Link>
                <Link href="/signup" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
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
              <span className="mx-4 text-4xl">🤝</span>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Our Community Families
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the wonderful families that make up our Marwadi community in Colorado
            </p>
          </div>

          {/* Search Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-orange-200">
            <div className="max-w-md mx-auto">
              <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                Search Families
              </label>
              <input
                type="text"
                placeholder="Search by family name or members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Families Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFamilies.map((family) => (
              <div key={family.id} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-200">
                <div className="relative h-48 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center overflow-hidden">
                  <Image 
                    src={family.profileImage}
                    alt={family.familyName}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {family.familyName}
                    </h3>
                    <p className="text-orange-600 font-semibold">{family.headOfFamily}</p>
                    {family.title && (
                      <div className="mt-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          family.title === 'President' ? 'bg-purple-100 text-purple-800' :
                          family.title === 'Co-President' ? 'bg-blue-100 text-blue-800' :
                          family.title === 'Advisor' ? 'bg-green-100 text-green-800' :
                          family.title === 'Treasurer' ? 'bg-yellow-100 text-yellow-800' :
                          family.title.includes('Committee') ? 'bg-orange-100 text-orange-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {family.title}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">👨‍👩‍👧‍👦</span>
                      <span>{family.members}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">📅</span>
                      <span>Joined {family.joinDate}</span>
                    </div>
                  </div>

                  {/* Bio Section */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">Family Bio:</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {family.bio}
                    </p>
                  </div>

                  {/* Connect Button */}
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg">
                    Connect with Family
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredFamilies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500 text-lg">No families found matching your search criteria.</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-orange-200 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 text-4xl text-orange-300 transform rotate-12">🤝</div>
                <div className="absolute bottom-4 left-4 text-3xl text-red-300 transform -rotate-12">👨‍👩‍👧‍👦</div>
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
                  Want to Join Our Community?
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Bring your family into our growing Marwadi community in Colorado!<br />
                  <span className="text-orange-600">Connect with other families and preserve our beautiful traditions together.</span>
                </p>
                <Link
                  href="/signup"
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
                >
                  🏠 Join as a Family
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
