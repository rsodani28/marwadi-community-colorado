import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  families: string;
  photosLink: string;
  status: string;
  image: string;
}

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const upcomingEvents: Event[] = [];

  const pastEvents = [
    {
      id: 5,
      title: "Marwadi Gala",
      date: "April 19, 2025",
      time: "Evening Event",
      location: "Lantern House",
      category: "festival",
      description: "A spectacular evening celebrating our Marwadi heritage with traditional performances, dinner, and community connections.",
      families: "26 families",
      photosLink: "https://photos.app.goo.gl/Yv7uwTpG4KykJmDd6",
      status: "completed",
      image: "/PeoplePhotos/20250419_183216.jpg"
    },
    {
      id: 6,
      title: "Marwadi Summer Picnic",
      date: "July 20, 2025",
      time: "Day Event",
      location: "Cherry Creek State Park",
      category: "social",
      description: "A fun-filled family picnic with games, traditional food, and outdoor activities in the beautiful Colorado nature.",
      families: "34 families",
      photosLink: "https://photos.app.goo.gl/fK1ndF3GhWCoYtKo6",
      status: "completed",
      image: "/PeoplePhotos/IMG_7925.JPG"
    }
  ];

  const categories = [
    { id: "all", name: "All Events" },
    { id: "festival", name: "Festivals" },
    { id: "networking", name: "Networking" },
    { id: "education", name: "Education" },
    { id: "social", name: "Social" }
  ];

  return (
    <>
      <Head>
        <title>Events - Marwadi Community of Colorado</title>
        <meta name="description" content="Upcoming events and activities for the Marwadi Community of Colorado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* Indian Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-6xl text-orange-300 transform rotate-12">🕉️</div>
          <div className="absolute top-40 right-1/4 text-5xl text-red-300 transform -rotate-12">🪔</div>
          <div className="absolute bottom-1/3 left-1/3 text-4xl text-yellow-300 transform rotate-45">🎭</div>
          <div className="absolute bottom-20 right-20 text-5xl text-pink-300 transform -rotate-45">🌺</div>
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
                <Link href="/events" className="text-gray-700 hover:text-orange-600 transition-colors font-medium border-b-2 border-orange-500">
                  Events
                </Link>
                <Link href="/members" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
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
              <span className="mx-4 text-4xl">🎭</span>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Community Events
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for cultural celebrations, networking opportunities, and community activities
            </p>
          </div>

          {/* Event Categories Filter */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-orange-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Filter by Category
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-orange-50 border border-orange-200 shadow-sm"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Upcoming <span className="text-orange-600">Events</span>
              </h2>
            </div>
            
            {/* Coming Soon Box */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-12 text-center shadow-lg backdrop-blur-sm">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Coming Soon!</h3>
              <p className="text-lg text-orange-700 mb-6">
                We&apos;re currently planning exciting new events for our community. 
                Stay tuned for updates on upcoming celebrations, workshops, and gatherings!
              </p>
            </div>
          </div>

          {/* Past Events Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Past <span className="text-green-600">Events</span>
              </h2>
              <p className="text-gray-600">Successfully completed community gatherings</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents
                .filter(event => selectedCategory === "all" || event.category === selectedCategory)
                .map((event) => (
                <div key={event.id} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-green-200">
                  <div className="relative h-48 bg-gradient-to-br from-green-200 to-teal-200 flex items-center justify-center overflow-hidden">
                    <Image 
                      src={event.image || "/Mar2.png"} 
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                        COMPLETED
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.category === 'festival' ? 'bg-purple-100 text-purple-800' :
                        event.category === 'networking' ? 'bg-blue-100 text-blue-800' :
                        event.category === 'education' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.category === 'festival' ? '🎭 Festival' :
                         event.category === 'networking' ? '🤝 Networking' :
                         event.category === 'education' ? '📚 Education' :
                         '👥 Social'}
                      </span>
                      <span className="text-green-600 font-bold text-sm">✓ {event.families}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-green-600 flex items-center font-medium">
                        <span className="mr-2">✅</span> {event.date}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2">🕒</span> {event.time}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2">📍</span> {event.location}
                      </p>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                    <a 
                      href={event.photosLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block text-center bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-4 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
                    >
                      📸 View Photos
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-orange-200 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 text-4xl text-orange-300 transform rotate-12">🎭</div>
                <div className="absolute bottom-4 left-4 text-3xl text-red-300 transform -rotate-12">🪔</div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <Image 
                    src="/MarwarResize.jpg" 
                    alt="Community" 
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-300"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Want to Organize an Event?
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Have an idea for a community event? We&apos;d love to hear from you!<br />
                  <span className="text-orange-600">Share your cultural ideas and traditions with our community.</span>
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
                  🌟 Propose an Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
