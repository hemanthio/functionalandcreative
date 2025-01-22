import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Building2, MapPin, Clock, DollarSign } from 'lucide-react';

const JobCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleApply = (e) => {
    e.stopPropagation();
    setIsFlipped(true);
  };

  const handleApplyAgain = (e) => {
    e.stopPropagation();
    setIsFlipped(false);
  };

  return (
    <div className="h-[calc(100vh-4rem)] font-Geist bg-gray-100 flex items-center justify-center perspective-1000">
      <div className="w-80 h-[28rem] relative">
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full bg-white rounded-3xl shadow-lg backface-hidden p-6 flex flex-col">
            {/* Company Logo */}
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Building2 className="w-7 h-7 text-blue-600" />
            </div>

            {/* Job Details */}
            <h2 className="text-xl font-bold tracking-[-0.7px] text-gray-800 mb-2">Senior React Developer</h2>
            <h3 className="text-md text-blue-600 mb-4">TechCorp Solutions</h3>

            {/* Job Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>San Francisco, CA (Remote)</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center text-gray-600">
                <DollarSign className="w-4 h-4 mr-2" />
                <span>$120k - $160k / year</span>
              </div>
            </div>

            {/* Job Description */}
            <p className="text-gray-600 tracking-tight mb-6">
              You&apos;ll work on cutting-edge projects and help shape the future of our products.
            </p>

            {/* Apply Button */}
            <button 
              onClick={handleApply}
              className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-Geist font-semibold py-2 px-4 rounded-xl transition-colors"
            >
              Apply Now
            </button>
          </div>

          {/* Back of card (Success State) */}
          <div className="absolute w-full h-full bg-blue-600 rounded-3xl shadow-lg backface-hidden p-6 flex flex-col items-center justify-center rotate-y-180">
            <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center mb-4">
              <Check className="w-9 h-9 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Application Submitted!</h2>
            <p className="text-blue-100 text-center mb-6">
              Thank you for applying. We&apos;ll review your application and get back to you soon.
            </p>
            <button 
              className="w-full bg-white hover:bg-gray-100 text-blue-600 font-semibold py-2 px-4 rounded-xl transition-colors"
              onClick={handleApplyAgain}
            >
              Review details
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default JobCard;