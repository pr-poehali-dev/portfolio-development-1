import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Современная платформа электронной коммерции с интеграцией платежных систем",
      image: "/img/e266e266-03c8-4c89-badf-53a50ea048dc.jpg",
      tech: ["React", "TypeScript", "Node.js"],
      category: "Web Development"
    },
    {
      title: "Mobile Banking App",
      description: "Безопасное мобильное приложение для банковских операций",
      image: "/img/e266e266-03c8-4c89-badf-53a50ea048dc.jpg",
      tech: ["React Native", "Redux", "Firebase"],
      category: "Mobile Development"
    },
    {
      title: "AI Analytics Dashboard",
      description: "Интеллектуальная аналитическая панель с машинным обучением",
      image: "/img/e266e266-03c8-4c89-badf-53a50ea048dc.jpg",
      tech: ["Python", "TensorFlow", "React"],
      category: "AI/ML"
    },
    {
      title: "Social Network Platform",
      description: "Социальная сеть нового поколения с видеочатом",
      image: "/img/e266e266-03c8-4c89-badf-53a50ea048dc.jpg",
      tech: ["Vue.js", "WebRTC", "Socket.io"],
      category: "Web Development"
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 95, icon: "Code" },
    { name: "Backend Development", level: 90, icon: "Server" },
    { name: "UI/UX Design", level: 85, icon: "Palette" },
    { name: "Mobile Development", level: 80, icon: "Smartphone" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-purple-500/10"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent mb-8">
              Привет, я разработчик
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Создаю современные веб-приложения и мобильные решения с фокусом на пользовательский опыт
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Посмотреть проекты
                <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg hover:scale-105 transition-all duration-300">
                <Icon name="Download" className="mr-2" />
                Скачать резюме
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-sm"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: '1s'}}>
          <div className="w-32 h-32 bg-gradient-to-br from-secondary/20 to-purple-500/20 rounded-full blur-sm"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Мои навыки</h2>
            <p className="text-xl text-muted-foreground">Технологии, с которыми я работаю</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="group hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={skill.icon as any} className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Избранные проекты</h2>
            <p className="text-xl text-muted-foreground">Некоторые из моих последних работ</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl overflow-hidden animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name="ExternalLink" className="mr-2" size={16} />
                      Посмотреть
                    </Button>
                    <Button variant="ghost" size="sm" className="group-hover:bg-muted transition-colors">
                      <Icon name="Github" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Готов к новым проектам</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ищете разработчика для своего проекта? Давайте обсудим, как я могу помочь воплотить ваши идеи в жизнь
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a href="mailto:hello@example.com" className="group flex items-center gap-3 p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Icon name="Mail" className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">hello@example.com</span>
            </a>
            <a href="https://t.me/username" className="group flex items-center gap-3 p-4 bg-gradient-to-r from-secondary to-purple-500 text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Icon name="MessageCircle" className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">Telegram</span>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
              <Icon name="Github" size={24} />
            </a>
            <a href="#" className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;