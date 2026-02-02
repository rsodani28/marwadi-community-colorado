import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Family = {
  id: number;
  familyName: string;
  headOfFamily: string;
  members: string;
  joinDate: string;
  title: string;
  bio: string;
  profileImage: string;
  imagePosition?: string;
};

const families: Family[] = [
  {
    id: 1,
    familyName: "The Sodani Family",
    headOfFamily: "Shivani Sodani",
    members: "Shivani, Saurabh, Dhruv, Rishabh Sodani",
    joinDate: "2025",
    title: "Community Member",
    bio: "Dil se Marwari, our life is khana, gana, and a lifelong love affair with numbers.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/unnamed - Shivani Sodani.jpg"),
    imagePosition: "50% 40%"
  },
  {
    id: 2,
    familyName: "The Javeria Family",
    headOfFamily: "Manish Javeria",
    members: "Manish Javeria",
    joinDate: "2025",
    title: "Community Member",
    bio: "We are a Jain family from Udaipur!",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/7fe2d88c-9a41-4ccf-a9db-3afd20d52c19 - Ruchi Javeria.jpeg"),
    imagePosition: "50% 35%"
  },
  {
    id: 3,
    familyName: "The Jain Family",
    headOfFamily: "Praful Jain",
    members: "Praful Jain, Archana, Bhupin, Bhushali",
    joinDate: "2025",
    title: "Community Member",
    bio: "Marwari originally from Jodhpur, living in Pune in India.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/IMG_6447 - PJ Jain.jpeg")
  },
  {
    id: 4,
    familyName: "The Gupta Family",
    headOfFamily: "Sachin Gupta",
    members: "Sachin Gupta, Neha Gupta, Ananya Gupta, Anay Gupta",
    joinDate: "2025",
    title: "Community Member",
    bio: "Sachin born and brought up in Jaipur. Food, festival and fun. Daal bati, gatte, ghewar, you name it, our family enjoys these delicacies.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/20250412_194602(1) - Neha Gupta.jpg")
  },
  {
    id: 5,
    familyName: "The Gupta Family",
    headOfFamily: "Gautam Gupta & Abhishika Fatehpuria",
    members: "Gautam, Abhishika, Agastya, Arihant",
    joinDate: "2025",
    title: "Community Member",
    bio: "Both of us come from Jaipur and we love our pyaz ki kachoris!",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/20250317_115410 - Abhishika Fatehpuria.jpg")
  },
  {
    id: 6,
    familyName: "The Sharma Family",
    headOfFamily: "Shivani Sharma",
    members: "Shivani Sharma, Manu Sharma, Dhruv Sharma, Anika Sharma",
    joinDate: "2025",
    title: "Community Member",
    bio: "Shivani and Manu are IT professionals. Son Dhruv and Daughter Anika are college students. All four of us love to travel, socialize and participate in outdoor activities.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/dhruv6 - Manu Sharma.JPG"),
    imagePosition: "50% 25%"
  },
  {
    id: 7,
    familyName: "The Jain Family",
    headOfFamily: "Priya & Sumit Jain",
    members: "Priya Jain, Sumit Jain, Maanya Jain, Arin Jain",
    joinDate: "2025",
    title: "Community Member",
    bio: "Traditions, culture and language. Born and brought up in a traditional Marwari family, keen on following traditions, celebrating festivals and speaking the native language back home.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/SOU_8035 - Priya Sumit.jpeg"),
    imagePosition: "50% 15%"
  },
  {
    id: 8,
    familyName: "The Purohit Family",
    headOfFamily: "Surendra & Kanta Purohit",
    members: "Surendra, Kanta, Dev, Priyanka, Abhay, Ayush Purohit",
    joinDate: "2025",
    title: "Community Member",
    bio: "We are a Marwari family from Jodhpur. Our values, hospitality, and strong family bonds guide everything we do.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/IMG_1528 - Poonam Purohit.jpeg"),
    imagePosition: "50% 20%"
  },
  {
    id: 9,
    familyName: "The Somani Family",
    headOfFamily: "Anupama & Manish Somani",
    members: "Anupama Somani, Manish Somani, Eesha, Aarav",
    joinDate: "2025",
    title: "Community Member",
    bio: "Roots from Jodhpur/Phalodi/Chittod - love to celebrate our marwadi food, culture and traditions.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/IMG_9006 - Anupama Rathi.jpg"),
    imagePosition: "50% 25%"
  },
  {
    id: 10,
    familyName: "The Agarwal Family",
    headOfFamily: "Deepak & Varsha Agarwal",
    members: "Deepak Agarwal, Varsha Agarwal, Reyansh",
    joinDate: "2025",
    title: "Community Member",
    bio: "We are a culturally rooted Marwari family originally from Rajasthan, with strong respect for traditions, rituals, and community values. We follow Marwari customs and festivals and believe in living with integrity, hospitality, and financial discipline.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/IMG_2424 - Varsha Agarwal.jpeg")
  },
  {
    id: 11,
    familyName: "The Bisani Family",
    headOfFamily: "Mayur & Meghana Bisani",
    members: "Mayur Bisani, Meghana Bisani",
    joinDate: "2025",
    title: "Community Member",
    bio: "Husband is a Maheshwari Marwadi.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/IMG_7459 - Meghana Bisani.jpeg"),
    imagePosition: "50% 30%"
  },
  {
    id: 12,
    familyName: "The Kasat Family",
    headOfFamily: "Rahul & Rashmi Kasat",
    members: "Rahul Kasat, Rashmi Kasat, Rhythm Kasat",
    joinDate: "2025",
    title: "Community Member",
    bio: "We are a Marwari family from Pune.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/IMG_1944 - Rashmi Kasat.jpeg")
  },
  {
    id: 13,
    familyName: "The Mittal Family",
    headOfFamily: "Mayank Mittal & Manali Agrawal Mittal",
    members: "Mayank Mittal, Manali Agrawal Mittal, Hridhaan, Mihaan",
    joinDate: "2025",
    title: "Community Member",
    bio: "My Rajasthani Roots! We practice Marwari traditions and enjoys Marwari food!",
    profileImage: encodeURI("/Mittal.png"),
    imagePosition: "50% 35%"
  },
  {
    id: 14,
    familyName: "The Anisha Family",
    headOfFamily: "Anisha & Dharmil",
    members: "Anisha, Dharmil, Divit",
    joinDate: "2025",
    title: "Community Member",
    bio: "Marwari from Calcutta, love the food and traditions.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/60b3e779-638c-4597-a124-8068ae8f10cd - Anisha.jpeg"),
    imagePosition: "50% 20%"
  },
  {
    id: 15,
    familyName: "The Sharma Family",
    headOfFamily: "Uma & Utkal Sharma",
    members: "Uma, Utkal, Eshaan, Google Sharma",
    joinDate: "2025",
    title: "Community Member",
    bio: "Marwari family; parents from Sawai Madhopur, grew up eating dal bati and celebrating Gangaur.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/9d7102ce-aa9a-400b-8843-1c3d472cb2b9 - Uma Sharma.jpeg"),
    imagePosition: "50% 18%"
  },
  {
    id: 16,
    familyName: "The Kabra Family",
    headOfFamily: "Neha & Sumeet Kabra",
    members: "Neha, Sumeet Kabra, Aarav, Ayaan",
    joinDate: "2025",
    title: "Community Member",
    bio: "Hospitality, skilled at bargaining and deal-making.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/PHOTO-2026-01-30-21-50-45 - Sumeet Kabra.jpg"),
    imagePosition: "50% 45%"
  },
  {
    id: 17,
    familyName: "The Gaur Family",
    headOfFamily: "Mitesh & Akanksha Gaur",
    members: "Mitesh, Akanksha, Mitaksh, Mitika",
    joinDate: "2025",
    title: "Community Member",
    bio: "We are from Bharatpur.",
    profileImage: encodeURI("/PeoplePhotos/MemberPhotos/Gaur.jpg"),
    imagePosition: "50% 35%"
  }
];

