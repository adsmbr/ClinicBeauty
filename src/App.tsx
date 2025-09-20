import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Star, Check, Heart, User, Zap, Sparkles, MessageCircle, Shield, Award, Clock } from 'lucide-react';

// Interfaces
interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
}

interface Testimonial {
  name: string;
  text: string;
  image: string;
  rating: number;
}

interface TeamMember {
  name: string;
  specialty: string;
  credentials: string;
  experience: string;
  image: string;
}

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

interface Differential {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      name: "Maria Silva",
      text: "Atendimento excepcional! A equipe é muito profissional e os resultados superaram minhas expectativas.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Ambiente acolhedor e tratamentos de alta qualidade. A atenção aos detalhes e o cuidado personalizado fazem toda a diferença.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5
    },
    {
      name: "Carla Santos",
      text: "Profissionais dedicados e resultados incríveis! Minha autoestima nunca esteve tão alta. Cada visita é uma experiência única.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5
    },
    {
      name: "Juliana Oliveira",
      text: "Tecnologia de ponta e profissionais altamente qualificados. O resultado dos tratamentos superou todas as minhas expectativas.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5
    }
  ];

  // Team data
  const team: TeamMember[] = [
    {
      name: "Dr. Ricardo Oliveira",
      specialty: "Dermatologista",
      credentials: "CRM 12345-SP",
      experience: "15 anos de experiência",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Dra. Fernanda Lima",
      specialty: "Cirurgiã Plástica",
      credentials: "CRM 67890-SP",
      experience: "12 anos de experiência",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Dra. Juliana Mendes",
      specialty: "Esteticista Especializada",
      credentials: "CREF 11223-SP",
      experience: "10 anos de experiência",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  // Services data with enhanced information
  const services: Service[] = [
    {
      icon: User,
      title: "Consultas Médicas",
      description: "Avaliação completa com profissionais especializados para diagnósticos precisos e planos de tratamento personalizados.",
      features: ["Consulta inicial", "Avaliação detalhada", "Plano personalizado"]
    },
    {
      icon: Sparkles,
      title: "Procedimentos Estéticos",
      description: "Tratamentos modernos e seguros para realçar sua beleza natural com as mais avançadas tecnologias do mercado.",
      features: ["Botox", "Preenchimento", "Harmonização facial"]
    },
    {
      icon: Zap,
      title: "Peelings Químicos",
      description: "Renovação da pele com técnicas avançadas para um aspecto jovem, saudável e radiante.",
      features: ["Peeling superficial", "Peeling médio", "Peeling profundo"]
    },
    {
      icon: Heart,
      title: "Avaliação de Beleza",
      description: "Análise personalizada e detalhada para definir os melhores tratamentos específicos para você.",
      features: ["Análise facial", "Plano de tratamento", "Acompanhamento"]
    }
  ];

  // Differentials data
  const differentials: Differential[] = [
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Protocolos rigorosos de segurança e higiene para sua tranquilidade"
    },
    {
      icon: Award,
      title: "Excelência Reconhecida",
      description: "Profissionais certificados e premiados na área da medicina estética"
    },
    {
      icon: Clock,
      title: "Atendimento Personalizado",
      description: "Tempo dedicado exclusivamente a você, sem pressa ou correria"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Contact form handler
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  // Form validation
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'Nome é obrigatório';
    if (!formData.phone.trim()) errors.phone = 'Telefone é obrigatório';
    if (!formData.email.trim()) {
      errors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email inválido';
    }
    if (!formData.service) errors.service = 'Selecione um serviço';
    if (!formData.date) errors.date = 'Selecione uma data';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      alert('Agendamento solicitado com sucesso! Entraremos em contato em breve.');
      setIsModalOpen(false);
      setFormData({ name: '', phone: '', email: '', service: '', date: '' });
    }
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-teal-500">Clinic</span>Beauty
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-500 transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-500 transition-colors">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-teal-500 transition-colors">
                  Equipe
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-teal-500 transition-colors">
                  Depoimentos
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors"
                >
                  Agendar
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-500 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors w-full text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors w-full text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection('team')} className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors w-full text-left">
                Equipe
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors w-full text-left">
                Depoimentos
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="block w-full text-left px-3 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors mx-3 mt-4"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 animate-fade-in">
            Sua Beleza, 
            <br />
            <span className="text-teal-500 font-medium">Nosso Cuidado</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desperte sua beleza natural com tratamentos personalizados e cuidados especializados em nossa clínica médica e estética de excelência.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-teal-500 text-white px-8 py-4 text-lg rounded-full hover:bg-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Agendar Consulta
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-teal-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-teal-500 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Nossos <span className="text-teal-500 font-medium">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços médicos e estéticos com a mais alta qualidade e segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center group"
              >
                <div className="text-teal-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-500">
                      <Check className="w-4 h-4 text-teal-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Por que escolher a <span className="text-teal-500 font-medium">ClinicBeauty</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos diferenciais garantem uma experiência única e resultados excepcionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="text-center group">
                <div className="text-teal-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <differential.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{differential.title}</h3>
                <p className="text-gray-600 leading-relaxed">{differential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Nossa <span className="text-teal-500 font-medium">Equipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais especializados e dedicados ao seu bem-estar e beleza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                    <img 
                      src={member.image}
                      alt={`Dr. ${member.name}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-500 text-lg font-medium mb-2">{member.specialty}</p>
                <p className="text-gray-600 text-sm mb-1">{member.credentials}</p>
                <p className="text-gray-500 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
       <section id="testimonials" className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-light text-gray-900 mb-4">
               O que nossos <span className="text-teal-500 font-medium">Pacientes</span> dizem
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Depoimentos reais de pessoas que confiaram em nossos serviços e transformaram suas vidas.
             </p>
           </div>

           <div className="max-w-4xl mx-auto">
             <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group">
               <div className="flex items-center mb-6">
                 <div className="w-16 h-16 rounded-full overflow-hidden shadow-md mr-4">
                   <img 
                     src={testimonials[currentTestimonial].image}
                     alt={testimonials[currentTestimonial].name}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                   />
                 </div>
                 <div>
                   <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                   <div className="flex mb-2">
                     {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                       <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                     ))}
                   </div>
                 </div>
               </div>
               
               <blockquote className="text-gray-700 italic leading-relaxed mb-6 text-lg">
                 "{testimonials[currentTestimonial].text}"
               </blockquote>
               
               <div className="flex justify-center space-x-2">
                 {testimonials.map((_, index) => (
                   <button
                     key={index}
                     onClick={() => setCurrentTestimonial(index)}
                     className={`w-3 h-3 rounded-full transition-colors ${
                       index === currentTestimonial ? 'bg-teal-500' : 'bg-gray-300'
                     }`}
                   />
                 ))}
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Contact Section */}
       <section id="contact" className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-light text-gray-900 mb-4">
               Entre em <span className="text-teal-500 font-medium">Contato</span>
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Estamos prontos para atendê-la e esclarecer todas as suas dúvidas. Agende sua consulta hoje mesmo.
             </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {/* Contact Information */}
             <div className="space-y-8">
               <div className="bg-white p-8 rounded-2xl shadow-sm">
                 <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informações de Contato</h3>
                 
                 <div className="space-y-6">
                   <div className="flex items-start">
                     <MapPin className="w-6 h-6 text-teal-500 mt-1 mr-4 flex-shrink-0" />
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                       <p className="text-gray-600">Rua das Flores, 123 - Centro</p>
                       <p className="text-gray-600">São Paulo, SP - CEP: 01234-567</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start">
                     <Phone className="w-6 h-6 text-teal-500 mt-1 mr-4 flex-shrink-0" />
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                       <p className="text-gray-600">(11) 9999-9999</p>
                       <p className="text-gray-600">(11) 8888-8888</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start">
                     <Mail className="w-6 h-6 text-teal-500 mt-1 mr-4 flex-shrink-0" />
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                       <p className="text-gray-600">contato@clinicbeauty.com.br</p>
                       <p className="text-gray-600">agendamento@clinicbeauty.com.br</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start">
                     <Clock className="w-6 h-6 text-teal-500 mt-1 mr-4 flex-shrink-0" />
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h4>
                       <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                       <p className="text-gray-600">Sábado: 8h às 14h</p>
                       <p className="text-gray-600">Domingo: Fechado</p>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Social Media */}
               <div className="bg-white p-8 rounded-2xl shadow-sm">
                 <h3 className="text-2xl font-semibold text-gray-900 mb-6">Siga-nos nas Redes Sociais</h3>
                 <div className="flex space-x-4">
                   <a href="#" className="bg-teal-500 text-white p-3 rounded-full hover:bg-teal-600 transition-colors duration-300">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                     </svg>
                   </a>
                   <a href="#" className="bg-teal-500 text-white p-3 rounded-full hover:bg-teal-600 transition-colors duration-300">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                     </svg>
                   </a>
                   <a href="#" className="bg-teal-500 text-white p-3 rounded-full hover:bg-teal-600 transition-colors duration-300">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                     </svg>
                   </a>
                 </div>
               </div>
             </div>

             {/* Contact Form */}
             <div className="bg-white p-8 rounded-2xl shadow-sm">
               <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envie sua Mensagem</h3>
               
               <form onSubmit={handleContactSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                       Nome Completo *
                     </label>
                     <input
                       type="text"
                       id="name"
                       name="name"
                       required
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300"
                       placeholder="Seu nome completo"
                     />
                   </div>
                   
                   <div>
                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                       Telefone *
                     </label>
                     <input
                       type="tel"
                       id="phone"
                       name="phone"
                       required
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300"
                       placeholder="(11) 99999-9999"
                     />
                   </div>
                 </div>
                 
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                     E-mail *
                   </label>
                   <input
                     type="email"
                     id="email"
                     name="email"
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300"
                     placeholder="seu@email.com"
                   />
                 </div>
                 
                 <div>
                   <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                     Serviço de Interesse
                   </label>
                   <select
                     id="service"
                     name="service"
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300"
                   >
                     <option value="">Selecione um serviço</option>
                     <option value="dermatologia">Dermatologia Clínica</option>
                     <option value="estetica">Estética Facial</option>
                     <option value="laser">Tratamentos a Laser</option>
                     <option value="injetaveis">Procedimentos Injetáveis</option>
                   </select>
                 </div>
                 
                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                     Mensagem *
                   </label>
                   <textarea
                     id="message"
                     name="message"
                     rows={5}
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300 resize-none"
                     placeholder="Conte-nos como podemos ajudá-la..."
                   ></textarea>
                 </div>
                 
                 <button
                   type="submit"
                   className="w-full bg-teal-500 text-white py-4 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                 >
                   Enviar Mensagem
                 </button>
               </form>
             </div>
           </div>
         </div>
       </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-teal-500">Clinic</span>Beauty
            </h3>
            <p className="text-gray-400 mb-4">
              Sua beleza, nosso cuidado. Excelência em medicina e estética.
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 ClinicBeauty. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta na ClinicBeauty."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Appointment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Agendar Consulta</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                      formErrors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Digite seu nome completo"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(11) 99999-9999"
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="seu@email.com"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço Desejado
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                      formErrors.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="consulta">Consulta Médica</option>
                    <option value="estetico">Procedimento Estético</option>
                    <option value="peeling">Peeling Químico</option>
                    <option value="avaliacao">Avaliação de Beleza</option>
                  </select>
                  {formErrors.service && <p className="text-red-500 text-sm mt-1">{formErrors.service}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data Preferida
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                      formErrors.date ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.date && <p className="text-red-500 text-sm mt-1">{formErrors.date}</p>}
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                  >
                    Agendar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          
          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #40E0D0;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #36c5b8;
          }
        `
      }} />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-teal-400">ClinicBeauty</h3>
              <p className="text-gray-400 mt-1">Sua beleza, nosso cuidado</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                 © 2025 ClinicBeauty. Todos os direitos reservados.
               </p>
              <p className="text-gray-500 text-xs mt-1">
                Desenvolvido por{' '}
                <a 
                  href="https://github.com/adsmbr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition-colors"
                >
                  Alisson Montijo
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;