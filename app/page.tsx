import HeroSection from "./components/HeroSection";
import { Droplets, Heart, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Easy Donation",
    desc: "Find nearby donation centers and schedule appointments in minutes.",
  },
  {
    icon: Heart,
    title: "Save Lives",
    desc: "Your single donation can save up to three lives in emergency situations.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Join a network of donors and recipients supporting each other.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    desc: "All donor information is verified and kept strictly confidential.",
  },
];

const bloodTypes = [
  { type: "A+", canGive: "A+, AB+", canReceive: "A+, A-, O+, O-" },
  { type: "O-", canGive: "All Types", canReceive: "O-" },
  { type: "B+", canGive: "B+, AB+", canReceive: "B+, B-, O+, O-" },
  { type: "AB+", canGive: "AB+", canReceive: "All Types" },
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Donate Blood?</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Blood donation is a simple, safe process that takes about an hour but makes a lifetime of difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow border border-gray-100">
                <feature.icon className="h-10 w-10 text-blood-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Blood Type Compatibility</h2>
            <p className="mt-4 text-gray-600">Know who you can donate to and receive from</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bloodTypes.map((bt, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-blood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blood-700">{bt.type}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">Can donate to:</span>
                    <p className="font-medium text-gray-900">{bt.canGive}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Can receive from:</span>
                    <p className="font-medium text-gray-900">{bt.canReceive}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blood-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-blood-100 mb-8 text-lg">
            Join thousands of donors who are saving lives every day. It only takes a few minutes to get started.
          </p>
          <a
            href="/donors"
            className="inline-block bg-white text-blood-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Become a Donor
          </a>
        </div>
      </section>
    </div>
  );
}