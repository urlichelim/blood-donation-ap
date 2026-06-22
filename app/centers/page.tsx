import { MapPin, Clock, Phone, Droplets } from "lucide-react";

const centers = [
  { name: "Kigali Central Blood Bank", address: "KN 4 Ave, Nyarugenge, Kigali", phone: "+250 252 575 000", hours: "Mon-Fri: 8AM - 5PM", type: "Regional Center" },
  { name: "CHUK Blood Donation Unit", address: "CHUK Hospital, Kigali", phone: "+250 252 575 001", hours: "Mon-Sat: 7AM - 6PM", type: "Hospital Based" },
  { name: "Musanze District Hospital", address: "Musanze Town, Northern Province", phone: "+250 252 575 002", hours: "Mon-Fri: 8AM - 4PM", type: "District Center" },
  { name: "Huye University Teaching Hospital", address: "Huye, Southern Province", phone: "+250 252 575 003", hours: "Mon-Sat: 8AM - 5PM", type: "Hospital Based" },
  { name: "Rubavu Hospital", address: "Rubavu, Western Province", phone: "+250 252 575 004", hours: "Mon-Fri: 8AM - 4PM", type: "District Center" },
  { name: "Rwamagana District Hospital", address: "Rwamagana, Eastern Province", phone: "+250 252 575 005", hours: "Mon-Fri: 8AM - 4PM", type: "District Center" },
];

export default function CentersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Donation Centers</h1>
          <p className="text-gray-600 mt-2">Find a blood donation center near you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centers.map((center, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blood-100 rounded-full flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-blood-600" />
                </div>
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  {center.type}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">{center.name}</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{center.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{center.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{center.hours}</span>
                </div>
              </div>

              <button className="w-full mt-5 bg-blood-50 text-blood-700 py-2 rounded-lg hover:bg-blood-100 transition-colors font-medium text-sm">
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}