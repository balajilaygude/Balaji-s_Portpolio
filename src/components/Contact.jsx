import contact from '../assets/20943705.jpg'
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';


export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10"
    >
      <img src={contact} alt="" className="sm:w-[500px] sm:h-[500px] rounded-md"/>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h3 className="sm:text-4xl text-2xl font-bold mb-4 sm:my-10">Connect With Me</h3>
        <div className='flex justify-center items-center m-5 gap-5'>
          <Mail/>
          <p> balajiwork05@gmail.com</p>
        </div>
        <div className='flex justify-center items-center m-5 gap-5'>
          <Phone/>
          <p> +91 80800 49103</p>
        </div>
        <div className='flex justify-center items-center m-5 gap-5'>
          <MapPin/>
          <p> Pune, Maharashtra</p>
        </div>
        <div className='sm:text-3xl text-2xl font-bold sm:mt-30 font-serif'>
          <h2>Lets Join and Create Together </h2>
        </div>
        
      </div>
    </section>
  )
}
