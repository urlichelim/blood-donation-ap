import { Heart, Target, Globe, Award } from "lucide-react";

const stats = [
  { number: "50K+", label: "Lives Saved" },
  { number: "12K+", label: "Active Donors" },
  { number: "150+", label: "Partner Hospitals" },
  { number: "8", label: "Years of Service" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-blood-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About BloodLink</h1>
          <p className="text-blood-100 max-w-2xl mx-auto">
            We are dedicated to bridging the gap between blood donors and those in urgent need.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              BloodLink was founded with a simple mission: to ensure that no one dies due to a lack of blood. 
              We connect voluntary blood donors with patients and hospitals in real-time, making the process 
              faster, safer, and more accessible.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform serves communities across Rwanda and East Africa, providing a reliable network 
              for blood donation and emergency requests.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Heart, title: "Passion", desc: "Driven by the desire to save lives" },
              { icon: Target, title: "Focus", desc: "Zero deaths from blood shortage" },
              { icon: Globe, title: "Reach", desc: "Expanding across East Africa" },
              { icon: Award, title: "Quality", desc: "Verified donors and safe processes" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl text-center">
                <item.icon className="h-8 w-8 text-blood-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-blood-600">{stat.number}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}