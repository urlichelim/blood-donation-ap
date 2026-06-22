'use client';

import { useState } from "react";
import { Search, MapPin, Phone, Droplets, User } from "lucide-react";

import { donors as mockDonors } from "../data/donors";

const bloodTypes = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function DonorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filtered = mockDonors.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          d.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || d.bloodType === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Blood Donors</h1>
          <p className="text-gray-600 mt-2">Search for donors by location or blood type</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blood-500 focus:border-transparent outline-none"
              />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blood-500 outline-none bg-white"
            >
              {bloodTypes.map((t) => (
                <option key={t} value={t}>{t === "All" ? "All Blood Types" : `Type ${t}`}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((donor) => (
            <div key={donor.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{donor.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      donor.status === "Available" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {donor.status}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blood-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blood-700">{donor.bloodType}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{donor.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{donor.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Droplets className="h-4 w-4" />
                  <span>Last donation: {donor.lastDonation}</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-blood-600 text-white py-2 rounded-lg hover:bg-blood-700 transition-colors font-medium">
                Contact Donor
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No donors found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}