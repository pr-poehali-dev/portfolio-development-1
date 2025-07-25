import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Полнофункциональная платформа электронной коммерции с интеграцией платежных систем, корзиной покупок и админ-панелью",
      longDescription: "Современная платформа для онлайн-торговли, разработанная с использованием React и TypeScript. Включает систему управления товарами, интеграцию с платежными системами (Stripe, PayPal), аналитику продаж и мобильную адаптацию.",
      image: "/img/9d53b51f-2353-4a12-9d1e-fb8252ac1b83.jpg",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      category: "fullstack",
      link: "https://ecommerce-demo.com",
      github: "https://github.com/user/ecommerce",
      features: ["Корзина покупок", "Платежные системы", "Админ-панель", "Мобильная версия"]
    },
    {
      id: 2,
      title: "AI Analytics Dashboard",
      description: "Интеллектуальная аналитическая панель с машинным обучением для анализа бизнес-данных",
      longDescription: "Современный дашборд для анализа данных с применением алгоритмов машинного обучения. Включает предиктивную аналитику, интерактивные графики и автоматические отчеты.",
      image: "/img/04eca957-0874-443a-bc77-be683a8307ae.jpg",
      tech: ["Python", "TensorFlow", "React", "D3.js", "FastAPI", "PostgreSQL"],
      category: "ai",
      link: "https://ai-dashboard-demo.com",
      github: "https://github.com/user/ai-dashboard",
      features: ["Машинное обучение", "Предиктивная аналитика", "Интерактивные графики", "Автоотчеты"]
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Корпоративный сайт с современным дизайном, CMS и SEO-оптимизацией",
      longDescription: "Профессиональный корпоративный сайт с адаптивным дизайном, системой управления контентом и полной SEO-оптимизацией. Высокая скорость загрузки и отличные показатели Core Web Vitals.",
      image: "/img/8976f414-11f7-40b0-8157-a146c6ffd67d.jpg",
      tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Vercel"],
      category: "frontend",
      link: "https://corporate-site-demo.com",
      github: "https://github.com/user/corporate-site",
      features: ["SEO-оптимизация", "CMS интеграция", "Быстрая загрузка", "Адаптивность"]
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Приложение для управления задачами с командной работой и уведомлениями",
      longDescription: "Современное приложение для управления проектами и задачами. Поддерживает командную работу, канбан-доски, временные метки и push-уведомления.",
      image: "/img/e266e266-03c8-4c89-badf-53a50ea048dc.jpg",
      tech: ["Vue.js", "Node.js", "Socket.io", "MySQL", "Docker"],
      category: "fullstack",
      link: "https://taskapp-demo.com",
      github: "https://github.com/user/task-app",
      features: ["Канбан-доски", "Командная работа", "Уведомления", "Временные метки"]
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Мобильное приложение прогноза погоды с геолокацией и красивой анимацией",
      longDescription: "Элегантное мобильное приложение для прогноза погоды с анимированными иконками, геолокацией и детальными метеорологическими данными.",
      image: "/img/9d53b51f-2353-4a12-9d1e-fb8252ac1b83.jpg",
      tech: ["React Native", "OpenWeather API", "AsyncStorage", "Lottie"],
      category: "mobile",
      link: "https://play.google.com/store/apps/weather",
      github: "https://github.com/user/weather-app",
      features: ["Геолокация", "Анимации", "Оффлайн режим", "Виджеты"]
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      description: "Безопасный кошелек для криптовалют с многоуровневой защитой",
      longDescription: "Надежный кошелек для хранения и передачи криптовалют с поддержкой множества blockchain сетей и современными мерами безопасности.",
      image: "/img/04eca957-0874-443a-bc77-be683a8307ae.jpg",
      tech: ["React", "Web3.js", "Solidity", "MetaMask", "Ethereum"],
      category: "blockchain",
      link: "https://crypto-wallet-demo.com",
      github: "https://github.com/user/crypto-wallet",
      features: ["Мультивалютность", "Безопасность", "DeFi интеграция", "NFT поддержка"]
    }
  ];

  const categories = [
    { id: "all", name: "Все проекты", icon: "Grid3X3" },
    { id: "frontend", name: "Frontend", icon: "Monitor" },
    { id: "fullstack", name: "Full Stack", icon: "Layers" },
    { id: "mobile", name: "Mobile", icon: "Smartphone" },
    { id: "ai", name: "AI/ML", icon: "Brain" },
    { id: "blockchain", name: "Blockchain", icon: "Coins" }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent mb-8">
              Мое портфолио
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Коллекция проектов, над которыми я работал за последние годы. От веб-приложений до мобильных решений и ИИ.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Поиск по проектам или технологиям..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-base"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  <Icon name={category.icon as any} size={16} />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              Найдено проектов: <span className="font-semibold text-foreground">{filteredProjects.length}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl overflow-hidden animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button size="sm" className="bg-white/90 text-black hover:bg-white">
                        <Icon name="ExternalLink" size={16} />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/90 text-black border-white/90 hover:bg-white">
                        <Icon name="Github" size={16} />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white capitalize">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Ключевые возможности:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {project.features.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.features.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Технологии:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name="ExternalLink" className="mr-2" size={16} />
                      Посмотреть
                    </Button>
                    <Button variant="ghost" size="sm" className="group-hover:bg-muted transition-colors">
                      <Icon name="Github" size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" className="group-hover:bg-muted transition-colors">
                      <Icon name="Info" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Icon name="SearchX" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-semibold mb-2">Проекты не найдены</h3>
              <p className="text-muted-foreground mb-6">
                Попробуйте изменить фильтры или поисковый запрос
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                variant="outline"
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Готов создать что-то особенное?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            У вас есть идея для проекта? Давайте обсудим, как я могу помочь воплотить её в жизнь
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Начать проект
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg hover:scale-105 transition-all duration-300">
              <Icon name="MessageCircle" className="mr-2" />
              Обсудить идею
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;