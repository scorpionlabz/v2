'use client'

import CircleGradient from './CircleGradient';
import SquareGradient from './SquareGradient';

interface Service {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 items-start p-6 sm:p-8 bg-black/20 opacity-80 sm:opacity-60 hover:opacity-100 backdrop-blur-sm rounded-xl hover:border-white/80 hover:backdrop-blur-md transition-all duration-500 ease-in-out border border-white/40 text-white/40 hover:text-white/100">
      <div className='w-full sm:w-3/4 flex flex-col justify-start items-start'>
        <div className='w-full flex flex-row justify-between items-center'>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{service.title}</h3>
        </div>
        <h4 className="text-base sm:text-lg text-white/80 mb-4">{service.subtitle}</h4>
        <p className="text-sm sm:text-base text-white/60">{service.description}</p>
      </div>
      <div className='hidden sm:flex w-1/4 h-full flex-col justify-center items-center'>
        <div className='w-32 h-32 aspect-square'>
          {service.icon === 'design' ? <CircleGradient /> : <SquareGradient />}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 