export default function Members() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFamilies = families.filter((family) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return true;

    return (
      family.familyName.toLowerCase().includes(query) ||
      family.headOfFamily.toLowerCase().includes(query) ||
      family.members.toLowerCase().includes(query) ||
      family.bio.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <Head>
        <title>Members - Marwari Community of Colorado</title>
        <meta name="description" content="Connect with members of the Marwari Community of Colorado" />
        <link rel="icon" href="/MarwariCClogo.jpg" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* Indian Pattern Background */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-20 left-20 text-6xl text-orange-300 transform rotate-12">*</div>
          <div className="absolute top-60 right-1/4 text-5xl text-red-300 transform -rotate-12">*</div>
          <div className="absolute bottom-1/3 left-1/4 text-4xl text-yellow-300 transform rotate-45">*</div>
          <div className="absolute bottom-20 right-20 text-5xl text-pink-300 transform -rotate-45">*</div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 border-b border-orange-200 bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image 
                  src="/MarwariCClogo.jpg" 
                  alt="Marwari Community Logo" 
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover border-2 border-orange-300"
                />
                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Marwari Community of Colorado
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
                <Link href="/financials" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
                  Financials
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
              <span className="mx-4 text-4xl" aria-hidden="true">*</span>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Our Community Families
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the wonderful families that make up our Marwari community in Colorado
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
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    style={family.imagePosition ? { objectPosition: family.imagePosition } : undefined}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {family.familyName}
                    </h3>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2 font-semibold text-orange-600">Members:</span>
                      <span className="text-gray-700">{family.members}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2 font-semibold text-orange-600">Joined:</span>
                      <span className="text-gray-700">{family.joinDate}</span>
                    </div>
                  </div>

                  {/* Bio Section */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">Family Bio:</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {family.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredFamilies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4" aria-hidden="true">*</div>
              <p className="text-gray-500 text-lg">
                {searchTerm.trim()
                  ? "No members match your search. Try another name or keyword."
                  : "No members are listed yet. Check back soon!"}
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-orange-200 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <div className="absolute top-4 right-4 text-4xl text-orange-300 transform rotate-12">*</div>
                <div className="absolute bottom-4 left-4 text-3xl text-red-300 transform -rotate-12">*</div>
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
                  Bring your family into our growing Marwari community in Colorado!<br />
                  <span className="text-orange-600">Connect with other families and preserve our beautiful traditions together.</span>
                </p>
                <Link
                  href="/signup"
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
                >
                  Join as a Family
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
